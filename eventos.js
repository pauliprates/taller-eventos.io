const div = document.querySelector("div");
 
div.addEventListener("click", function DivSaluda(){
    alert("Hola! Soy el div");
    stopPropagation();
})
