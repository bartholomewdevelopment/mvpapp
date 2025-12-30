import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  // Split answer into paragraphs for better formatting
  const paragraphs = answer.split('\n\n').filter(p => p.trim());

  return (
    <div 
      className="border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#fd6a62]/10 bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left hover:bg-gradient-to-r hover:from-[#fd6a62]/10 hover:to-[#fc5951]/10 transition-all duration-300 flex items-center justify-between group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[#fd6a62] transition-colors duration-300 pr-4">
          {question}
        </span>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#fd6a62] transform transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-[#fd6a62] transform transition-all duration-300 group-hover:scale-110" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 bg-gradient-to-br from-slate-900/50 to-gray-900/50 border-t border-[#fd6a62]/20">
          <div className="space-y-4">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;