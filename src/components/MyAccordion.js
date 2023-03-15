import { useState } from "react";

function MyAccordion(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`${
        isVisible ? "bg-myPurple text-white" : "h-[108px] "
      } rounded-[40px] pl-[56px] py-[36px] pr-[32px] border border-[#B0B0C0]`}
    >
      <div className="flex justify-between">
        <span className="text-[20px] ">{props.title}</span>
        <button
          onClick={toggleVisible}
          className={`${isVisible ? "bg-white text-purple-800" : "bg-myPurple "} bg-myPurple rounded-full w-[32px] h-[32px] text-white`}
        >
          {isVisible ? "-" : "+"}
        </button>
      </div>
      {isVisible && <p>{props.body}</p>}
    </div>
  );
}

export default MyAccordion;