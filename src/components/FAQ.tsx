import React, { useState } from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQItem from './FAQItem';
import { faqData } from './FAQData';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const openCalendly = () => {
    window.open('https://calendly.com/joseph-bartholomewdevelopment/discovery-strategy-meeting', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#fd6a62]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#fd6a62]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <HelpCircle className="h-10 w-10 text-[#fd6a62] mr-4" />
              <Sparkles className="h-4 w-4 text-[#fd6a62] absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-[#fd6a62] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about launching your MVP with confidence
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;