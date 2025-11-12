import { icons } from "./icons";



const OnlyIcon = ({icon}) => {
    const Icon = icons[icon]
    return (
    <a>
      {Icon && <Icon/>}
    </a>
  );
}

export default OnlyIcon;