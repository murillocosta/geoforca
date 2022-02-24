const palavras = [[
      "Afeganistão",
      "África do Sul",
      "Albânia",
      "Alemanha",
      "Andorra",
      "Angola",
      "Antígua e Barbuda",
      "Arábia Saudita",
      "Argélia",
      "Argentina",
      "Arménia",
      "Austrália",
      "Áustria",
      "Azerbaijão",
      "Bahamas",
      "Bangladesh",
      "Barbados",
      "Bahrein",
      "Bélgica",
      "Belize",
      "Benim",
      "Bielorrússia",
      "Bolívia",
      "Bósnia Herzegovina",
      "Botsuana",
      "Brasil",
      "Brunei",
      "Bulgária",
      "Burquina Faso",
      "Burundi",
      "Butão",
      "Cabo Verde",
      "Camarões",
      "Camboja",
      "Canadá",
      "Catar",
      "Cazaquistão",
      "Chade",
      "Chile",
      "China",
      "Chipre",
      "Colômbia",
      "Comores",
      "Congo",
      "Coreia do Norte",
      "Coreia do Sul",
      "Kosovo",
      "Costa do Marfim",
      "Costa Rica",
      "Croácia",
      "Kuwait",
      "Cuba",
      "Dinamarca",
      "Dominica",
      "Egito",
      "Emirados Árabes Unidos",
      "Equador",
      "Eritreia",
      "Eslováquia",
      "Eslovênia",
      "Espanha",
      "Suazilândia",
      "Estado da Palestina",
      "Estados Unidos",
      "Estónia",
      "Etiópia",
      "Fiji",
      "Filipinas",
      "Finlândia",
      "França",
      "Gabão",
      "Gâmbia",
      "Gana",
      "Geórgia",
      "Granada",
      "Grécia",
      "Guiné",
      "Guiné Equatorial",
      "Guiné-Bissau",
      "Haiti",
      "Honduras",
      "Hungria",
      "Iêmen",
      "Ilhas Marshall",
      "Índia",
      "Indonésia",
      "Irã",
      "Iraque",
      "Irlanda",
      "Islândia",
      "Israel",
      "Itália",
      "Jamaica",
      "Japão",
      "Djibouti",
      "Jordânia",
      "Laos",
      "Lesoto",
      "Letónia",
      "Líbano",
      "Libéria",
      "Líbia",
      "Liechtenstein",
      "Lituânia",
      "Luxemburgo",
      "Macedônia",
      "Madagáscar",
      "Malásia",
      "Malawi",
      "Maldivas",
      "Mali",
      "Malta",
      "Marrocos",
      "Ilhas Maurício",
      "Mauritânia",
      "México",
      "Myanmar",
      "Micronésia",
      "Moçambique",
      "Moldávia",
      "Mônaco",
      "Mongólia",
      "Montenegro",
      "Namíbia",
      "Nauru",
      "Nepal",
      "Nicarágua",
      "Níger",
      "Nigéria",
      "Noruega",
      "Nova Zelândia",
      "Omã",
      "Países Baixos",
      "Palau",
      "Panamá",
      "Papua Nova Guiné",
      "Paquistão",
      "Paraguai",
      "Peru",
      "Polônia",
      "Portugal",
      "Quênia",
      "Quirguistão",
      "Quiribáti",
      "Reino Unido",
      "República Centro-Africana",
      "República Tcheca",
      "República Democrática do Congo",
      "República Dominicana",
      "Roménia",
      "Ruanda",
      "Rússia",
      "Salomão",
      "El Salvador",
      "Samoa",
      "Santa Lúcia",
      "São Cristóvão e Neves",
      "São Marinho",
      "São Tomé e Príncipe",
      "São Vicente e Granadinas",
      "Seicheles",
      "Senegal",
      "Serra Leoa",
      "Sérvia",
      "Singapura",
      "Síria",
      "Somália",
      "Sri Lanka",
      "Sudão",
      "Sudão do Sul",
      "Suécia",
      "Suíça",
      "Suriname",
      "Tailândia",
      "Taiwan",
      "Tajiquistão",
      "Tanzânia",
      "Timor Leste",
      "Togo",
      "Tonga",
      "Trindade e Tobago",
      "Tunísia",
      "Turcomenistão",
      "Turquia",
      "Tuvalu",
      "Ucrânia",
      "Uganda",
      "Uruguai",
      "Uzbequistão",
      "Vanuatu",
      "Vaticano",
      "Venezuela",
      "Vietnã",
      "Zâmbia",
      "Zimbábue"
    ], [
      "Acre",
      "Rio Branco",
      "Alagoas",
      "Maceió",
      "Amapá",
      "Macapá",
      "Amazonas",
      "Manaus",
      "Bahia",
      "Salvador",
      "Ceará",
      "Fortaleza",
      "Distrito Federal",
      "Brasília",
      "Espírito Santo",
      "Vitória",
      "Goiás",
      "Goiânia",
      "Maranhão",
      "São Luiz",
      "Mato Grosso",
      "Cuiabá",
      "Mato Grosso do Sul",
      "Campo Grande",
      "Minas Gerais",
      "Belo Horizonte",
      "Pará",
      "Belém",
      "Paraíba",
      "João Pessoa",
      "Paraná",
      "Curitiba",
      "Pernambuco",
      "Recife",
      "Piauí",
      "Teresina",
      "Rio de Janeiro",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Natal",
      "Rio Grande do Sul",
      "Porto Alegre",
      "Rondônia",
      "Porto Velho",
      "Roraima",
      "Boa Vista",
      "Santa Catarina",
      "Florianópolis",
      "São Paulo",
      "São Paulo",
      "Sergipe",
      "Aracajú",
      "Tocantins",
      "Palmas"
    ],[
      "Esfinge de Giza",
      "Fonte de Trevi",
      "Ópera de Sydney",
      "Castelo de Neuschwanstein",
      "Grand Canyon",
      "Ponte Golden Gate",
      "Monte Kilimanjaro",
      "Templo de Choijin Lama",
      "Templo Dourado",
      "Ponte Széchenyi Chain",
      "Memorial Lincoln",
      "Acrópolis",
      "Empire State",
      "Monumento Africano do Renascimento",
      "Torre Eiffel",
      "Palácio Potala",
      "Borobudur",
      "Catedral de São Balísio",
      "Angkor Wat",
      "Cavernas de Batu",
      "Rochedo de Gibraltar",
      "Igrejas azuis",
      "Cataratas de Vitória",
      "Machu Picchu",
      "Torres Petronas",
      "Cataratas Ángel",
      "Doze Apóstolos",
      "Cataratas do Niágara",
      "Museu Guggenheim",
      "Mesquita do Xeque Sheikh Zayed",
      "Palácio de Versailles"
    ]]
