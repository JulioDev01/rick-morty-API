containerApi = document.querySelector("#dadosApi-html")

async function buscandoDados(){
    try{
        const buscaApi = await fetch("https://rickandmortyapi.com/api/character")
        const caracteristicas = await buscaApi.json();
        
        console.log(caracteristicas);

        caracteristicas.results.forEach((caracteristica) => {
            containerApi.innerHTML += `
            <div class="dadosApi">
                <img class='img-api' src="${caracteristica.image}">
                <p class='nome-api'>${caracteristica.name}</p>
                <p class='specieStatus-api'>${caracteristica.species} - ${caracteristica.status}</p>
                <p class='texto-api'>Último lugar visto: </p>
                <p class='infos-api'>${caracteristica.location.name}</p>
                <p class='texto-api'>Sua origem: </p>
                <p class='infos-api'>${caracteristica.origin.name}</p>
            </div>
            `
        }); 
    }
    catch(error){
        containerApi.innerHTML = `<p> Houve um erro ao carregar os dados: ${error}`
    }
}

buscandoDados();


//Função barra de pesquisa
const barraDePesquisa = document.querySelector(".barraDePesquisa-input");

barraDePesquisa.addEventListener('input', filtarPesquisa);

function filtarPesquisa(){
    const dadosApi = document.querySelectorAll(".dadosApi")

    if(barraDePesquisa.value != "") {
        dadosApi.forEach((dados)=>{
            let nome = dados.querySelector(".nome-api").textContent.toLowerCase();
            let textoInformado = barraDePesquisa.value.toLowerCase();

            if(!nome.includes(textoInformado)){
                dados.classList.add('esconder'); //ele adiciona uma class a div que sera chamada no css escondendo os itens
            } else {
                dados.classList.remove('esconder');
            }
        })
    } else {
        dadosApi.forEach((dados) => {
            dados.classList.remove('esconder');
        });
    }
}