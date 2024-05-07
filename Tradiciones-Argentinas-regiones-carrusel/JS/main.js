let imagenes = [
    { 
        "url": "./imagenes/carrusel/choripan-bs-as.jpg",
        "texto": "Centro",
        "link":"./centro.html"
    },
    {
        "url": "./imagenes/carrusel/chipa-litoral.jpg",
        "texto": "Litoral",
        "link":"./litoral.html"        
    },
    {
        "url": "./imagenes/carrusel/locro-norte.jpg",
        "texto": "Norte",
        "link":"./norte.html"
    },
    {
        "url": "./imagenes/carrusel/chivito-mendocino.jpg",
        "texto": "Cuyo",
        "link":"./cuyo.html"
    },
    {
        "url": "./imagenes/carrusel/trucha-patagonia.jpg",
        "texto": "Patagonia",
        "link":"./patagonia.html"
    }
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("imagen-carrusel");
let texto = document.getElementById("texto-carrusel");
let actual = 0;

atras.addEventListener('click', () => {
    actual-=1;
    if (actual==-1){actual = imagenes.length - 1}
    imagen.innerHTML = `<a href="${imagenes[actual].link}"><img src="${imagenes[actual].url}" alt="locro"></a>`;
    texto.innerHTML = `<a href="${imagenes[actual].link}"><h2>${imagenes[actual].texto}</h2></a>`;
});

adelante.addEventListener('click', () => {
    actual+=1;
    if (actual==imagenes.length){actual = 0}
    imagen.innerHTML = `<a href="${imagenes[actual].link}"><img src="${imagenes[actual].url}" alt="locro"></a>`;
    texto.innerHTML = `<a href="${imagenes[actual].link}"><h2>${imagenes[actual].texto}</h2></a>`;
});