export interface FAQData {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQData[] = [
  {
    id: 1,
    question: "What's the typical timeline, and what's included in the base MVP package?",
    answer: "The core development of your MVP takes 10 business days—starting the day we finalize your feature list and approve the scope. This phase covers coding and building the core functionality only.\n\nDiscovery calls, any customer development work, and post-build services—like the live Zoom training and delivery of the user manual—are additional time outside those 10 days.\n\nThe full project timeline depends on how quickly we move through strategy and planning, but once development begins, you're looking at a tight 2-week sprint to a launchable product."
  },
  {
    id: 2,
    question: "Can I add more features later if my needs change during or after the build?",
    answer: "Yes. We help you prioritize the right core features first, then offer optional enhancements later. This lets you launch lean and still grow strategically—without rebuilding from scratch or burning out too soon."
  },
  {
    id: 3,
    question: "What kind of support do I get after launch—including training and revisions?",
    answer: "Every project includes live training, user-friendly documentation, and a short support window to make sure your rollout goes smoothly. You'll know how to manage your product—and we'll be here if you want to scale or iterate."
  },
  {
    id: 4,
    question: "How do we communicate during the project, and what response times can I expect?",
    answer: "We'll connect through scheduled Zoom calls, email, and shared docs—no timezone chaos or broken communication. We respond within 1 business day, and we structure regular updates so you're never guessing where things stand."
  },
  {
    id: 5,
    question: "Who owns the code and deliverables once the project is finished?",
    answer: "You do. 100% of the code, assets, and documentation are yours. We don't hold anything hostage—you're free to scale, hire, or pivot without strings attached."
  },
  {
    id: 6,
    question: "I've worked with developers before and it didn't go well—how will this be different?",
    answer: "Most devs focus on code. We focus on your outcomes. Our Startup Launch System is designed to keep you in control, with transparent pricing, clear scope, and a process that's built with you—not behind closed doors."
  },
  {
    id: 7,
    question: "I'm not technical at all—will I actually understand what you build for me?",
    answer: "That's exactly why we created this service. We break everything down in plain language, deliver real training, and give you tools (like guides and walkthroughs) so you can feel confident running your product—even if you've never touched code."
  },
  {
    id: 8,
    question: "What if I'm still figuring things out—can I work with you if I'm early-stage or waiting on funding?",
    answer: "If you're funded and have a clear idea of what you want to build, you're in the perfect place to work with us. If you're still validating your concept or unsure if there's demand, we offer a separate Customer Development Research package for $2,000. It helps you uncover what real customers actually want—so you're not guessing when it's time to build."
  }
];