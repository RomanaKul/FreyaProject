import Link from "@mui/material/Link";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import MusicNote from "@mui/icons-material/MusicNote";
import { theme } from "../../theme";

const SocialLink = ({ platform, ...rest }) => {
  const iconProps = {
    sx: {
      color: theme.palette.text.white,
      "&:hover": { color: theme.palette.text.secondary },
    },
    fontSize: "large",
    ...rest,
  };

  let icon;
  switch (platform) {
    case "instagram":
      icon = <Instagram {...iconProps} />;
      break;
    case "youtube":
      icon = <YouTube {...iconProps} />;
      break;
    case "tiktok":
      icon = <MusicNote {...iconProps} />;
      break;
    default:
      icon = null;
  }

  return <Link>{icon}</Link>;
};

export default SocialLink;
