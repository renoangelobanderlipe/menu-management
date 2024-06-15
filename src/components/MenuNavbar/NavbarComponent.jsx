import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toast } from "sonner";
import { auth } from '@services/provider/firebaseConfig';

import { ProfileMenuComponent } from "@components/ui";

const profileMenuItems = [
  {
    label: "Settings",
    icon: "ph:gear-six-duotone",
  },
  {
    label: "Sign Out",
    icon: "ph:sign-out-duotone",
  },
];

const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      toast.error("Something Wen't Wrong!");
    }
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(isDarkMode ? "dark" : "light");
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="lg:flex-wrap lg:items-center lg:gap-y-4 flex justify-between text-white">
        <div className="flex items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAMAAAAqGX2oAAAALVBMVEVHcEwhqpgkrpwlrpwkrZskrZslrpwirJojrZokrZwkrJsjrZsjrJskrZslrpxdfTXbAAAADnRSTlMAD832knvmQTGvU2oeoJGwNoYAAACwSURBVCiRhZJXAsMgDEMNNsMM3/+4haQNEEb1q4fARgCPlA+GraboEiykjEb5ynKYbJJRekSclkmkmh9nu4aks9+IsPELcd2i7BYQqkDe+yIOwB8CRHj/wlvogY+ARFisqJcGcwYseDwCZdD3N40qcwLtM9Bcu/Ym03Ib6NqHhlWM7avluYZYNh1JY6mSC7WNbW5WsFQlsJTXre2b0Gpz+qnY0a8ZU+/fGfkPAOF3xwfbyhvZ7eAPbAAAAABJRU5ErkJggg=="
            alt="logo"
            loading="lazy"
            decoding="async"
            className="h-10"
          />
          <Typography
            href="#"
            variant="h4"
            className="ml-2 mr-4 cursor-pointer py-1.5 text-primary-500"
          >
            UTAK PH
          </Typography>
        </div>
        <div className="flex">
          <div className="md:w-max relative flex w-full gap-6">
            <IconButton
              variant="text"
              color="green"
              onClick={() => toggleTheme()}
            >
              {isDarkMode ?
                <Icon icon="ph:sun-duotone" style={{ color: "#286cbf" }} className="w-6 h-6" /> :
                <Icon icon="ph:moon-stars-duotone" className="w-6 h-6" />
              }
            </IconButton>

            {/* Profile Menu */}
            <ProfileMenuComponent items={profileMenuItems} onLogout={handleLogout} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
