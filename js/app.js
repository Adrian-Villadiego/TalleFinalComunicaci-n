// ======================================
// SCROLL SUAVE
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

```
anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const destino =
    document.querySelector(
        this.getAttribute('href')
    );

    if(destino){

        destino.scrollIntoView({
            behavior:'smooth',
            block:'start'
        });

    }

});
```

});

// ======================================
// NAVBAR DINÁMICA
// ======================================

window.addEventListener('scroll',()=>{

```
const navbar =
document.querySelector('.custom-navbar');

if(window.scrollY > 50){

    navbar.style.background =
    "rgba(13,110,253,0.98)";

    navbar.style.boxShadow =
    "0 5px 20px rgba(0,0,0,.2)";

}else{

    navbar.style.background =
    "rgba(13,110,253,.95)";

    navbar.style.boxShadow =
    "none";

}
```

});

// ======================================
// ANIMACIÓN DE APARICIÓN
// ======================================

const observer =
new IntersectionObserver(entries => {

```
entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.classList.add('show');

    }

});
```

},{
threshold:0.2
});

document
.querySelectorAll('.card, .section-title')
.forEach(element => {

```
element.classList.add('fade-up');

observer.observe(element);
```

});

// ======================================
// EFECTO HOVER AVANZADO
// ======================================

const cards =
document.querySelectorAll('.card');

cards.forEach(card => {

```
card.addEventListener('mouseenter',()=>{

    card.style.transition =
    ".4s";

    card.style.transform =
    "translateY(-10px) scale(1.02)";

});

card.addEventListener('mouseleave',()=>{

    card.style.transform =
    "translateY(0) scale(1)";

});
```

});

// ======================================
// EFECTO HERO
// ======================================

window.addEventListener('scroll',()=>{

```
const hero =
document.querySelector('.hero');

if(hero){

    let value =
    window.scrollY * 0.4;

    hero.style.backgroundPositionY =
    value + 'px';

}
```

});

// ======================================
// MENSAJE DE BIENVENIDA
// ======================================

window.addEventListener('load',()=>{

```
console.log(
    "Proyecto Comunicación ADSO cargado correctamente"
);
```

});

// ======================================
// RELOJ DIGITAL
// ======================================

function actualizarHora(){

```
const horaActual =
new Date();

const hora =
horaActual.toLocaleTimeString();

const reloj =
document.getElementById('reloj');

if(reloj){

    reloj.innerHTML = hora;

}
```

}

setInterval(actualizarHora,1000);

// ======================================
// CONTADOR DE VISITAS LOCAL
// ======================================

let visitas =
localStorage.getItem('visitas');

if(!visitas){

```
visitas = 1;
```

}else{

```
visitas++;
```

}

localStorage.setItem(
'visitas',
visitas
);

const contador =
document.getElementById('contadorVisitas');

if(contador){

```
contador.innerHTML =
visitas;
```

}

// ======================================
// BOTÓN VOLVER ARRIBA
// ======================================

const btnTop =
document.createElement('button');

btnTop.innerHTML =
'↑';

btnTop.id =
'btnTop';

document.body.appendChild(btnTop);

btnTop.style.position =
'fixed';

btnTop.style.bottom =
'20px';

btnTop.style.right =
'20px';

btnTop.style.width =
'50px';

btnTop.style.height =
'50px';

btnTop.style.border =
'none';

btnTop.style.borderRadius =
'50%';

btnTop.style.background =
'#0d6efd';

btnTop.style.color =
'white';

btnTop.style.fontSize =
'22px';

btnTop.style.cursor =
'pointer';

btnTop.style.display =
'none';

btnTop.style.zIndex =
'999';

window.addEventListener('scroll',()=>{

```
if(window.scrollY > 300){

    btnTop.style.display =
    'block';

}else{

    btnTop.style.display =
    'none';

}
```

});

btnTop.addEventListener('click',()=>{

```
window.scrollTo({

    top:0,

    behavior:'smooth'

});
```

});

// ======================================
// EFECTO ESCRITURA HERO
// ======================================

const titulo =
document.querySelector('.hero h1');

if(titulo){

```
const textoOriginal =
titulo.innerText;

titulo.innerText = '';

let i = 0;

function escribir(){

    if(i < textoOriginal.length){

        titulo.innerText +=
        textoOriginal.charAt(i);

        i++;

        setTimeout(escribir,50);

    }

}

escribir();
```

}

// ======================================
// FECHA ACTUAL
// ======================================

const fecha =
document.getElementById('fechaActual');

if(fecha){

```
fecha.innerHTML =
new Date().toLocaleDateString();
```

}

// ======================================
// FIN
// ======================================
window.addEventListener("scroll", function(){

    const navbar =
    document.querySelector(".custom-navbar");

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scrolled");

    }else{

        navbar.classList.remove("navbar-scrolled");

    }

});