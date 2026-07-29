import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { faqData } from './FAQData';
import SectionHeader from './SectionHeader';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions"
          lede="Everything you need to know about launching your MVP with confidence."
          className="mb-14 sm:mb-16"
        />

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