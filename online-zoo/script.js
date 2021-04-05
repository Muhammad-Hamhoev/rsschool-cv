

let input = document.querySelector(".donat-form input")

console.log(input)


function t (e){
   console.log(e.target.value.length) 
   if(e.target.value.length >= 4){
        input.removeEventListener("keyup", t)
    }else{
        input.addEventListener("keyup", t)
    }
}

input.addEventListener("keyup", t)