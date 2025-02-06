import { TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";

const BackButton = ({ onPress = () => {} }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default BackButton;