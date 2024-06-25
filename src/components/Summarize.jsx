import React, { useState, useRef } from 'react';
import Button from './Button';

const SummarizeText = () => {
  const [text1, setText1] = useState('');
  const [summary, setSummary] = useState('');
  const summaryRef = useRef(null);

  const handleSummarize = () => {
    // Implement summarization logic here
    setSummary(`Summary of: ${text1}`);
    summaryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-4 max-lg:flex-wrap w-full">
      <div className="w-full px-2 rounded-[2rem] my-2">
        <textarea
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          className="w-full h-96 p-2 border border-n-6 rounded-md bg-n-8 text-n-1/50"
          placeholder="Enter text 1"
        />
      </div>
      <div className="flex justify-center">
        <Button className="w-32" onClick={handleSummarize}>
          Summarize
        </Button>
      </div>
      <div
        className="w-full px-2 rounded-[2rem] my-2"
        ref={summaryRef}
      >
        <textarea
          value={summary}
          readOnly
          className="w-full h-96 p-2 border border-n-6 rounded-md bg-n-8 text-n-1/50"
          placeholder="Summary"
        />
      </div>
    </div>
  );
};

export default SummarizeText;
