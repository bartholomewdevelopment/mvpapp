import emailjs from "@emailjs/browser";

interface EmailData {
  user_email: string;
  interested_in?: string;
  validation_status?: string;
  planning_stage?: string;
  funding_status?: string;
  active_users?: string;
  budget?: string;
  main_goal?: string;
  role?: string;
  timeline?: string;
  user_name?: string;
  user_phone?: string;
}

// ============================================================
// EmailJS Configuration
// ============================================================
//
// FREE TIER: 200 emails/month - plenty for lead capture.
// ============================================================

const EMAILJS_CONFIG = {
  serviceId: "service_mvp_app",
  templateId: "template_mvp_app",
  publicKey: "-FGqvzXuTYnZckP4F",
};

// Your email address where you want to receive form submissions
const YOUR_EMAIL = "joseph@bartholomewdevelopment.com";

/**
 * The modal stores each answer as a slug ('5k-15k', 'co-founder'). Those are
 * fine in form state and useless in an inbox, so every slug is mapped back to
 * the wording the person actually clicked before it reaches an email.
 *
 * Keep these in sync with the option lists in GetStartedModal.tsx and
 * GetStartedModalSteps.tsx — if an option is added there and not here, the
 * email falls back to showing the raw slug rather than losing the answer.
 */
const LABELS: Record<string, Record<string, string>> = {
  interested_in: {
    "startup-lab": "BartDev Startup Lab — validate first",
    "mvp-dev": "MVP Development — already validated",
    "not-sure": "Not sure yet, wants help deciding",
  },
  validation_status: {
    "not-validated": "Has not talked to potential customers yet",
    "friends-family": "Only validated with friends and family",
    "few-interviews": "A few interviews (fewer than 20 strangers)",
    "validated-committed": "20+ interviews with strangers, plus 5–10 paying commitments",
    "validated-paying": "20+ interviews, plus paying customers already using a prototype",
  },
  planning_stage: {
    "initial-concept": "Just an initial concept — no clear plan yet",
    "problem-defined": "Problem defined, solution still in brainstorm",
    "solution-defined": "Solution defined — working on the feature list",
    "wireframes-created": "Wireframes or prototypes created",
    "requirements-complete": "Detailed requirements and user stories complete",
  },
  funding_status: {
    "idea-only": "Idea only — no funding yet",
    bootstrapped: "Bootstrapped (personal savings, friends and family)",
    "pre-seed": "Pre-seed in progress or secured (up to ~$250K)",
    seed: "Seed round or beyond ($250K+)",
  },
  active_users: {
    "no-users": "No users yet — still validating the idea",
    waitlist: "Small waitlist / email signups only",
    "beta-users": "Beta users testing the product",
    "paying-early": "Paying early customers",
    "hundreds-paying": "Hundreds of paying customers",
  },
  budget: {
    "less-18k": "Less than $18,000",
    "18k-30k": "$18,000–$30,000",
    "30k-50k": "$30,000–$50,000",
    "50k-100k": "$50,000–$100,000",
    "100k-plus": "$100,000+",
  },
  main_goal: {
    "validate-idea": "Validate an idea before building",
    "launch-product": "Launch a full product for real customers",
    "upgrade-system": "Upgrade or replace an existing system",
    "raise-funds": "Raise funds with a working prototype",
    other: "Something else",
  },
  role: {
    "solo-founder": "Solo founder",
    "co-founder": "Co-founder or partner team",
    "product-manager": "Product manager",
    "technical-lead": "Technical lead / CTO",
    investor: "Investor or advisor",
  },
  timeline: {
    immediately: "Immediately — ready to start",
    "within-1-month": "Within 1 month",
    "1-3-months": "1–3 months from now",
    "3-6-months": "3–6 months from now",
    "gathering-info": "Just gathering info — not sure yet",
  },
};

/** Slug -> the wording they clicked. Unknown slugs pass through unchanged. */
const friendly = (field: string, value?: string): string => {
  if (!value) return "";
  return LABELS[field]?.[value] ?? value;
};

/** For the individual template variables, which should never render blank. */
const orNotProvided = (value: string): string => value || "Not provided";

/** One "Label: value" line, dropped entirely when there's no answer. */
const row = (label: string, value?: string): string =>
  value ? `${label}: ${value}` : "";

/**
 * A titled block. Returns nothing at all if every row inside it is empty, so
 * the email never shows a header with nothing under it.
 */