function formataPalavra(text) {
  text = text.toUpperCase();
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'C');
  text = text.replace("-", "");
  text = text.replace("-", "");
  text = text.replace("-", "");
  text = text.replace(" ", "");
  text = text.replace(" ", "");
  text = text.replace(" ", "");
  return text;
};

let categoria;
let palavraSecreta;
let listaDinamica = [];
let numeroTentativas = 6;

function sorteiaPalavraSecreta() {
    const indiceCategoria = parseInt(Math.random() * palavras.length);
    const indicePalavraSecreta = parseInt(Math.random() * palavras[indiceCategoria].length);
    
    if (indiceCategoria == 0) {
        categoria = "Países do Mundo"
    } else if (indiceCategoria == 1) {
        categoria = "Estados e Capitais Brasileiras"
    } else if (indiceCategoria == 2) {
        categoria = "Pontos Turísticos do Mundo"
    }

    palavraSecreta = formataPalavra(palavras[indiceCategoria][indicePalavraSecreta]);
    console.log(categoria);
    console.log(palavraSecreta);
}

sorteiaPalavraSecreta()

function mostrarPalavraNaTela(){
    const displayCategoria = document.getElementById("displayCategoria");
    displayCategoria.innerHTML = categoria;

    const palavraSecretaNaTela = document.getElementById('palavra-secreta');
    palavraSecretaNaTela.innerHTML = "";

    for(let i = 0; i < palavraSecreta.length; i++){
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraSecretaNaTela.innerHTML = palavraSecretaNaTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>";
        }
        else {
            palavraSecretaNaTela.innerHTML = palavraSecretaNaTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }
};

mostrarPalavraNaTela();

function verificaLetra(letra){
    if(numeroTentativas > 0) {
        mudarLetra(`tecla${letra}`);
        comparaPalavras(letra);
        mostrarPalavraNaTela();
    }
    

};

function mudarLetra(tecla) {
    document.getElementById(tecla).style.display = "none"
}

function comparaPalavras(letra){
    const posicao = palavraSecreta.indexOf(letra);
    if (posicao < 0) {
        numeroTentativas--;
        mostraForca();
        if (numeroTentativas == 0) {
            mostraMsg("Deu forca!", "Suas chances acabaram, a palavra era: <br>" + palavraSecreta + "<br> Clique na lupa se quiser tentar novamente!");
        }

    } else {
        for (i = 0; i < palavraSecreta.length; i++) {
            if(palavraSecreta[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
    for(i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if(vitoria == true) {
        mostraMsg("Fugiu da Forca!", "Parabéns, você acertou a palavra! Clique na lupa se quiser jogar novamente!")        
        numeroTentativas = 0;
    }
};

function mostraForca() {
    switch(numeroTentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./../img/forca1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca5.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./../assets/img/forca0.png')";
            break;
    }
    };

    function mostraMsg(titulo, mensagem) {
        let tituloModal = document.getElementById('exampleModalLabel');
        tituloModal.innerText = titulo;

        let corpoModal = document.getElementById('modal-body');
        corpoModal.innerHTML = mensagem;

        $("#meuModal").modal({
            show: true
        });
    }

let reiniciaJogo = document.getElementById('reiniciar');
reiniciaJogo.addEventListener("click", function() {
    location.reload();
});