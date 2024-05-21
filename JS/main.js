let imagenes = [
    { 
        "url": "./imagenes/carrusel/choripan-bs-as.jpg",
        "texto": "Centro",
        "descripcion": "La cultura gastronómica de la región Centro es una de las mas influenciadas por la inmigración italiana y española. Sus principales platos son el asado, las pastas, milanesas, pizzas y guisos. La ciudad de Buenos Aires es muy conocida por sus "bodegones" donde suelen encontrarse platos abundantes al estilo casero.",
        "link":"./centro.html"
    },
    {
        "url": "./imagenes/carrusel/chipa-litoral.jpg",
        "texto": "Litoral",
        "descripcion": "La gastronomía tradicional de la región del Litoral argentino es el resultado de la combinación de varias culturas. Podemos encontrar peces de rio, como el surubí y el bagre y platos preparados con harina de mandioca como locros y el tradicional chipa proveniente de la cultura guaraní.",
        "link":"./litoral.html"        
    },
    {
        "url": "./imagenes/carrusel/locro-norte.jpg",
        "texto": "Norte",
        "descripcion": "La gastronomía tradicional de la región norte argentina conserva su influencia aborigen, en platos formados por una gran diversidad de productos que mantienen vivos todos los secretos. Los principales ingredientes de estos platos son: maíz, papas, zapallos, quinoa y carnes de llama, vaca, cerdo y gallina.",
        "link":"./norte.html"
    },
    {
        "url": "./imagenes/carrusel/chivito-mendocino.jpg",
        "texto": "Cuyo",
        "descripcion": "La gastronomía tradicional de la región de cuyo se basa, en el puchero, los caldos, el locro, la cazuela de gallina, la humita, la carne a la bolsa, los embutidos y fiambres, las tortillas y la carbonada, junto con las empanadas son parte del intercambio entre culturas que hoy forman parte de la dieta argentina.",
        "link":"./cuyo.html"
    },
    {
        "url": "./imagenes/carrusel/trucha-patagonia.jpg",
        "texto": "Patagonia",
        "descripcion": "La gastronomía tradicional de la región patagónica, marcada por la influencia alemana y suiza, es una de las más variadas del país. Podemos encontrar truchas, mariscos, ciervos, jabalíes, cordero patagónico y centolla que, entre otros, son los platos mas destacados de esta región.",
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
