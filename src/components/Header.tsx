import CustomButton from "./CustomButton";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import { useAppDispatch } from "../redux/store";
import {
  setMoodButton,
  toggleSettingBoxVisible,
} from "../redux/reducers/publicVariablesSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const visibleCreateHandler = () => {
    dispatch(toggleSettingBoxVisible());
    dispatch(setMoodButton("create"));
  };
  return (
    <div className="fixed flex flex-col justify-center w-screen bg-darkBackground px-3 z-50">
      <div className="border-b-[1px] border-solid border-b-neutral-700">
        <div className="flex items-center container mx-auto py-2">
          <Logo />
          <Search />
        </div>
      </div>
      <div className="border-b-[1px] border-solid border-b-neutral-700">
        <div className="flex items-center container mx-auto ">
          <NavBar />
          <div className="flex-1 flex items-center justify-end mx-1">
            <CustomButton
              title="create new"
              handleClick={() => visibleCreateHandler()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
