// context/BookContext.tsx

import React, { createContext, useContext, useState, useEffect, PropsWithChildren  } from 'react';
import { getTodosLivros, getLivroNovo, getLivroVelho, countBooks, countDistinctCourses } from '../service/bookService';
import { LivrosResponse, LivroNovoResponse, CountResponse, DistinctCoursesResponse, BookContextType, LivroVelhoResponse } from '../types';

// Tipos para o estado do contexto


// Criando o contexto
export const BookContext = createContext<BookContextType | undefined>(undefined);


// Componente Provider do contexto
export const BookProvider: React.FC <PropsWithChildren<{}>>= ({ children }) => {
  const [livros, setLivros] = useState<LivrosResponse | null>(null);
  const [livroNovo, setLivroNovo] = useState<LivroNovoResponse | null>(null);
  const [livroVelho, setLivroVelho] = useState<LivroVelhoResponse | null>(null);
  const [totalLivros, setTotalLivros] = useState<CountResponse | null>(null);
  const [totalDisciplinas, setTotalDisciplinas] = useState<DistinctCoursesResponse | null>(null);
  

  // Funções para buscar os dados
  const fetchLivros = async () => {
    const data = await getTodosLivros();
    setLivros(data);
  };

  const fetchLivroNovo = async () => {
    const data = await getLivroNovo();
    setLivroNovo(data);
  };

  const fetchLivroVelho = async () => {
    const data = await getLivroVelho();
    setLivroVelho(data);
  };

  const fetchTotalLivros = async () => {
    const data = await countBooks();
    setTotalLivros(data);
  };

  const fetchTotalDisciplinas = async () => {
    const data = await countDistinctCourses();
    setTotalDisciplinas(data);
  };

  useEffect(() => {
    fetchLivros();
    fetchLivroNovo();
    fetchLivroVelho();
    fetchTotalLivros();
    fetchTotalDisciplinas();
  }, []);

  return (
    <BookContext.Provider
      value={{
        livros,
        livroNovo,
        livroVelho,
        totalLivros,
        totalDisciplinas,
        fetchLivros,
        fetchLivroNovo,
        fetchLivroVelho,
        fetchTotalLivros,
        fetchTotalDisciplinas,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};


