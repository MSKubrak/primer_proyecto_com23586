const valorTicket = 200;

let descuentoEstudiante = 80;
let DescuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let divErrorNombre = document.getElementById("mensajeDeErrorNombre");
let apellido = document.getElementById("apellido");
let divErrorApellido = document.getElementById("mensajeDeErrorApellido");
let mail = document.getElementById("mail");
let divErrorMail = document.getElementById("mensajeDeErrorMail");
let cantidadTickets = document.getElementById("cantidadTickets"); 
let divErrorTickets = document.getElementById("mensajeDeErrorTickets");
let categoria = document.getElementById("categoriaSelect");
let divErrorCategoria = document.getElementById("mensajeDeErrorCategoria");
let totalPago = document.getElementById("totalPago"); 
let btnResumen = document.getElementById("btnResumen"); 
let btnBorrar = document.getElementById("btnBorrar"); 

const quitarClassError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove("is-invalid");
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove("propia"); 
    }
}

const totalAPagar = () => {
    quitarClassError(); 

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia")
        nombre.focus();
        return;
    }

    if (apellido.value === "") { 
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("propia")
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia")
        mail.focus();
        return;
    }

    const emailValido = (mail) => { 
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, ingrese un correo electrónico válido"); 
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if (cantidadTickets.value == 0 || isNaN(cantidadTickets.value)) {
        alert("Por favor, ingrese una cantidad válida de tickets"); 
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    if (categoria.value === "") {
        alert("Por favor, seleccione una categoría"); 
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    

    let totalValorTickets = cantidadTickets.value * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (DescuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }

    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener('click', totalAPagar);

const resetTotalAPagar = () => {
    quitarClassError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener('click', resetTotalAPagar);