let buttonForm = document.querySelector("form")

buttonForm.addEventListener("click", (event) => {
    event.preventDefault()
    axios.get("http://localhost:4000/tryCatch")
})