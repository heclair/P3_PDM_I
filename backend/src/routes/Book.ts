import { Router } from "express";
import{BookController} from '../controller'
import bookController from "../controller/bookController";


const router = Router();

router.get("/totallivros", BookController.countBooks);
router.get("/totaldisciplina", BookController.countDistinctCourses);
router.get("/livrosnovo", BookController.livroNovo);
router.get("/livrovelho", BookController.livroVelho);
router.get("/todoslivros", BookController.listarLivros)

export default router;

