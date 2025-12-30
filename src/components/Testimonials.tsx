import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Globe, Sparkles, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      company: 'Influence on Purpose',
      testimonial: 'The MVP development process was seamless and professional. Bartholomew Development delivered exactly what we needed to launch our platform and start making a real impact in our community.',
      author: 'John',
      image: '/images/testimonials/influence-screenshot.png',
      website: 'https://influenceonpurpose.com',
      logo: '/images/testimonials/influence-logo.png'
    },
    {
      company: 'Homecoming Ranch',
      testimonial: 'Our ranch management system came to life through exceptional development work. The user experience is intuitive and the backend is robust - exactly what we needed for our operations.',
      author: 'Margot',
      image: '/images/testimonials/homecoming-screenshot.png',
      website: 'https://homecomingranch.com',
      logo: '/images/testimonials/homecoming-logo.png'
    },
    {
      company: 'FARMS - Farm and Ranch Management Software',
      testimonial: 'The technical expertise and understanding of agricultural workflows resulted in a platform that truly serves our farming community. Outstanding work from start to finish.',
      author: 'Product Manager',
      image: '/images/testimonials/farms-screenshot.png',
      website: 'https://farmssystems.com',
      logo: '/images/testimonials/farms-logo.jpg'
    },
    {
      company: 'Hollow Log Studios',
      testimonial: 'Our creative studio needed a platform that matched our artistic vision. The BartDev Team captured our brand perfectly while delivering powerful functionality.',
      author: 'Bethany',
      image: '/images/testimonials/hollowlog-screenshot.png',
      website: 'https://hollowlogstudios.com',
      logo: '/images/testimonials/hollowlog-logo.webp'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            See the websites and platforms we've built for successful founders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
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
                        {testimonial.website.replace('https://', '')}
                      </div>
                    </div>
                    
                    {testimonial.image ? (
                      <div className="bg-white rounded overflow-hidden aspect-video">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.company}
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
                        href={testimonial.website}
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

                <blockquote className="text-gray-700 mb-4 sm:mb-6 italic text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>
                
                {/* 5 Gold Stars */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400 mx-0.5" 
                    />
                  ))}
                </div>
                
                <div className="border-t pt-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-[#fd6a62] font-medium truncate">{testimonial.company}</p>
                  </div>
                  {testimonial.logo && (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 ml-4">
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
