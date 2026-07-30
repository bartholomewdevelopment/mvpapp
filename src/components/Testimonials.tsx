import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Globe, Sparkles, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Testimonials: React.FC = () => {
  const projects = [
    {
      company: 'Influence on Purpose',
      description: 'Executive coaching platform for John Baker Sr. featuring C-Suite leadership development and company culture transformation resources.',
      relation: 'Family Project',
      image: '/images/testimonials/influence-screenshot.png',
      website: 'https://influenceonpurpose.com',
      logo: '/images/testimonials/influence-logo.png'
    },
    {
      company: 'Homecoming Ranch',
      description: 'Ranch management system with guest tracking and operational workflow automation. Built for sustainable ranch operations.',
      relation: 'Family Project',
      image: '/images/testimonials/homecoming-screenshot.png',
      website: 'https://homecomingranch.com',
      logo: '/images/testimonials/homecoming-logo.png'
    },
    {
      company: 'Hollow Log Studios',
      description: 'Creative studio portfolio and booking platform showcasing artistic services. Features project galleries, client booking, and service management.',
      relation: 'Family Project',
      image: '/images/testimonials/hollowlog-screenshot.png',
      website: 'https://hollowlogstudios.com',
      logo: '/images/testimonials/hollowlog-logo.webp'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Recent work"
          title="Recent projects"
          lede="Real websites and platforms we've built — primarily for family members who trusted us with their business ideas."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-lift bg-white/[0.032] backdrop-blur-sm border border-hairline">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 sm:mb-8 relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-3 sm:p-4 shadow-lift-high transform group-hover:scale-105 transition-all duration-150 ease-signature">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="bg-gray-600 rounded px-2 py-1 text-xs text-white font-mono overflow-hidden">
                        {project.website.replace('https://', '')}
                      </div>
                    </div>

                    {project.image ? (
                      <div className="bg-white rounded overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={project.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-brand-grad rounded aspect-video flex items-center justify-center">
                        <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                      </div>
                    )}

                    <div className="mt-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-brand-grad text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-150 ease-signature overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fc5951] to-[#fd6a62] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-150 ease-signature"></div>
                        <Sparkles className="w-4 h-4 relative z-10" />
                        <span className="relative z-10 text-xs sm:text-sm">View Live Website</span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200 ease-signature" />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-ink-muted mb-4 sm:mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Type Badge */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#fd6a62]/20 border border-[#fd6a62]/40 text-[#fd6a62] px-4 py-2 rounded-full text-xs font-semibold">
                    <Users className="w-3 h-3" />
                    {project.relation}
                  </div>
                </div>

                <div className="border-t border-hairline pt-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base truncate">{project.company}</p>
                    <p className="text-xs sm:text-sm text-ink-subtle font-medium truncate">Live & Operational</p>
                  </div>
                  {project.logo && (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 ml-4">
                      <img
                        src={project.logo}
                        alt={`${project.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Honest Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-hairline-strong rounded-xl p-6 text-center">
            <p className="text-sm text-ink-muted leading-relaxed">
              <strong className="text-white">Full Transparency:</strong> These projects were built for family members exploring their business ideas.
              While we can't provide traditional client testimonials yet, these are real, live platforms that demonstrate
              our ability to deliver complete MVPs from concept to launch. Your project will receive the same level of care and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
