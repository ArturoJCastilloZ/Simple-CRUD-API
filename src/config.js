import { config } from "dotenv";

// Esto permite acceder a las variables que se hayan configurado
// dentro del archivo .env
config();

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};