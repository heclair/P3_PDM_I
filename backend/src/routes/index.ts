import { Router, Request, Response } from "express";
import Book from "./Book";



const router = Router();

router.use("/book", Book)

router.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default router;
