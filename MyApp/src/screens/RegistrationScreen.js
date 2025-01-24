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

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

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
    console.log('login')
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
            
            <View>
              <Image style={styles.addFoto} />
              
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
                    <Text style={styles.signInText}>Увійти</Text>
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

export default RegistrationScreen;

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
    fontWeight: '500',
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: '400',
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
    alignItems:"center",
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
