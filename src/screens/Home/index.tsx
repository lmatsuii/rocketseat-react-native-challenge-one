import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Logo.png")}></Image>
      <View style={styles.form}>
        <TextInput
          placeholder="Adiciona uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={[styles.primaryColor, styles.button]}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
