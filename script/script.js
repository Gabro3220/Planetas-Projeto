//Objetos e variaveis
const btnMobile = document.getElementById('btn-mobile');


const array_planetas = document.querySelectorAll('.container_planetas img')
const array_tables = document.querySelectorAll('.container_info table')
const obj_img_destaque = document.querySelector('#img_destaque')
const obj_p_destaque = document.querySelector('#p_destaque')

let anterior = 0

const obj_card_ant = document.querySelector('#card_ant')
const obj_card_prox = document.querySelector('#card_prox')
const obj_img_card = document.querySelector('#img_card')
const obj_titulo_card = document.querySelector('#titulo_card')
const obj_texto_card = document.querySelector('#texto_card')

const obj_card_ant_g = document.querySelector('#card_ant_g')
const obj_card_prox_g = document.querySelector('#card_prox_g')
const obj_img_card_g = document.querySelector('#img_card_g')
const obj_titulo_card_g = document.querySelector('#titulo_card_g')
const obj_texto_card_g = document.querySelector('#texto_card_g')

let num_card = 0
let num_card_g = 0





//Eventos
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


for (const [indice, obj_planeta] of array_planetas.entries()){
  obj_planeta.addEventListener('click', function() {funExibePlaneta(this.alt, this.src, indice)})
}


obj_card_ant.addEventListener('click', funCardAnterior)
obj_card_prox.addEventListener('click', funProximoCard)

obj_card_ant_g.addEventListener('click', funCardAnteriorg)
obj_card_prox_g.addEventListener('click', funProximoCardg)








//Funções
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


function funExibePlaneta(par_alt, par_src, par_ind){
  obj_img_destaque.setAttribute('src', par_src)
  obj_img_destaque.setAttribute('alt', par_alt)
  obj_p_destaque.innerHTML = par_alt

  const obj_table_anterior = array_tables[anterior]
  obj_table_anterior.setAttribute('hidden', true)

  const obj_table = array_tables[par_ind]
  obj_table.removeAttribute('hidden')

  anterior = par_ind
}

function funExibeCard(par_indice) {
  obj_img_card.src = array_infos[par_indice][3]
  obj_img_card.alt = obj_img_card.title = "Planeta - " + array_infos[par_indice][0]
  obj_titulo_card.innerHTML = array_infos[par_indice][0]
  obj_titulo_card.style.color = array_infos[par_indice][1]
  obj_texto_card.innerHTML = array_infos[par_indice][2]
}

funExibeCard(0)

function funCardAnterior(){
  num_card--
  if (num_card < 0){
      num_card = (array_infos.length - 1)
  }
  funExibeCard(num_card)
}

function funProximoCard(){
  num_card++
  if (num_card == array_infos.length){
      num_card = 0
  }
  funExibeCard(num_card)
}



function funExibeCardg(par_indiceg) {
  obj_img_card_g.src = array_infos_g[par_indiceg][3]
  obj_img_card_g.alt = obj_img_card_g.title = "Planeta - " + array_infos_g[par_indiceg][0]
  obj_titulo_card_g.innerHTML = array_infos_g[par_indiceg][0]
  obj_titulo_card_g.style.color = array_infos_g[par_indiceg][1]
  obj_texto_card_g.innerHTML = array_infos_g[par_indiceg][2]
}

funExibeCardg(0)

function funCardAnteriorg(){
  num_card_g--
  if (num_card_g < 0){
      num_card_g = (array_infos_g.length - 1)
  }
  funExibeCardg(num_card_g)
}

function funProximoCardg(){
  num_card_g++
  if (num_card_g == array_infos_g.length){
      num_card_g = 0
  }
  funExibeCardg(num_card_g)
}

