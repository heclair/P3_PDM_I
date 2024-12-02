import React, { useContext, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack"; // Importe o tipo correto
import { BookContext } from "../../context/BookContext";

// Tipagem correta de Props, que inclui as propriedades de navegação
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Buscas">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const context = useContext(BookContext);

  // Verificar se o contexto está presente
  if (!context) {
    throw new Error("HomeScreen deve ser usado dentro de um BookProvider.");
  }

  const {
    totalDisciplinas,
    totalLivros,
    livroVelho,
    livroNovo,
  } = context;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bibliografia</Text>
      <View style={styles.Info_Container}>
        {/* Exibindo total de disciplinas */}
        <Text style={styles.Info_Text}>
          Total de disciplinas:{" "}
          {totalDisciplinas ? totalDisciplinas.count : "Carregando..."}
        </Text>
        {/* Exibindo total de livros */}
        <Text style={styles.Info_Text}>
          Total de livros: {totalLivros ? totalLivros.count : "Carregando..."}
        </Text>
        {/* Exibindo o livro mais velho */}
        <Text style={styles.Info_Text}>
          Livro mais velho:{" "}
          {livroVelho
            ? `${livroVelho.book.title} (${livroVelho.book.year})`
            : "Carregando..."}
        </Text>
        {/* Exibindo o livro mais novo */}
        <Text style={styles.Info_Text}>
          Livro mais novo:{" "}
          {livroNovo
            ? `${livroNovo.book.title} (${livroNovo.book.year})`
            : "Carregando..."}
        </Text>
      </View>
      {/* Botão para navegar para a tela de lista de livros */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Lista de Livros")}
      >
        <Text style={styles.ButtonText}>Iniciar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
