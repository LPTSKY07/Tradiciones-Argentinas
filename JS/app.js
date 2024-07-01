const express = require("express")
const app = express ()
const port = 3000

app.get("/rutaEjemplo", (req, res) => {
 res.send("servidor")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

