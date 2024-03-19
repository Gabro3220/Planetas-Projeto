const btnMobile = document.getElementById('btn-mobile');

const array_titulos = document.querySelectorAll('.titulo_textos')
const array_textos = document.querySelectorAll('.item_textos')



btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

for (const [indice, obj_titulo] of array_titulos.entries()){
    obj_titulo.addEventListener('click', function(){funExibeTexto(indice)})
}

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }


  function funExibeTexto(par_indice){
    const obj_texto = array_textos[par_indice]

   if( obj_texto.style.display == 'flex'){
        obj_texto.style.display = 'none'
   }
   else{
    obj_texto.style.display = 'flex'
   }
}