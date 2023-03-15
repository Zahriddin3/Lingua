import RoundBtn from "./RoundBtn";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src="/logo_header.png" />
      <div className="flex space-x-[44px]">
        {/* 1-etap Komponent chaqirilgan joyda prop yaratamiz */}
        <NavLink name="Courses" />
        <NavLink name="About Us" />
        <NavLink name="Teachers" />
        <NavLink name="Pricing" />
        <NavLink name="Careers" />
        <NavLink name="Blog" />
      </div>
      <RoundBtn isBgPurple={false} />
    </header>
  );
}



export default Header;
// Prop
{
  /* 2-etap Komponent yaratilingan joyda, propni ovolib ishlatamiz */
}
function NavLink(props) {
  return <a className=" text-[14px] font-light text-myGray">{props.name}</a>;
}
