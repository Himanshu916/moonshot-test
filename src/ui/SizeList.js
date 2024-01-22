import { FaRegCircle } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

function SizeList({ children, selected, onSelect, id }) {
  return (
    <li className="flex border-b-2 px-3 py-2 bg-gray-100 border--gray-200 justify-between">
      {children}
      {selected ? (
        <span className="text-green-600 text-[1.5rem] font-bold">
          {" "}
          <HiCheckCircle />
        </span>
      ) : (
        <span onClick={() => onSelect(id)} className=" text-[1.5rem] font-bold">
          {" "}
          <FaRegCircle />
        </span>
      )}
    </li>
  );
}

export default SizeList;
