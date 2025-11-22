function continuar(){
  const nome = document.getElementById("nome").value
  window.location.href = "pag2.html?nome=" + encodeURIComponent(nome)
}

//variável que será usada para controlar o uso do botão jogar
let podeJogar = false

//variável que será usada para a soma das cartas do computador
let totalC = 0;

//variáveis que irão salvar as cartas sorteadas pelo jogador
let ultimasCartasJ = [];
let ultimoNaipeJ = "";

//sorteia as cartas do jogador
function sortearJ(numCartas){
  let jogador = []

  for (let index = 0; index < numCartas; index++) {

    //randomiza as cartas e adiciona no array do jogador
    n = Math.floor(Math.random() * 13) + 1
    jogador.push(n)
  }
    return jogador
}

//função que vai mostrar as cartas do jogador
function mostrarCartasJ(numeros, naipe, nome){
  //pega os itens que serão substituídos
  const nomeJogador = document.getElementById("jogador")
  const cartas =  document.getElementById("resultado")

  cartas.innerHTML = ""// limpa antes
  nomeJogador.innerHTML = ""// limpa antes

  nomeJogador.innerHTML += `<p class='resultado'>${nome}</p><br>`

  //vai mapear os ícones possíveis
  const icones = {
    "Copas": "copas.svg",
    "Ouros": "ouros.svg",
    "Paus": "paus.svg",
    "Espadas": "espadas.svg"
  }

  function numMap(num){
    const mapa = {
      1: "A",
      11: "J",
      12: "Q",
      13: "K"
    }
    return mapa[num] || num; //se não estiver no mapa, retorna o próprio número
  }

  const icone = icones[naipe] //seleciona o SVG correto

  for (let index = 0; index < numeros.length; index++) {
    const num = numeros[index]
    const numero = numMap(num)

    cartas.innerHTML += `

    <div class='resultado'>
      <div style='background-color: #d1d1d1; padding: 5px; height: 100px; width: 70px; border-radius: 8px; color: #b421799f; font-weight: bold;'>

        ${numero}<br>
        <center><img src='assets/img/${icone}' style='margin: 12px 0;'></img></center>
        <p style='float: right;'>${numero}</p>
      </div>
    </div>
    ` 
  }

  const totalJ = somarCartasJ(numeros);
  return totalJ
}

//função chamada no html para sortear e mostrar as cartas do jogador
function sorteioJ(){
  //pega a qtde de cartas e o naipe escolhido pelo jogador 
  const numCartas = parseInt(document.getElementById('num').value)
  const naipe = document.querySelector('input[name="naipe"]:checked').value

  //pega os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  //pega o valor do parâmetro "nome"
  const nome = params.get("nome");

  //chama a função que vai sortear as cartas
  const resultado = sortearJ(numCartas)

   // Salva globalmente
  ultimasCartasJ = resultado;
  ultimoNaipeJ = naipe;

  mostrarCartasJ(resultado, naipe, nome)

  //agora pode jogar
  podeJogar = true;
}

//sorteia as cartas do computador
function sortearC(numCartas){
  let computador = []

  for (let index = 0; index < numCartas; index++) {

    //randomiza as cartas e adiciona no array do computador
    n = Math.floor(Math.random() * 13) + 1
    computador.push(n)
  }
    return computador
}

//função que vai mostrar as cartas do computador
function mostrarCartasC(numeros, naipe){
  //pega os itens que serão substituídos
  const nomeJogador = document.getElementById("jogadorPopup2")
  const cartas =  document.getElementById("resultadoPopup2")
  cartas.innerHTML = ""// limpa antes
  nomeJogador.innerHTML = ""// limpa antes

  nomeJogador.innerHTML += `<p class='resultado'>Computador</p><br>`

  //vai mapear os ícones possíveis
  const icones = {
    "Copas": "copas.svg",
    "Ouros": "ouros.svg",
    "Paus": "paus.svg",
    "Espadas": "espadas.svg"
  }

  function numMap(num){
    const mapa = {
      1: "A",
      11: "J",
      12: "Q",
      13: "K"
    }
    return mapa[num] || num; //se não estiver no mapa, retorna o próprio número
  }

  const icone = icones[naipe] //seleciona o SVG correto

  for (let index = 0; index < numeros.length; index++) {
    const num = numeros[index]
    const numero = numMap(num)

    cartas.innerHTML += `

    <div class='resultado'>
      <div style='background-color: #d1d1d1; padding: 5px; height: 100px; width: 70px; border-radius: 8px; color: #b421799f; font-weight: bold;'>

        <p style='float: left;'>${numero}<p><br>
        <center><img src='assets/img/${icone}' style='margin: 12px 0;'></img></center>
        <p style='float: right;'>${numero}</p>
      </div>
    </div>
    ` 
  }

  const totalC = somarCartasC(numeros);
  return totalC
}

