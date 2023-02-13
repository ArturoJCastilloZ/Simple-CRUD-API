import express from "express";
import morgan from "morgan";

// Routes
import languagesRoutes from "./routes/language.routes";

const app=express();

// Settings
// Se asigna puerto para la API y estará disponible en cierta dirección, en mi caso, localhost en el puerto 3000
app.set("port", 3000);

// Middlewares
// Funciones intermedias entre una petición y una respuesta
app.use(morgan("dev"));

// Aquí se usa el metodo json de express para que pueda entender y procesar JSON
app.use(express.json());

// Routes
app.use("/api/languages/", languagesRoutes);

export default app;