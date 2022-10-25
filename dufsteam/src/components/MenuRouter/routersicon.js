// import ProductIcon from "../Img/icons/ProductIcon";
// import HomeIcon from "../Img/icons/Home";
// import SettingsIcon from "../Img/icons/SettingsIcon";
// import CategoryIcon from "../Img/icons/CategoryIcon";
// import OrderIcon from "../Img/icons/OrderIcon";
// import AdvertsIcon from "../Img/icons/AvertsIcon";

import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';


export default function (iconName) {
  const icons = {
    "/home": <InfoIcon />,
    "/product": <MailIcon />,
    "/about": < InfoIcon />,
    "/category": <InfoIcon />,
  };
  return icons[iconName];
}
