import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner({ language = 'en' }) {
  const enText = (
    <>
      <strong>Disclaimer:</strong> This chatbot provides AI-generated guidance only. Always verify recommendations with a <strong>licensed agricultural extension officer</strong> before applying treatments. Responses may not account for your specific micro-climate or soil conditions.
    </>
  );

  const hiText = (
    <>
      <strong>अस्वीकरण:</strong> यह चैटबॉट केवल AI-जनित मार्गदर्शन प्रदान करता है। उपचार लागू करने से पहले हमेशा <strong>लाइसेंस प्राप्त कृषि विस्तार अधिकारी</strong> से सिफारिशें सत्यापित करें। उत्तर आपके विशिष्ट सूक्ष्म-जलवायु या मिट्टी की स्थितियों को ध्यान में नहीं रख सकते।
    </>
  );

  return (
    <div className="bg-secondary/70 border border-accent rounded-xl px-4 py-3 flex items-start gap-3">
      <AlertTriangle className="w-4 h-4 text-secondary-foreground/70 flex-shrink-0 mt-0.5" />
      <p className="text-xs text-secondary-foreground/80 leading-relaxed">
        {language === 'hi' ? hiText : enText}
      </p>
    </div>
  );
}