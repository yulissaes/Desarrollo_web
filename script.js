const form = document.getElementById("registroForm");
const overlay = document.getElementById("overlay-exito");
const confetiContainer = document.getElementById("confeti");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (form.checkValidity()) {

        overlay.classList.add("mostrar");
        crearConfeti(100); 

        setTimeout(() => {
            overlay.classList.remove("mostrar");
            form.reset();
            confetiContainer.innerHTML = ""; 
        }, 3000);
    } else {
        form.reportValidity();
    }
});

function crearConfeti(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");
        confeti.style.backgroundColor = generarColor();
        confeti.style.left = Math.random() * window.innerWidth + "px";
        confeti.style.animationDuration = 2 + Math.random() * 3 + "s";
        confeti.style.width = 5 + Math.random() * 10 + "px";
        confeti.style.height = confeti.style.width;
        confetiContainer.appendChild(confeti);

     
        setTimeout(() => confeti.remove(), 3000);
    }
}

function generarColor() {
    const colores = ["#ff0a54","#ff477e","#ff7096","#ff85a1","#fbb1b9","#f9bec7","#f7cad0","#fae0e4"];
    return colores[Math.floor(Math.random() * colores.length)];
}
