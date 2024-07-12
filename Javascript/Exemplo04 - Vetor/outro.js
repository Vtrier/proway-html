let animais = [];
let proximoId = 0;
let idAlterar = -1;

let coresAnimais = [
    'Branco',
    'Preto',
    'Azul',
    'Marrom',
    'Amarelo',
    'Cinza',
    'Verde',
    'Vermelho',
    'Laranja',
    'Rosa',
    'Dourado',
    'Prateado',
    'Roxo',
    'Bege',
    'Malhado',
    'Listrado',
    'Tigrado',
    'Salmão',
    'Pardo',
    'Crema'
];

function criandoHtml() {
    let body = document.querySelector("body");

    let tagLabelNome = document.createElement("label");
    tagLabelNome.innerText = "Animal";
    tagLabelNome.setAttribute("for", "animal");

    let tagDiv = document.createElement("div");
    tagDiv.appendChild(tagLabelNome);

    let tagInputNome = document.createElement("input");
    tagInputNome.setAttribute("id", "animal");
    tagInputNome.setAttribute("type", "text");
    tagInputNome.onfocus = verificarValorCampo;
    tagInputNome.onblur = verificarValorCampo;
    tagInputNome.onkeyup = tratarOnKeyUpInput;
    tagDiv.appendChild(tagInputNome);

    let tagLabelCor = document.createElement("label");
    tagLabelCor.innerText = "Cor";
    tagLabelCor.setAttribute("for", "cor");
    tagDiv.appendChild(tagLabelCor);

    let tagSelectCor = document.createElement("select");
    tagSelectCor.setAttribute("id", "cor");
    tagDiv.appendChild(tagSelectCor);

    let tagOptionDisabled = document.createElement("option");
    tagOptionDisabled.innerText = "Selecione um item";
    tagOptionDisabled.setAttribute("disabled", "disabled");
    tagOptionDisabled.value = "Empty";
    tagSelectCor.appendChild(tagOptionDisabled);

    coresAnimais.sort();
    for (let i = 0; i < coresAnimais.length; i++) {
        let tagOption = document.createElement("option");
        tagOption.innerText = coresAnimais[i];
        tagOption.value = coresAnimais[i];
        tagSelectCor.appendChild(tagOption);
    }

    let tagButtonCadastrar = document.createElement("button");
    tagButtonCadastrar.innerText = "Cadastrar";
    tagButtonCadastrar.setAttribute("id", "botao-salvar");
    tagButtonCadastrar.onclick = cadastrarAnimal;
    tagDiv.appendChild(tagButtonCadastrar);

    body.appendChild(tagDiv);

    criarTabela();

    ocultarBotao();

    popularDadosLocalStorage();

    // tagInputNome.value = "Vaca";
    // tagSelectCor.value = "Branco";
    // tagButtonCadastrar.click();
    // tagInputNome.value = "Gato";
    // tagSelectCor.value = "Verde";
    // tagButtonCadastrar.click();
    // tagInputNome.value = "Cabrito";
    // tagSelectCor.value = "Roxo";
    // tagButtonCadastrar.click();

    tagOptionDisabled.setAttribute("selected", "selected");
}

function popularDadosLocalStorage() {
    animais = JSON.parse(localStorage.getItem("animais") || "[]");
    for (let i = 0; i < animais.length; i++) {
        let animal = animais[i];
        criarLinha(animal.id, animal.nome, animal.cor);

        if (animal.id > proximoId) {
            proximoId = animal.id;
        }
    }
}

function tratarOnKeyUpInput(event) {
    verificarValorCampo();

    if (event.key === "Enter") {
        cadastrarAnimal();
    }
}

function criarTabela() {
    // table tabela
    //      thead cabeçalho
    //          tr linha
    //              th coluna do cabeçalho
    //              th coluna do cabeçalho
    //      tbody
    //          tr
    //              td coluna do body
    let tagTabela = document.createElement("table");
    let tagThead = document.createElement("thead");
    let tagTheadTr = document.createElement("tr");
    let tagThId = document.createElement("th");
    let tagThAnimal = document.createElement("th");
    let tagThCor = document.createElement("th");
    let tagThAcao = document.createElement("th");
    tagThId.innerText = "ID";
    tagThAnimal.innerText = "Animal";
    tagThCor.innerText = "Cor";
    tagThAcao.innerText = "Ação";
    tagTheadTr.appendChild(tagThId);
    tagTheadTr.appendChild(tagThAnimal);
    tagTheadTr.appendChild(tagThCor);
    tagTheadTr.appendChild(tagThAcao);
    tagThead.appendChild(tagTheadTr);
    tagTabela.appendChild(tagThead);

    let tagTbody = document.createElement("tbody");
    tagTabela.appendChild(tagTbody);

    let body = document.querySelector("body");
    body.appendChild(tagTabela);
}

