let texto_encriptado;
var parrafo;
var patron = /[A-Z]/g;
var arr;

function asignarTextoElemento(element, texto){
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = texto;
    return;
};

// Patron con arr hacen la comparacion de si hay o no una cadena con mayus.

function encriptar(){
    parrafo = document.getElementById("mostext").value;
    arr = parrafo.match(patron);

    if (parrafo == "" || parrafo == "Escriba aqui su mensaje") {
        alert("Escriba su mensaje para encriptar")
    }else {
        if (arr === null) {
            let nom = parrafo
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
            console.log(nom)
            document.getElementById('mostext').value = nom;
            asignarTextoElemento('.mostrar-par', `Tu mensaje fue encriptado`);
            asignarTextoElemento('#copiar', `Copiar`);
            document.getElementById('pika').style.display = "none";
            document.getElementById('pika-2').style.display = "block";
            document.getElementById('pika-3').style.display = "none"; 
            Mensaje();
    
        } else{
            alert("Solo letras minusculas y sin acento")
        }
    }   
}

// Cambia las vocales por su remplazo

function descencriptar(){
    parrafo = document.getElementById("mostext").value;
    if (parrafo == "" || parrafo == "Escriba aqui su mensaje") {
        alert("Escriba su mensaje para desencriptar")
    }else {
        let texto = parrafo
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            console.log(texto)
            
            document.getElementById('mostext').value = texto;
            asignarTextoElemento('.mostrar-par', `Tu mensaje fue desencriptado`);
            asignarTextoElemento('#copiar', `Copiar`);
            document.getElementById('pika').style.display = "none";
            document.getElementById('pika-2').style.display = "none";
            document.getElementById('pika-3').style.display = "block";
    }
    
}

function Mensaje() {
    asignarTextoElemento('.mostrar-sub', `Felecidades`);   
}
function inicio(){
    document.getElementById('pika').style.display = "block";
    document.getElementById('pika-2').style.display = "none";
    document.getElementById('pika-3').style.display = "none";
    asignarTextoElemento('.mostrar-sub', `Ningun mensaje fue encontrado`);
    //document.getElementById('mostext').value = "Escriba aqui su mensaje";
    asignarTextoElemento('#copiar', `Pegar`);   
}

function clipboard(){
    let copytext = document.getElementById("mostext").value;
    console.log(copytext)

    if (copytext == "" || copytext.trim() == "Escriba aqui su mensaje") {
        //funcion pegar
        navigator.clipboard.readText()
            .then(text => {
                document.getElementById('mostext').value = text;
            })
    } else if (copytext !== "") {
        //funcion copiar
        console.log("llego")
        
        navigator.clipboard.writeText(copytext)
            .then(() => {
                console.log('Texto copiado al portapapeles')
            })
        inicio();
    }
}
inicio();