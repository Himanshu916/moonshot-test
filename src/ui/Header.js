import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex  text-white justify-between px-6 py-3 rounded-md items-center border-2 border-[rgb(250,250,250,0.3)] bg-[rgb(23,23,23,0.4)]   ">
      <p className="cursor-pointer">
        <Link to="/"> Homepage</Link>
      </p>
      <ul className="flex justify-between gap-2 items-center">
        <li className="cursor-pointer">Login</li>
        <li className="border-2 border-black px-3 py-1 cursor-pointer rounded-md">
          Create Account
        </li>
      </ul>
    </div>
  );
}

export default Header;
