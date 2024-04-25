import app from "./app.js";


app.get("/", (req, res) => {
    res.send("Servidor de medicamentos listo para produccion");
})

app.listen(4004, () => console.log("server on port 4004"));
