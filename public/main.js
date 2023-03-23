let buttonForm = document.getElementById("rollbarTest")
let addForm = document.getElementById("form2")
let deleteBtn = document.getElementById("clear")
let input = document.querySelector("input")

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9eec08d82f024dcaaf64154f7ba30479',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



buttonForm.addEventListener("click", () => {
    rollbar.info("Roll bar button Clicked")
    alert("does anything work?")
    axios.get("http://3.101.89.235/tryCatch").then((result) => {

    }).catch((err) => {
        rollbar.warning(err, "unable to connect to /tryCatch")
    })
})

addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let text = input.value
    mabod ={
        input: text
    }
    axios.post("http://3.101.89.235/add", mabod).then((result) => {
        
    })
})