import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BookProvider } from './src/context/BookContext';
import HomeScreen from './src/screen/inicio/tela';
import BookListScreen from './src/screen/lista/tela';

// Criação da pilha de navegação
const Stack = createStackNavigator();

// Componente principal do app
export default function App() {
  return (
    <NavigationContainer>
      <BookProvider>
        <Stack.Navigator initialRouteName="Buscas">
          <Stack.Screen name="Buscas" component={HomeScreen} />
          <Stack.Screen name="Lista de Livros" component={BookListScreen} />
        </Stack.Navigator>
      </BookProvider>
    </NavigationContainer>
  );
}
