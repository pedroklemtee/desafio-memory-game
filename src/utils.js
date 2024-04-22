import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SwitchPages = ({ updatePagePath }) => {
  // Troca de paginas!
  const navigate = useNavigate();

  useEffect(() => {
    switch (updatePagePath) {
      case 1:
        navigate("/userpage");
        break;
      case 2:
        navigate("/memorygame");
        break;
      case 3:
        navigate("/memorygameplay");
        break;
      default:
        break;
    }
  }, [updatePagePath]);
};
