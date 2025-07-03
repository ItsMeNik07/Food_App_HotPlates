import FaqCard from "./FaqCard";
import { useState } from "react";
const faq = [
  {
    question: "What is HotPlates?",
    answer: "HotPlates is an online food delivery platform that connects you with your favorite local restaurants, allowing you to order delicious meals easily and quickly."
  },
  {
    question: "How do I place an order on HotPlates?",
    answer: "Simply browse through our restaurant partners, select your preferred dishes, add them to your cart, and proceed to checkout. You can pay online securely or opt for cash on delivery where available."
  },
  {
    question: "Does HotPlates offer contactless delivery?",
    answer: "Yes, we provide contactless delivery for your safety and convenience. Select the contactless option during checkout, and our delivery partner will leave your order at your doorstep."
  },
  {
    question: "Can I schedule an order in advance?",
    answer: "Absolutely! HotPlates allows you to schedule your orders for a later time or date so you can plan your meals ahead conveniently."
  },
  {
    question: "What should I do if I receive the wrong order?",
    answer: "If you receive an incorrect order, please contact our customer support immediately through the app or website. We will resolve the issue promptly by replacing the order or issuing a refund as per our policy."
  }
]

function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <div>
      {faq.map((item, index) => (
        <FaqCard
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default FaqList;
