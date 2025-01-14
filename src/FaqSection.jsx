import React from 'react'
import Faq from './Faq';

const FaqSection = () => {

    const questions = [
        {
            id: 1,
            question: "What is JSX?",
            answer: "JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe UI elements.",
        },
        {
            id: 2,
            question: "What is a component?",
            answer: "A component is a reusable piece of UI defined as a function or class in React.",
        },
        {
            id: 3,
            question: "What is state in React?",
            answer: "State is an object that represents dynamic data that affects the UI of a component.",
        },
        {
            id: 4,
            question: "What are props in React?",
            answer: "Props are inputs passed to a component to customize its behavior or appearance.",
        },
        {
            id: 5,
            question: "What is the virtual DOM?",
            answer: "The virtual DOM is a lightweight copy of the actual DOM, used to improve rendering performance in React.",
        },
        {
            id: 6,
            question: "What is the difference between state and props?",
            answer: "State is managed within a component, while props are passed to a component from its parent.",
        },
        {
            id: 7,
            question: "What is React's useEffect hook?",
            answer: "The useEffect hook lets you perform side effects in function components, like data fetching or DOM manipulation.",
        },
        {
            id: 8,
            question: "What is the purpose of keys in React lists?",
            answer: "Keys help React identify elements in a list for efficient updates and re-renders.",
        },
        {
            id: 9,
            question: "What is the difference between functional and class components?",
            answer: "Functional components are simple functions, while class components use ES6 classes and can manage state and lifecycle methods.",
        },
        {
            id: 10,
            question: "What is React Router?",
            answer: "React Router is a library for managing navigation and routing in React applications.",
        },
    ];


  return (
    <div className='p-10'>
        <div className='text-4xl font-bold mb-3'>React Frequently Asked Questions</div>

        <div className='flex  flex-col'>
            {questions.map((question) => (
                <Faq key={question.id} faq={question}/>
            ))}
        </div>
    </div>
  )
}

export default FaqSection