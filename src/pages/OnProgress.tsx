import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import TaskBox from "../components/TaskBox";
import { getOnProgressTasks } from "../redux/actions/onProgressTasksAction";
import { ToastContainer } from "react-toastify";

interface Props {
  render: boolean;
  setRender: (val: boolean) => void;
}
const OnProgress = ({ render, setRender }: Props) => {
  const dispatch = useAppDispatch();
  const { onProgressTasks, onProgressTasksLoading } = useSelector(
    (state: RootState) => state.onProgressSlice
  );

  useEffect(() => {
    setRender(false);
    dispatch(getOnProgressTasks());
  }, [dispatch, render]);
  return (
    <>
      <div className="relative min-h-screen pt-44 px-3 container mx-auto">
        <h1 className="text-white text-nowrap">on progress tasks</h1>
        {onProgressTasksLoading === "pending" ? (
          <p className="text-indigo-500">loading...</p>
        ) : onProgressTasks.length > 0 ? (
          onProgressTasks.map((item) => (
            <TaskBox key={item._id} item={item} setRender={setRender} />
          ))
        ) : (
          <div className="text-neutral-400">not tasks on progress found...</div>
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

export default OnProgress;
