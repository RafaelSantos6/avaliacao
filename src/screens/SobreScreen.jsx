import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../lib/style";


export function SobreScreen() {
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  return (
    <View style={styles.container}>
      <Text>Preencha o Formulario</Text>
      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Text>Digite sua Altura</Text>
      <TextInput
        label="Altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <Text>Digite seu Peso</Text>
      <TextInput
        label="Peso"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
    </View>
  );
}