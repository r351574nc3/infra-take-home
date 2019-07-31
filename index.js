const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000


app.use(express.json());

app.post('/', (req, res) => {
    const body = req.body

    if (!body.type != "delivery-started" && body.type != "delivery-ended") {
        res.status(404).end()
    }
    console.log("%s,%d,%s", body.type, body.courier_id, JSON.stringify(body.location))

    res.status(200).end()
})

app.listen(port, () => console.log(`Infra Take Home ${port}!`))