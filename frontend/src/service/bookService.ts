
import { CountResponse, DistinctCoursesResponse, LivroNovoResponse, LivrosResponse, LivroVelhoResponse } from '../types';
import axios from 'axios';

const API_URL = 'http://192.168.1.4:3000/book'; // URL base para a API

// Serviço para contar o número total de livros
export const countBooks = async (): Promise<CountResponse> => {
  const response = await axios.get(`${API_URL}/totallivros`);
  return response.data;
};

// Serviço para contar o número total de disciplinas (cursos distintos)
export const countDistinctCourses = async (): Promise<DistinctCoursesResponse> => {
  const response = await axios.get(`${API_URL}/totaldisciplina`);
  return response.data;
};

// Serviço para obter o livro mais recente
export const getLivroNovo = async (): Promise<LivroNovoResponse> => {
  const response = await axios.get(`${API_URL}/livrosnovo`);
  return response.data;
};

export const getLivroVelho = async (): Promise<LivroVelhoResponse> => {
  const response = await axios.get(`${API_URL}/livrovelho`);
  return response.data;
};

// Serviço para listar todos os livros
export const getTodosLivros = async (): Promise<LivrosResponse> => {
  const response = await axios.get(`${API_URL}/todoslivros`);
  return response.data;
};
