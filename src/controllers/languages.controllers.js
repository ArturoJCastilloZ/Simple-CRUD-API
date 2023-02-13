import { getConnection } from "../database/database"

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers from languages");
        res.json(result);
    }catch(error){
        // 500 es error de servidor
        res.status(500)
        res.send(error.message)
    }
};

const addLanguage  = async (req, res) => {
    try {
        const { name, programmers } = req.body;
        if (name == undefined || programmers == undefined) {
            res.status(400).json({ message: "Bad requests. Please fill all field."})
        }
        const language = {name, programmers};
        const connection = await getConnection();
        // En este caso, se utiliza el query para el insert y se llama el objeto, como segundo parametro, que se busca insertar
        await connection.query("INSERT INTO languages SET ?", language);
        res.json({ message: "Language added"})
    }catch(error){
        // 500 es error de servidor
        res.status(500)
        res.send(error.message)
    }
};

const getLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers from languages WHERE id = ?", id);
        res.json(result);
    }catch(error){
        // 500 es error de servidor
        res.status(500)
        res.send(error.message)
    }
};

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE from languages WHERE id = ?", id);
        res.json(result);
    }catch(error){
        // 500 es error de servidor
        res.status(500)
        res.send(error.message)
    }
};

const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, programmers } = req.body;
        if (name == undefined || programmers == undefined) {
            res.status(400).json({ message: "Bad requests. Please fill all field."})
        }
        const language = { name, programmers };
        const connection = await getConnection();
        const result = await connection.query("UPDATE languages SET ? WHERE id = ?", [language, id]);
        res.json(result);
    }catch(error){
        // 500 es error de servidor
        res.status(500)
        res.send(error.message)
    }
};

export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};