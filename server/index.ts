const express = require("express")

const app = express()
const PORT = process.env.PORT || 5000
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
app.use(express.static("build"))
app.get('/api/items', (req, res) => {
    res.send(items)
})
app.listen(PORT, () => console.log("Listening..."))