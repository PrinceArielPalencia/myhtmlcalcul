const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "main_page.html"
    }else{
        alert("Incorrect Username or Password, Please try again!")
    }
})


function authentication(username,password){
    if(username === "Prince" && password === "123"){
        return true
    }else{
        return false
    }
}