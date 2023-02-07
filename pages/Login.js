import { Button, Heading, Text, View } from "native-base";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Heading style={styles.loginTitle}>ログイン</Heading>

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={styles.mailAddressText}>メールアドレス</Text>
          <Text style={styles.requiredText}>必須</Text>
        </View>

        <TextInput style={styles.textInput} placeholder={"入力してください"} />

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={styles.mailAddressText}>バスワード</Text>
          <Text style={styles.requiredText}>必須</Text>
        </View>

        <TextInput style={styles.textInput} placeholder={"入力してください"} />

        <Button
          style={[styles.button, { marginTop: 40, backgroundColor: "#EF9929" }]}
          _text={styles.buttonText}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          ログイン
        </Button>

        <Button
          style={[
            styles.button,
            { marginTop: 8, backgroundColor: "#FFFFFF", borderWidth: 0.5 },
          ]}
          _text={styles.buttonText}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          新規登録
        </Button>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.passwordForgetText}>パスワードをお忘れの方</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
  },
  loginTitle: {
    marginTop: 34,
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
  },
  mailAddressText: {
    fontSize: 14,
    fontWeight: "500",
  },
  requiredText: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: "400",
    color: "#EC0000",
  },
  textInput: {
    marginTop: 8,
    width: 327,
    height: 56,
    borderColor: "#1A1A1C",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 16,
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 16,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
  },
  passwordForgetText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 24,
    width: "100%",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
