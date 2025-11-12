import { icons } from "./icons";



const OnlyIcon = ({icon}) => {
    const Icon = icons[icon]
    return (
    <span>
      {Icon && <Icon/>}
    </span>
  );
}

export default OnlyIcon;