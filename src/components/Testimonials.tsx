import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Globe, Sparkles, Users } from 'lucide-react';

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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#fd6a62]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-4 sm:mb-6">
            Recent Projects
          </h2>
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
            <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
            <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real websites and platforms we've built—primarily for family members who trusted us with their business ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-sm border border-white/10 shadow-lg shadow-[#fd6a62]/10 hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-300 transform hover:-translate-y-1 group">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 sm:mb-8 relative">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-3 sm:p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
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
                      <div className="bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded aspect-video flex items-center justify-center">
                        <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                      </div>
                    )}

                    <div className="mt-4">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#fd6a62] to-[#fc5951] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fc5951] to-[#fd6a62] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <Sparkles className="w-4 h-4 relative z-10 group-hover/btn:animate-pulse" />
                        <span className="relative z-10 text-xs sm:text-sm">View Live Website</span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 sm:mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Type Badge */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#fd6a62]/20 border border-[#fd6a62]/40 text-[#fd6a62] px-4 py-2 rounded-full text-xs font-semibold">
                    <Users className="w-3 h-3" />
                    {project.relation}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base truncate">{project.company}</p>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium truncate">Live & Operational</p>
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
          <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-300 leading-relaxed">
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
