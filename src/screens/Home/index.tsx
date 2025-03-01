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
          <Text style={styles.buttonContent}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countRow}>
        <View style={styles.status}>
          <Text style={styles.textOne}>Criadas</Text>
          <Text style={styles.count}>0</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.textTwo}>Concluídas</Text>
          <Text style={styles.count}>0</Text>
        </View>
      </View>
    </View>
  );
}
