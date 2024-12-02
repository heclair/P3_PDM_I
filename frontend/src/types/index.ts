import { ReactNode } from "react";

// types/index.ts

export interface Book {
    title: string;
    author: string;
    publisher: string;
    year: number;
  }
  
  export interface CountResponse {
    message: string;
    count: number;
  }
  
  export interface DistinctCoursesResponse {
    message: string;
    count: number;
  }
  
  export interface LivroNovoResponse {
    message: string;
    book: {
      title: string;
      year: number;
    };
  }

  export interface LivroVelhoResponse {
    message: string;
    book: {
      title: string;
      year: number;
    };
  }
  
  export interface LivrosResponse {
    message: string;
    books: Book[];
  }
  

  export interface BookContextType {
    livros: LivrosResponse | null;
    livroNovo: LivroNovoResponse | null;
    livroVelho: LivroVelhoResponse | null;
    totalLivros: CountResponse | null;
    totalDisciplinas: DistinctCoursesResponse | null;
    fetchLivros: () => void;
    fetchLivroNovo: () => void;
    fetchLivroVelho: () => void;
    fetchTotalLivros: () => void;
    fetchTotalDisciplinas: () => void;
  }