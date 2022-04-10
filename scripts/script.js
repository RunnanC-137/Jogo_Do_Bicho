const table = document.querySelector(".table")

const animailEscolhido = document.querySelector(".animal-escolhido")
const numeroEscolhido = document.querySelector(".numero-escolhido")

const escolherAnimal = document.querySelector(".escolher-animal")
const escolherNumero = document.querySelector(".escolher-numero")

const iniciar = document.querySelector(".iniciar")

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
///Escopo das funções



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

    i.addEventListener("click", () => {
        
    })
})



animais.forEach(i => {

    i.children[1].addEventListener( "click" , function (i) {
        
        animailEscolhido.innerHTML = this.textContent
    })

    i.children[0].addEventListener( "click" , function (i) {

        numeroEscolhido.innerHTML = this.textContent
    })
})

animais.forEach(function (i) {


    console.log(i.this)
})
iniciar.addEventListener("click", () => {

    let animal = Math.floor(Math.random() * 25)
    let numero = Math.floor(Math.random() * 25)
    animal = Object.keys(animalsList)[animal]
    numero = Object.values(animalsList)[numero][0]

    escolherAnimal.innerHTML = animal
    escolherNumero.innerHTML = numero

    ani = animailEscolhido.textContent
    num = numeroEscolhido.textContent 

    if (ani == animal) {
        alert("vocé acertou o animal")
    } else if (num == numero) {

        alert("vocé acertou o número")

    }
    
})





function indexBusc (object, chave=""){
    
    chave = object[chave]
    let contador = 0
    for (index in object) {

        if (object[index] == chave) {
            return contador
            break 
        } else {

            contador++
        }
 
    }

}



}
