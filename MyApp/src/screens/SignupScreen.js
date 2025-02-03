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

import { useEffect, useState } from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
import CirclePlusSvg from "../../icons/CirclePlusSvg";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const SignupScreen = ({route, navigation}) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const params = route?.params;
  console.log('ROUTE PARAMS: ', params);

  // useEffect(() => {
  //   if (params) {
  //     const { email } = params;
  //     navigation.setOptions({title: email}, [])
      

  //   }
  // })

  const handleLoginChange = (value) => {
    setLogin(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onLogin = async () => {
    navigation.navigate('Login', {email, password})
  };

  const onSignUp = () => {
    console.log("signUp");
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
            <View style={styles.avatar}>
              <Image style={styles.addFoto}  />
              {/* <Ionicons name="add-circle" size={24} color={colors.orange} /> */}
              <CirclePlusSvg/>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={login}
                autoFocus={false}
                placeholder="Логін"
                onTextChange={handleLoginChange}
              />
              <Input
                value={email}
                autoFocus={false}
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />
              <Input
                value={password}
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>
            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onSignUp}>
                <Text style={[styles.baseText, styles.signinButtonText]}>
                  Зареєструватися!!!
                </Text>
              </Button>

              <View style={styles.signInContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?
                  <TouchableWithoutFeedback onPress={onLogin}>
                    <Text style={styles.signInText}> Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
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
  avatar: {
    flexDirection: 'row'
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
