const express = require('express')

const app = express()
app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9eec08d82f024dcaaf64154f7ba30479',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/main.js", (req, res) => {
    res.sendFile(__dirname + "/public/main.js")
})

app.get("/styles.css", (req, res) => {
    res.sendFile(__dirname + "/public/styles.css")
})

app.get("/tryCatch", (req, res) => {
    try {
        asdf()
    }catch(e){
        rollbar.error(err)
    }
})

app.listen(4000, () => {
    console.log("up on 4000")
})