//função chamada no html para sortear e mostrar as cartas do computador
function sorteioC(){
  //pega a qtde de cartas e o naipe escolhido pelo jogador 
  const numCartas = parseInt(document.getElementById('num').value)
  const naipe = document.querySelector('input[name="naipe"]:checked').value

  //chama a função que vai sortear as cartas
  const resultado = sortearC(numCartas)
 
  totalC = mostrarCartasC(resultado, naipe)
}

//função que vai mostrar as cartas do jogador no popup
function mostrarCartasPopup(numeros, naipe, nome){
  //pega os itens que serão substituídos
  const nomeJogador = document.getElementById("jogadorPopup")
  const cartas =  document.getElementById("resultadoPopup")

  cartas.innerHTML = ""// limpa antes
  nomeJogador.innerHTML = ""// limpa antes

  nomeJogador.innerHTML += `<p class='resultado'>${nome}</p><br>`

  //vai mapear os ícones possíveis
  const icones = {
    "Copas": "copas.svg",
    "Ouros": "ouros.svg",
    "Paus": "paus.svg",
    "Espadas": "espadas.svg"
  }

  function numMap(num){
    const mapa = {
      1: "A",
      11: "J",
      12: "Q",
      13: "K"
    }
    return mapa[num] || num; //se não estiver no mapa, retorna o próprio número
  }

  const icone = icones[naipe] //seleciona o SVG correto

  for (let index = 0; index < numeros.length; index++) {
    const num = numeros[index]
    const numero = numMap(num)

    cartas.innerHTML += `

    <div class='resultado'>
      <div style='background-color: #d1d1d1; padding: 5px; height: 100px; width: 70px; border-radius: 8px; color: #b421799f; font-weight: bold;'>

        ${numero}<br>
        <center><img src='assets/img/${icone}' style='margin: 12px 0;'></img></center>
        <p style='float: right;'>${numero}</p>
      </div>
    </div>
    ` 
  }
}

//pegar o valor da carta
function valorCarta(carta){
  if(carta === "A") return 1
  if (carta === "J") return 11
  if (carta === "Q") return 12
  if (carta === "K") return 13

  return parseInt(carta); //para cartas de 2–10
}

//somar as cartas do jogador
function somarCartasJ(numeros){
  let soma = 0

  for (let index = 0; index < numeros.length; index++) {
    soma += valorCarta(numeros[index]) 
  }

  return soma
}

//somar as cartas do computador
function somarCartasC(numeros){
  let soma = 0

  for (let index = 0; index < numeros.length; index++) {
    soma += valorCarta(numeros[index]) 
  }

  return soma
}


//função para mostrar as cartas do jogador no popup
function jogarCartasPopup(){
  //pega os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  //pega o valor do parâmetro "nome"
  const nome = params.get("nome");

  mostrarCartasPopup(ultimasCartasJ, ultimoNaipeJ, nome)
}

//vai abrir o popup com o resultado
function jogarCartas(){
    if (!podeJogar) {
      document.getElementById("aviso").style.display = "flex";
      return
    }

  const popup = document.getElementById("popup");
  const totalJ = somarCartasJ(ultimasCartasJ)
  jogarCartasPopup()
  sorteioC()
  
  document.getElementById("soma").innerHTML = `
  <br>
  <div>
    <p>Total - Jogador: ${totalJ}</p>
    <p>Total - Computador: ${totalC}</p>
  </div>
  <br>
  `

  let vencedor = ""
  if(totalJ > totalC) vencedor = "O jogador é o vencedor!!"
  else if(totalC > totalJ) vencedor = "O computador é o vencedor!!"
  else vencedor = "Empate!!"

  document.getElementById("vencedor").innerHTML = `
  <h4>${vencedor}</h4>
  `

  popup.style.display = "flex"; //mostra o popup
}

//botão fechar
function fechar(){
  document.getElementById("popup").style.display = "none";
  podeJogar = false //só pode jogar se sortear novamente 
}

//botão fechar do aviso
function fecharAviso(){
  document.getElementById("aviso").style.display = "none";
}