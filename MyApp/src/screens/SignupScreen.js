import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

import { useState } from "react";

import CirclePlusSvg from "../../assets/icons/CirclePlusSvg";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const SignupScreen = ({ route, navigation, authorization }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onInputChange = (value, input) => {
    setData((prev) => ({ ...prev, [input]: value }));
  };

  const onRegister = () => {
    if (
      data.email.length > 1 &&
      data.username.length > 1 &&
      data.password.length > 1
    ) {
      console.log(data);
      setData((prev) => ({ ...prev, username: "", email: "", password: "" }));
      authorization();
    } else {
      console.log("Data Missing: Please fill all fields.");
    }
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toLogin = () => {
    navigation.replace("Login", {
      email: data.email,
      password: data.password,
    });
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={require("../../assets/photoBg.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <View style={styles.content}>
              <View style={styles.photoInput}>
                <TouchableWithoutFeedback
                  onPress={() => console.log("Add Image")}
                >
                  <CirclePlusSvg style={styles.addImageButton} />
                </TouchableWithoutFeedback>
              </View>

              <Text style={styles.title}>Реєстрація!</Text>

              <View style={[styles.innerContainer, styles.inputContainer]}>
                <Input
                  value={data.username}
                  autoFocus={false}
                  placeholder="Логін"
                  onTextChange={(value) => onInputChange(value, "username")}
                />
                <Input
                  value={data.email}
                  autoFocus={false}
                  placeholder="Адреса електронної пошти"
                  onTextChange={(value) => onInputChange(value, "email")}
                />
                <Input
                  value={data.password}
                  placeholder="Пароль"
                  rightButton={showButton}
                  outerStyles={styles.passwordButton}
                  onTextChange={(value) => onInputChange(value, "password")}
                  secureTextEntry={isPasswordVisible}
                />
              </View>
              <View style={[styles.innerContainer, styles.buttonContainer]}>
                <Button onPress={onRegister}>
                  <Text style={[styles.baseText, styles.signinButtonText]}>
                    Зареєструватися!!!
                  </Text>
                </Button>

                <View style={styles.signInContainer}>
                  <Text style={[styles.baseText, styles.passwordButtonText]}>
                    Вже є акаунт?
                    <TouchableWithoutFeedback onPress={toLogin}>
                      <Text style={styles.signInText}> Увійти</Text>
                    </TouchableWithoutFeedback>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </Pressable>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  addFoto: {
    height: 50,
    width: 50,
    backgroundColor: colors.blue,
    source: "../../assets/icon.png",
  },
  content: {
    flex: 1,
    width: "100%",
    gap: 34,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 92,
  },
  photoInput: {
    height: 120,
    width: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: "absolute",
    top: -94,
    left: "50%" - 60,
  },
  addImageButton: {
    height: 25,
    width: 25,

    position: "absolute",
    right: -12,
    bottom: 14,
  },
  avatar: {
    flexDirection: "row",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "68%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  askText: {
    paddingTop: 16,
    textAlign: "center",
    color: colors.blue,
  },
  signinButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    width: "100%",
    marginTop: 32,
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    textDecorationLine: "underline",
  },

  text: {
    fontSize: 32,
    color: colors.black_primary,
  },
});
