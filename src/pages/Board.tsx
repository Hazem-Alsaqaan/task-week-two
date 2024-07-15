import { useEffect } from "react";
import TaskBox from "../components/TaskBox";
import { RootState, useAppDispatch } from "../redux/store";
import { getAllTasks } from "../redux/actions/tasksActions";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

interface Props {
  render: boolean;
  setRender: (val: boolean) => void;
}
const Board = ({ render, setRender }: Props) => {
  const dispatch = useAppDispatch();
  const { tasks, tasksLoading } = useSelector(
    (state: RootState) => state.taskSlice
  );
  useEffect(() => {
    setRender(false);
    dispatch(getAllTasks());
  }, [dispatch, render]);
  return (
    <>
      <div className="relative min-h-screen pt-44 px-3 container mx-auto">
        <h1 className="text-white">board</h1>
        {tasksLoading === "pending" ? (
          <p className="text-indigo-500">loading...</p>
        ) : tasks.length > 0 ? (
          tasks.map((item) => (
            <TaskBox key={item._id} item={item} setRender={setRender} />
          ))
        ) : (
          <div className="text-neutral-400">not tasks found...</div>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Board;
