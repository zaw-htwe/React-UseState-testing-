import React, { useState } from "react";

const Faq = ({ faq: { id, question, answer } }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center border select-none active:scale-90 duration-500 border-black p-5"
      >
        <h1 className={`text-2xl ${open ? "font-normal" : "font-bold"}`}>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size60 duration-500 w-6 h-6 ${open ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p
        className={`text-lg bg-gray-200 p-5 ${open === false ? "hidden" : ""}`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Faq;