const section = (title: string, rows: string[]): string[] => {
  const kept = rows.filter(Boolean);
  return kept.length ? [title, ...kept, ""] : [];
};

/** e.g. "Thursday, July 30, 2026 at 11:58 AM" */
const readableTimestamp = (): string =>
  new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

/**
 * Sends form data to you via EmailJS.
 *
 * @param data - The form data collected from the user
 * @param type - 'initial' (email only, fired at step 1) or 'progress' (the full
 *               set, fired when they reach scheduling)
 */
export const sendEmailNotification = async (
  data: EmailData,
  type: "initial" | "progress"
) => {
  if (EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID") {
    console.warn("⚠️ EmailJS not configured yet!");
    console.log("Form data that would be sent:", data);
    return {
      success: true,
      result: "EmailJS not configured - check console for form data",
    };
  }

  try {
    const sentAt = readableTimestamp();

    // Everything below is written to be read by a person in an inbox, not
    // parsed. Answers they didn't give are left out rather than printed as
    // empty rows.
    const name = data.user_name?.trim() || "";
    const who = name || data.user_email;

    const answers = {
      interested_in: friendly("interested_in", data.interested_in),
      validation_status: friendly("validation_status", data.validation_status),
      planning_stage: friendly("planning_stage", data.planning_stage),
      funding_status: friendly("funding_status", data.funding_status),
      active_users: friendly("active_users", data.active_users),
      budget: friendly("budget", data.budget),
      main_goal: friendly("main_goal", data.main_goal),
      role: friendly("role", data.role),
      timeline: friendly("timeline", data.timeline),
    };

    const formattedMessage =
      type === "initial"
        ? [
            `Hi Joseph,`,
            ``,
            `A new lead just started the intake form — only their email so far.`,
            ``,
            `Email: ${data.user_email}`,
            ``,
            `They haven't answered the questions yet, so this is an early signal`,
            `rather than a finished enquiry. If they drop off, this is the address`,
            `to follow up on.`,
            ``,
            `Received ${sentAt}`,
          ].join("\n")
        : [
            `Hi Joseph,`,
            ``,
            `${who} just completed the intake form and went through to book a free`,
            `Pre-Validation. Here's everything they told us.`,
            ``,
            ...section("WHO THEY ARE", [
              row("Name", name),
              row("Email", data.user_email),
              row("Phone", data.user_phone?.trim()),
              row("Role", answers.role),
            ]),
            ...section("WHERE THEY ARE", [
              row("Validation so far", answers.validation_status),
              row("Interested in", answers.interested_in),
              row("Planning stage", answers.planning_stage),
              row("Traction", answers.active_users),
              row("Funding", answers.funding_status),
            ]),
            ...section("WHAT THEY WANT", [
              row("Main goal", answers.main_goal),
              row("Budget", answers.budget),
              row("Timeline", answers.timeline),
            ]),
            `Received ${sentAt}`,
            ``,
            `Reply to this email to reach ${name || "them"} directly.`,
          ].join("\n");

    const templateParams = {
      // Where it goes
      to_email: YOUR_EMAIL,
      reply_to: data.user_email,
      from_name: name || "MVP Applications Lead",

      subject:
        type === "initial"
          ? `New lead started the form — ${data.user_email}`
          : `New enquiry from ${who} — booked a Pre-Validation`,

      // The friendly, ready-to-read summary
      message: formattedMessage,

      // Also sent so the older template's {{name}} / {{time}} stop rendering
      // blank without needing an edit first.
      name: orNotProvided(name),
      time: sentAt,
      sent_at: sentAt,

      // Individual fields, already converted to friendly wording
      user_email: data.user_email,
      user_name: orNotProvided(name),
      user_phone: orNotProvided(data.user_phone?.trim() || ""),
      interested_in: orNotProvided(answers.interested_in),
      validation_status: orNotProvided(answers.validation_status),
      planning_stage: orNotProvided(answers.planning_stage),
      funding_status: orNotProvided(answers.funding_status),
      active_users: orNotProvided(answers.active_users),
      budget: orNotProvided(answers.budget),
      main_goal: orNotProvided(answers.main_goal),
      role: orNotProvided(answers.role),
      timeline: orNotProvided(answers.timeline),
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log("✅ Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    console.log("📝 Form data (backup):", JSON.stringify(data, null, 2));
    return { success: false, error };
  }
};
