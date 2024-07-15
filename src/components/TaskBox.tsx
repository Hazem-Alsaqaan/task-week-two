import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useAppDispatch } from "../redux/store";
import {
  setMoodButton,
  toggleSettingBoxVisible,
} from "../redux/reducers/publicVariablesSlice";
import { setUpateItem } from "../redux/reducers/taskSlice";
import { deleteTask, updateTask } from "../redux/actions/tasksActions";
import { useState } from "react";

interface Props {
  item: {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
  };
}
interface TItemSelected {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TaskBox = ({ item }: Props) => {
  const [expandDescription, setExpandDescription] = useState(false);
  const dispatch = useAppDispatch();
  // Function to handle send which item user need to update
  const visibleUpdateHandler = (itemToUpdate: TItemSelected) => {
    dispatch(toggleSettingBoxVisible());
    dispatch(setMoodButton("update"));
    dispatch(setUpateItem(itemToUpdate));
  };
  // Function to handle delete item from list of tasks
  const deleteItemHandler = (itemToDelete: TItemSelected) => {
    dispatch(deleteTask(itemToDelete));
  };
  // Function to handle update completed status or not
  const updateCompletedStatus = (itemStatus: TItemSelected) => {
    dispatch(
      updateTask({
        _id: itemStatus?._id,
        title: itemStatus?.title,
        description: itemStatus?.description,
        completed: itemStatus?.completed ? false : true,
      })
    );
  };
  return (
    <div
      className={` bg-inherit my-8 p-5 rounded-lg border-[1px] border-neutral-700 border-solid flex flex-col justify-center gap-3 shadow-2xl shadow-indigo-950`}
    >
      <h6 className="text-white text-xl max-sm:text-sm">{item.title}</h6>
      <div>
        <p className="text-neutral-500 text-sm">
          {expandDescription
            ? item.description
            : item.description.substring(0, 100)}
        </p>
        {item.description.length > 100 && (
          <button
            onClick={() => setExpandDescription(!expandDescription)}
            className="text-xs focus:outline-none bg-neutral-500 rounded-md px-1 py-0.5"
          >
            {expandDescription ? "less.." : "more.."}
          </button>
        )}
      </div>
      <div className="flex items-center">
        <span className={`text-indigo-500`}>
          {item.completed ? "completed" : "on progress"}
        </span>
        {item.completed ? (
          <MdOutlineCheckBox
            onClick={() => updateCompletedStatus(item)}
            className={`text-indigo-500 ml-4 text-xl cursor-pointer`}
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            onClick={() => updateCompletedStatus(item)}
            className={`text-indigo-500 ml-4 text-xl cursor-pointer`}
          />
        )}
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => deleteItemHandler(item)}
          className={`min-w-10 bg-red-500 p-1 rounded-md text-red-200 text-xs capitalize flex items-center justify-center text-nowrap focus:outline-none hover:bg-red-700 duration-150`}
        >
          delete <IoTrashOutline className="ml-1" />
        </button>
        <button
          onClick={() => visibleUpdateHandler(item)}
          className={`min-w-10 bg-green-500 p-1 rounded-md text-green-200 text-xs capitalize flex items-center justify-center text-nowrap focus:outline-none hover:bg-green-700 duration-150 `}
        >
          update <FaRegEdit className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
