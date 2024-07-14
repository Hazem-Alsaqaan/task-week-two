import { MdOutlineAddToPhotos } from "react-icons/md";

interface Props {
  title: string;
  handleClick: () => void;
}
const CustomButton = ({ title, handleClick }: Props) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`min-w-44 bg-indigo-500 px-5 py-1 rounded-md text-white  capitalize flex items-center justify-center text-nowrap focus:outline-none hover:bg-indigo-700 duration-150 max-sm:text-xs max-sm:px-2 max-sm:min-w-16`}
    >
      {title} <MdOutlineAddToPhotos className="ml-1" />
    </button>
  );
};

export default CustomButton;
