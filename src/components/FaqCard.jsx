import { useRef } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function FaqCard(props) {
  const contentRef = useRef(null);

  return (
    <div className="px-4 max-w-3xl py-4 border-b-2 border-yellow-500 text-sm group">
      <div
        className="question-box flex justify-between font-semibold cursor-pointer sticky"
        onClick={props.onToggle}
      >
        <p className="text-wrap group-hover:underline">{props.question}</p>
        {props.isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: props.isOpen ? contentRef.current.scrollHeight + "px" : "0px"
        }}
      >
        <p className="py-3">
          {props.answer}
        </p>
      </div>
    </div>
  );
}

export default FaqCard;
