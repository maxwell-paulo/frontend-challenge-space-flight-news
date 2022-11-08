import logo from "../../images/space-flight-news-logo.png";

export function Navbar() {
  return (
    <div className="flex flex-col justify-center - items-center mt-7 mb-10 gap-3">
      <img src={logo} alt="Space flight news logo" />
      <p className="font-Roboto text-[#1E2022]">Space Flight News</p>
      <div className="w-11/12 h-0.5 bg-gray-300"></div>
    </div>
  );
}
