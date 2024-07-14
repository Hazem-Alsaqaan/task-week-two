import LogoIcon from "../assets/pictures/LogoIcon.png";

const Logo = () => {
  return (
    <div className="bg-inherit flex flex-col items-center justify-center p-1">
      <img
        src={LogoIcon}
        alt="Logo"
        className="w-10 h-10 max-sm:w-8 max-sm:h-8"
      />
      <h6 className="text-white text-base max-sm:text-xs">optimizer</h6>
    </div>
  );
};

export default Logo;