// CRUD => Create, Read, Update, Delete
function cadastrarAnimal() {
    let tagInput = document.querySelector("input");
    let nome = tagInput.value;
    if (nome.length === 0) {
        alert("Número deve ser preenchido!");
        return;
    }

    let tagSelectCor = document.querySelector("select");
    let cor = tagSelectCor.value;
    if (cor == "Empty"){
        alert("Escolha uma cor");
        return;
    }

    tagInput.value = "";
    tagSelectCor.value = "Empty";

    if (idAlterar == -1) {
        let id = ++proximoId;
        let animal = {
            "id": id,
            "nome": nome,
            "cor": cor,
        }
        animais.push(animal);

        criarLinha(id, nome, cor);
        ocultarBotao();
    } else {
        let animalDoVetor = animais.find(x => x.id === idAlterar);
        animalDoVetor.nome = nome;
        animalDoVetor.cor = cor;

        let linhas = document.querySelector("tbody").childNodes;
        for (let i = 0; i < linhas.length; i++) {
            let linha = linhas[i];
            let colunaId = linha.firstChild;
            let id = parseInt(colunaId.innerText);
            if (id == idAlterar) {
                let colunas = linha.childNodes;
                let colunaNome = colunas[1];
                let colunaCor = colunas[2];

                colunaNome.innerText = nome;
                colunaCor.innerText = cor;
                idAlterar = -1;
            }
        }

        let botaoSalvar = document.getElementById("botao-salvar");
        botaoSalvar.innerText = "Cadastrar";
        ocultarBotao();
    }

    atualizarLocalStorage();
}

function apagar(element) {
    let botaoDoClick = element.target;
    let tr = botaoDoClick.parentNode.parentNode;
    let tdId = tr.firstChild;
    let id = tdId.innerText;
    let indiceAnimal = animais.findIndex(animal => animal.id == id);
    animais.splice(indiceAnimal, 1);
    let tbody = document.querySelector("tbody");
    tbody.removeChild(tr);

    atualizarLocalStorage();
}

function editar(element) {
    let botaoDoClick = element.target;
    let tr = botaoDoClick.parentNode.parentNode;
    let colunaId = tr.querySelector("td");
    idAlterar = parseInt(colunaId.innerText);
    let animal = animais.find(x => x.id === idAlterar);

    let tagInputNome = document.querySelector("input");
    tagInputNome.value = animal.nome;
    let tagSelectCor = document.querySelector("select");
    tagSelectCor.value = animal.cor;

    let botaoSalvar = document.getElementById("botao-salvar");
    botaoSalvar.innerText = "Editar";
    mostrarBotao();
}

function atualizarLocalStorage() {
    let texto = JSON.stringify(animais);
    localStorage.setItem("animais", texto);
}

function criarLinha(id, animal, cor) {
    let tagTr = document.createElement("tr");
    let tagTdId = document.createElement("td");
    let tagTdAnimal = document.createElement("td");
    let tagTdCor = document.createElement("td");
    let tagTdAcao = document.createElement("td");
    let tagButtonEditar = document.createElement("button");
    let tagButtonApagar = document.createElement("button");

    tagButtonEditar.innerText = "Editar";
    tagButtonApagar.innerText = "Apagar";
    tagTdAnimal.innerText = animal;
    tagTdId.innerText = id;
    tagTdCor.innerText = cor;

    tagButtonEditar.onclick = editar;
    tagButtonApagar.onclick = apagar;

    tagTdAcao.appendChild(tagButtonEditar);
    tagTdAcao.appendChild(tagButtonApagar);
    tagTr.appendChild(tagTdId);
    tagTr.appendChild(tagTdAnimal);
    tagTr.appendChild(tagTdCor);
    tagTr.appendChild(tagTdAcao);

    let tbody = document.querySelector("tbody");
    tbody.appendChild(tagTr);
}

function verificarValorCampo() {
    let tagInput = document.querySelector("input");
    let valor = tagInput.value;
    if (valor.length === 0) {
        ocultarBotao();
    } else {
        mostrarBotao();
    }
}


function mostrarBotao() {
    let tagButton = document.querySelector("button");
    tagButton.classList.remove("hidden");
}

function ocultarBotao() {
    let tagButton = document.querySelector("button");
    tagButton.classList.add("hidden");
}

criandoHtml();