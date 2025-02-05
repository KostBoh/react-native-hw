import { TouchableOpacity } from "react-native"
import LogoutIcon from "../../assets/icons/LogOutIcon"

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;