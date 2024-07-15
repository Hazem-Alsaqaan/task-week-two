import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import TaskBox from "../components/TaskBox";
import { getCompletedTasks } from "../redux/actions/completedTasksAction";
import { ToastContainer } from "react-toastify";

interface Props {
  render: boolean;
  setRender: (val: boolean) => void;
}
const Completed = ({ render, setRender }: Props) => {
  const dispatch = useAppDispatch();
  const { completedTasks, completedTasksLoading } = useSelector(
    (state: RootState) => state.completedTaskSlice
  );

  useEffect(() => {
    setRender(false);
    dispatch(getCompletedTasks());
  }, [dispatch, render]);

  return (
    <>
      <div className="relative min-h-screen pt-44 px-3 container mx-auto">
        <h1 className="text-white text-nowrap">completed tasks</h1>
        {completedTasksLoading === "pending" ? (
          <p className="text-indigo-500">loading...</p>
        ) : completedTasks.length > 0 ? (
          completedTasks.map((item) => (
            <TaskBox key={item._id} item={item} setRender={setRender} />
          ))
        ) : (
          <div className="text-neutral-400">not completed tasks found...</div>
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

export default Completed;
