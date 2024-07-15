// import { FormEvent, useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RootState, useAppDispatch } from "../redux/store";
import { createNewTask, updateTask } from "../redux/actions/tasksActions";
import { toggleSettingBoxVisible } from "../redux/reducers/publicVariablesSlice";
import { useSelector } from "react-redux";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoCloseCircleSharp } from "react-icons/io5";

const schema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(3, "Description is required"),
});
type FormData = z.infer<typeof schema>;
interface Props {
  mood: "create" | "update";
  setRender: (val: boolean) => void;
}

const ReusableForm = ({ mood, setRender }: Props) => {
  const { updateItem } = useSelector((state: RootState) => state.taskSlice);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: mood === "update" ? updateItem.title : "",
      description: mood === "update" ? updateItem.description : "",
    },
  });

  const dispatch = useAppDispatch();
  const submitCreateHandler = (data: FieldValues) => {
    dispatch(
      createNewTask({
        title: data.title,
        description: data.description,
        completed: false,
      })
    );
    setRender(true);
    dispatch(toggleSettingBoxVisible());
  };
  const submitUpdateHandler = (data: FieldValues) => {
    dispatch(
      updateTask({
        _id: updateItem._id,
        title: data.title,
        description: data.description,
        completed: false,
      })
    );
    setRender(true);
    dispatch(toggleSettingBoxVisible());
  };
  const submitHandler = (data: FieldValues) => {
    mood === "create" ? submitCreateHandler(data) : submitUpdateHandler(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className=" fixed top-[calc(50%-120px)] left-[calc(50%-120px)] w-60 h-80 bg-indigo-950 rounded-md p-4 z-50 "
    >
      <div className="flex items-center justify-between  mb-5">
        <h6 className="text-indigo-500 text-nowrap capitalize">
          {mood === "create" ? "create new" : "update"}
        </h6>
        <IoCloseCircleSharp
          className="text-xl text-white cursor-pointer"
          onClick={() => dispatch(toggleSettingBoxVisible())}
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="*task name.."
          className="bg-indigo-800 text-white placeholder:text-indigo-400 px-2 py-1 mb-1 rounded-md text-sm  focus:outline-none focus:border-2 focus:border-indigo-500 focus:border-solid"
          id="title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs text-red-400">{errors.title.message}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          id="description"
          placeholder="*description.."
          className="bg-indigo-800 text-white placeholder:text-indigo-400 px-2 py-1 mb-1 rounded-md text-sm  max-h-32 focus:outline-none focus:border-2 focus:border-indigo-500 focus:border-solid"
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="text-xs text-red-400">{errors.description.message}</p>
        )}
      </div>
      <button
        className={`min-w-44 bg-indigo-500 px-5 py-1 rounded-md text-sm text-white capitalize flex items-center justify-center text-nowrap focus:outline-none hover:bg-indigo-700 duration-150 max-sm:text-xs max-sm:px-2 max-sm:min-w-16`}
      >
        {mood === "create" ? "create new" : "update"}
        {mood === "create" ? (
          <MdOutlineAddToPhotos className="ml-1" />
        ) : (
          <FaRegEdit className="ml-1" />
        )}
      </button>
    </form>
  );
};

export default ReusableForm;
