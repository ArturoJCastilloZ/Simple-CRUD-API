import { Router } from "express";
import { methods as languagesConstrollers } from "../controllers/languages.controllers";

const router = Router();

// Cuando se acceda a la ruta, en este caso "/", manejará el request (petición)
// Y la respuesta que se enviará. Por ahora, mediante la respuesta por ahora se envia
// Un string ( en este caso)
router.get("/", languagesConstrollers.getLanguages);
router.post("/", languagesConstrollers.addLanguage);

// la ruta recibe un parametro, en este caso, el id
router.get("/:id", languagesConstrollers.getLanguage);
router.delete("/:id", languagesConstrollers.deleteLanguage);
router.put("/:id", languagesConstrollers.updateLanguage);

export default router;