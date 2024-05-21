let imagenes = [
    { 
        "url": "./imagenes/carrusel/choripan-bs-as.jpg",
        "texto": "Centro",
        "descripcion": "Centro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem earum accusantium maiores dolore libero mollitia voluptates quia id magnam laudantium, doloribus quidem voluptate provident possimus, eius consequuntur iusto harum?",
        "link":"./centro.html"
    },
    {
        "url": "./imagenes/carrusel/chipa-litoral.jpg",
        "texto": "Litoral",
        "descripcion": "Litoral Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem earum accusantium maiores dolore libero mollitia voluptates quia id magnam laudantium, doloribus quidem voluptate provident possimus, eius consequuntur iusto harum?",
        "link":"./litoral.html"        
    },
    {
        "url": "./imagenes/carrusel/locro-norte.jpg",
        "texto": "Norte",
        "descripcion": "Norte Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem earum accusantium maiores dolore libero mollitia voluptates quia id magnam laudantium, doloribus quidem voluptate provident possimus, eius consequuntur iusto harum?",
        "link":"./norte.html"
    },
    {
        "url": "./imagenes/carrusel/chivito-mendocino.jpg",
        "texto": "Cuyo",
        "descripcion": "Cuyo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem earum accusantium maiores dolore libero mollitia voluptates quia id magnam laudantium, doloribus quidem voluptate provident possimus, eius consequuntur iusto harum?",
        "link":"./cuyo.html"
    },
    {
        "url": "./imagenes/carrusel/trucha-patagonia.jpg",
        "texto": "Patagonia",
        "descripcion": "Patagonia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem earum accusantium maiores dolore libero mollitia voluptates quia id magnam laudantium, doloribus quidem voluptate provident possimus, eius consequuntur iusto harum?",
        "link":"./patagonia.html"
    }
];

let index = 1;
let textoSlider = document.getElementById("texto-slider");
let imagenSlider = document.getElementById("img-fondo-slider");



setInterval(()=>{
    if (index==imagenes.length){index=0}
    textoSlider.innerHTML = `<h1>${imagenes[index].texto}</h1><p>${imagenes[index].descripcion}</p>`;
    imagenSlider.innerHTML = `<img src="${imagenes[index].url}" alt="imagen fondo de region" style="animation-duration: 2500ms; animation-name: slidein;">`;
    index++;
}, 4500)


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario-de-contacto').addEventListener('submit', function(event) {
         event.preventDefault();
    
            let isValid = true;
            const alertas = document.getElementById('alertas');
            alertas.innerHTML = '';
    
            const nombre = document.getElementById('nombre-js');
            if (nombre.value.trim() === '') {
                isValid = false;
                alertas.innerHTML += '<p>Por favor, ingresa tu nombre.</p>';
            }
    
            const email = document.getElementById('email-js');
            if (email.value.trim() === '') {
                isValid = false;
                alertas.innerHTML += '<p>Por favor, ingresa tu correo electrónico.</p>';
            }
    
            const asunto = document.getElementById('asunto-js');
            if (asunto.value === '') {
                isValid = false;
                alertas.innerHTML += '<p>Por favor, selecciona un asunto.</p>';
            }
    
            const mensaje = document.getElementById('mensaje-js');
            if (mensaje.value.trim() === '') {
                isValid = false;
                alertas.innerHTML += '<p>Por favor, ingresa tu mensaje.</p>';
            }
    
            const acepto = document.getElementById('acepto-js');
            if (!acepto.checked) {
                isValid = false;
                alertas.innerHTML += '<p>Debes aceptar los términos y condiciones.</p>';
            }
    
            if (isValid) {
                alert('Formulario enviado correctamente.');
            }
        });
    });
