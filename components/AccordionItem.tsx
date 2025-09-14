
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-black dark:border-gray-500 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_#ffffff] bg-white/60 dark:bg-gray-800/60 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:-translate-x-1">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-gray-800 dark:text-white focus:outline-none"
      >
        <span>{title}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div className="p-5 pt-0 opacity-100 transition-opacity duration-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;