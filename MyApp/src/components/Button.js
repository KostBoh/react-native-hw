import { StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../../styles/global";

const Button = ({ children, onPress, buttonStyle }) => {
    
      return (
        <TouchableOpacity style={[style.button, buttonStyle]}
        >
            {children}
        </TouchableOpacity>
    )
};
export default Button;

const style = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: colors.orange,
        paddingVertical: 16,
        paddingHorizontal:32,
    },
})