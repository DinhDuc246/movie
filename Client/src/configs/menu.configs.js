import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LockResetIcon from "@mui/icons-material/LockReset";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeIcon />,
    state: "home",
  },
  {
    display: "movies",
    path: "/movie",
    icon: <SlideshowIcon />,
    state: "movie",
  },
  {
    display: "tv series",
    path: "/tv",
    icon: <LiveTvIcon />,
    state: "tv",
  },
  {
    display: "search",
    path: "/search",
    icon: <SearchIcon />,
    state: "search",
  },
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderIcon />,
    state: "favorite",
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <RateReviewIcon />,
    state: "reviews",
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetIcon />,
    state: "password.update",
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
