import Book from '../models/BooksModel'; // Importando o modelo
import { Request, Response } from "express";

class BookController {
  // Método para contar o número de documentos na coleção
  public async countBooks(req: Request, res: Response): Promise<void> {
    try {
      // Contar o número total de documentos na coleção
      const count = await Book.countDocuments();

      // Retornar o resultado
      res.status(200).json({
        message: 'Número de livros na coleção',
        count: count,
      });
    } catch (error:any) {
      res.status(500).json({
        message: 'Erro ao contar documentos',
        error: error.message,
      });
    }
  }

  public async countDistinctCourses(req: Request, res: Response): Promise<void> {
    try {
      // Contar o número de cursos distintos (distinct) no campo "course"
      const distinctCourses = await Book.distinct('course');

      // Retornar o número de cursos distintos
      res.status(200).json({
        message: 'Número de cursos distintos na coleção',
        count: distinctCourses.length,
      });
    } catch (error:any) {
      res.status(500).json({
        message: 'Erro ao contar cursos distintos',
        error: error.message,
      });
    }
  }

  public async livroNovo(req: Request, res: Response): Promise <any> {
    try {
      // Buscar o livro com o maior ano (year) e retornar apenas title e year
      const latestBook = await Book.findOne({})
        .sort({ year: -1 }) // Ordena por ano de forma decrescente
        .select('title year'); // Seleciona apenas os campos title e year

      if (!latestBook) {
        return res.status(404).json({
          message: 'Nenhum livro encontrado',
        });
      }

      // Retornar o livro mais recente
      res.status(200).json({
        message: 'Livro mais recente encontrado',
        book: latestBook,
      });
    } catch (error:any) {
      res.status(500).json({
        message: 'Erro ao buscar livro mais recente',
        error: error.message,
      });
    }
  }

  public async livroVelho(req: Request, res: Response): Promise <any> {
    try {
      // Buscar o livro com o maior ano (year) e retornar apenas title e year
      const latestBook = await Book.findOne({})
        .sort({ year: 1 }) // Ordena por ano de forma decrescente
        .select('title year'); // Seleciona apenas os campos title e year

      if (!latestBook) {
        return res.status(404).json({
          message: 'Nenhum livro encontrado',
        });
      }

      // Retornar o livro mais recente
      res.status(200).json({
        message: 'Livro mais recente encontrado',
        book: latestBook,
      });
    } catch (error:any) {
      res.status(500).json({
        message: 'Erro ao buscar livro mais recente',
        error: error.message,
      });
    }
  }

  public async listarLivros(req: Request, res: Response): Promise<void> {
    try {
      // Buscar todos os livros e ordená-los por year de forma decrescente
      const books = await Book.find({})
        .sort({ year: -1 }) // Ordena por year de forma decrescente
        .select('title author publisher year'); // Seleciona apenas os campos title, author, publisher, year

      // Retornar os livros encontrados
      res.status(200).json({
        message: 'Lista de livros',
        books: books,
      });
    } catch (error:any) {
      res.status(500).json({
        message: 'Erro ao listar livros',
        error: error.message,
      });
    }
  }

}

// Exportando uma instância da classe
export default new BookController();