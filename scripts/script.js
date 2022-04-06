const numeroSorteado = document.querySelector(".numero-sorteado");
const table = document.querySelector(".table")

const animailEscolhido = document.querySelector(".animal-escolhido")
const numeroEscolhido = document.querySelector(".numero-escolhido")


const animalsList = {
    Avestrus:["01",],
    Aguia:["02",],
    Burro:["03",],
    Borboleta:["04",],
    Cachorro:["05",],

    Cabra:["06",],
    Carneiro:["07",],
    Camelo:["08",],
    Cobra:["09",],
    Coelho:["10"],

    Cavalo:["11"],
    Elefante:["12"],
    Galo:["13"],
    Gato:["14"],
    Jacare:["15"],

    Leao:["16"],
    Mamaco:["17"],
    Porco:["18"],
    Pavao:["19"],
    Peru:["20"],

    Touro:["21"],
    Tigre:["22"],
    Urso:["23"],
    Veado:["24"],
    Vaca:["25"]

}




/// escopo dos laços
Object.keys(animalsList).forEach(element => {
    
    table.innerHTML += `<div class="animal">
    <h2 class="numero">${animalsList[element][0]}</h2>
    <h1 class="nome">${element}</h1>
    </div>`
});





/// Escopo dos eventos
window.onload = e => {const animais = document.querySelectorAll(".animal") 

animais.forEach(i => {

    i.childNodes[3].addEventListener( "click" , () => {

        animailEscolhido.innerHTML = `${i.children[1].textContent}`       
    })

    i.childNodes[1].addEventListener( "click" , () => {

            numeroEscolhido.innerHTML = `${i.children[0].textContent}`
        })

})


    



/* animais.forEach(i => {

    i.addEventListener( "click" , o => {

        console.log(o)
        animailEscolhido.innerHTML = `${i.children[1].textContent}`
        numeroEscolhido.innerHTML = `${i.children[0].textContent}`
    })
}) */











}



