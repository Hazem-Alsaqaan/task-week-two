import { ToastContainer } from "react-toastify";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import TaskBox from "../components/TaskBox";

const SearchResult = () => {
  const { searchTasks, searchTasksLoading } = useSelector(
    (state: RootState) => state.taskSlice
  );
  return (
    <>
      <div className="relative min-h-screen pt-44 px-3 container mx-auto">
        <h1 className="text-white">board</h1>
        {searchTasksLoading === "pending" ? (
          <p className="text-indigo-500">loading...</p>
        ) : searchTasks.length > 0 ? (
          searchTasks.map((item) => <TaskBox key={item._id} item={item} />)
        ) : (
          <div className="text-neutral-400">not tasks of search found...</div>
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

export default SearchResult;
