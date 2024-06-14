import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-12 p-12">
        <div>
          <img src="assets/images/404_image.svg" alt="" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <Typography variant="h1" color="black" className="text-center">
            Page Not Found
          </Typography>
          <Typography variant="paragraph" color="gray" className="text-center">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable
          </Typography>
          <Button size="lg" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
