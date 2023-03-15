// Ternary operator
function RoundBtn(props) {
  return (
    <button
      className={`${
        props.isBgPurple ? "bg-myPurple text-white" : "bg-white text-myPurple"
      } px-[32px] py-[12px] text-[14px] font-bold rounded-full`}
    >
      Get Started
    </button>
  );
}

function RoundBtnOld(props) {
  let btnBackgroundColor;
  let btnTextColor;
  if (props.isBgPurple) {
    btnBackgroundColor = "bg-myPurple";
    btnTextColor = "text-white";
  } else {
    btnBackgroundColor = "bg-white";
    btnTextColor = "text-myPurple";
  }

  return (
    <button
      className={`${btnTextColor} ${btnBackgroundColor} px-[32px] py-[12px] text-[14px] font-bold rounded-full`}
    >
      Get Started
    </button>
  );
}

export default RoundBtn;
