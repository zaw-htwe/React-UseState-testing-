import React, { useState } from "react";
import Faq from "./Faq";
import { use } from "react";

const FaqSection = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is JSX?",
      answer:
        "JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe UI elements.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is a component?",
      answer:
        "A component is a reusable piece of UI defined as a function or class in React.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is an object that represents dynamic data that affects the UI of a component.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What are props in React?",
      answer:
        "Props are inputs passed to a component to customize its behavior or appearance.",
      isOpen: false,
    },
  ]);

  const toggleQuestion = (id) => {
    setQuestions(questions.map((el) => el.id === id ? {...el, isOpen: !el.isOpen}:{...el,isOpen:false}));
  };

  return (
    <div className="p-10">
      <div className="text-4xl font-bold mb-3">
        React Frequently Asked Questions
      </div>

      <div className="flex  flex-col">
        {questions.map((question) => (
          <Faq toggleQuestions={toggleQuestion} key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

const toggleQuestion = (id) => {
  set;
};

export default FaqSection;
