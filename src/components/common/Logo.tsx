import logo_default from "/logo.png";
import logo_dark_mode from "/logo_dark_mode.png";

export const LogoDefault = () => {
  return <img src={logo_default} alt="" className="w-35 lg:w-45" />;
};

export const LogoDarkMode = () => {
  return <img src={logo_dark_mode} alt="" className="w-35 lg:w-45" />;
};
