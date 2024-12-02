import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";
  // Usando o hook para acessar o contexto
import { Book } from "../../types";
import { useBookContext } from "../../hooks/useBook";


type BookListScreenProps = NativeStackScreenProps<RootStackParamList, "Lista de Livros">;



const BookListScreen: React.FC<BookListScreenProps> = ({ navigation }) => {
  const {
    livros,
    fetchLivros,  // Função para buscar os livros
  } = useBookContext();

  useEffect(() => {
    fetchLivros(); // Carregar livros quando a tela for montada
  }, [fetchLivros]);

  // Função para renderizar cada livro
  const renderBook = ({ item, index }: { item: Book, index: number }) => (
    <View style={styles.bookContainer}>
      <View style={styles.bookDetails}>
        <Text style={styles.bookTextTitle}>{item.title}</Text>
        <Text style={styles.bookText}>{item.author}</Text>
        <Text style={styles.bookText}>{item.publisher}</Text>
        <Text style={styles.bookText}>{item.year}</Text>
      </View>
    </View>
  );

  // Verificar se os livros estão carregando
  if (!livros) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando livros...</Text>
      </View>
    );
  }

  // Se os livros foram carregados, renderizar a lista
  return (
    <View style={styles.container}>
      <FlatList
        data={livros.books}
        keyExtractor={(item, index) => index.toString()}  // Usando o índice como chave
        renderItem={renderBook}
      />
    </View>
  );

};

export default BookListScreen;
