import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../styles/global";
import { useState } from "react";

const Input = ({
    value,
    onTextChange,
    placeholder,
    outerStyles,
    rightButton,
    autoFocus = false,
    secureTextEntry = true,
    onBlur: onBlurCustom,
    
}) => {
    const [isFocused, setIsFocused] = useState(false);
    

const onFocus = () => {
    setIsFocused(true);
};
const onBlur = () => {
    setIsFocused(false);
    if (onBlurCustom) {
        onBlurCustom();
    };
};

return (
    <View style={[styles.input, isFocused && styles.focused, outerStyles
    ]}>
        <TextInput
            value={value}
            autoFocus={autoFocus}
            onChangeText={onTextChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.baseText}
            autoCapitalize="none"
            onFocus={onFocus}
            onBlur={onBlur}
            multiline
        />
        {rightButton}
        
    </View>
);
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 16,
        paddingRight:16,
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border_gray,
        backgroundColor:colors.light_gray,
    },
    baseText: {
        fontWeight: '400',
        fontSize: 16,
        flex: 1,
        lineHeight: 18,
        color: colors.black_primary,
    },
    focused: {
        backgroundColor: colors.white,
        borderColor: colors.orange,
    }
})

export default Input;