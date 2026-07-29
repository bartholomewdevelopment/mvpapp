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

  // Function to render paragraph with bullet points
  const renderParagraph = (paragraph: string, idx: number) => {
    // Check if paragraph contains bullet points
    if (paragraph.includes('•')) {
      const lines = paragraph.split('\n').filter(line => line.trim());
      const bulletLines = lines.filter(line => line.trim().startsWith('•'));
      const nonBulletLines = lines.filter(line => !line.trim().startsWith('•'));

      return (
        <div key={idx} className="space-y-3">
          {nonBulletLines.length > 0 && (
            <p className="text-ink-muted leading-relaxed text-base">
              {nonBulletLines.join(' ')}
            </p>
          )}
          {bulletLines.length > 0 && (
            <ul className="space-y-2 ml-4">
              {bulletLines.map((line, lineIdx) => (
                <li key={lineIdx} className="text-ink-muted leading-relaxed text-base flex items-start gap-2">
                  <span className="text-[#fd6a62] font-bold flex-shrink-0">•</span>
                  <span>{line.replace('•', '').trim()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    return (
      <p key={idx} className="text-ink-muted leading-relaxed text-base">
        {paragraph}
      </p>
    );
  };

  return (
    <div 
      className="border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-150 ease-signature hover:shadow-lift-high hover:shadow-[#fd6a62]/10 bg-white/[0.024] backdrop-blur-sm"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left hover:bg-gradient-to-r hover:from-[#fd6a62]/10 hover:to-[#fc5951]/10 transition-all duration-150 ease-signature flex items-center justify-between group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[#fd6a62] transition-colors duration-150 ease-signature pr-4">
          {question}
        </span>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#fd6a62] transform transition-transform duration-200 ease-signature group-hover:scale-110" />
          ) : (
            <ChevronDown className="h-5 w-5 text-ink-subtle group-hover:text-[#fd6a62] transform transition-all duration-150 ease-signature group-hover:scale-110" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-signature ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 bg-gradient-to-br from-slate-900/50 to-gray-900/50 border-t border-[#fd6a62]/20">
          <div className="space-y-4">
            {paragraphs.map((paragraph, idx) => renderParagraph(paragraph, idx))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;