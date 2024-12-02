import { useContext } from "react";
import { BookContextType } from "../types";
import { BookContext } from "../context/BookContext";

export const useBookContext = (): BookContextType => {
    const context = useContext(BookContext);
    if (!context) {
      throw new Error('useBookContext must be used within a BookProvider');
    }
    return context;
  };