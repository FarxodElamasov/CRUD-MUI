import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';


export default function Salom (iconName) {

  const icons = {
    "/home": <InfoIcon />,
    "/product": <MailIcon />,
    "/about": < InfoIcon />,
    "/category": <InfoIcon />,
  };
  
  return icons[iconName];
}
