let numeros = [];

function criandoHtml() {
    let tagLabel = document.createElement("label");
    tagLabel.innerText = "Número";
    tagLabel.setAttribute("for", "numero");

    let body = document.querySelector("body");
    body.appendChild(tagLabel);
    body.removeChild(tagLabel);
    let tagDiv = document.createElement("div");
    tagDiv.appendChild(tagLabel);

    let tagInput = document.createElement("input");
    tagInput.setAttribute("id", "numero");
    tagInput.setAttribute("type", "number");
    tagInput.onfocus = verificarValorCampo;
    tagInput.onblur = verificarValorCampo;
    tagInput.onkeyup = tratarOnKeyUpInput;
    tagDiv.appendChild(tagInput);

    let tagButton = document.createElement("button");
    tagButton.innerText = "Cadastrar";
    tagButton.onclick = cadastrarNumero;
    tagDiv.appendChild(tagButton);

    body.appendChild(tagDiv);

    criarTabela();

    ocultarBotao();
}

function tratarOnKeyUpInput(event) {
    verificarValorCampo();

    if (event.key === "Enter") {
        cadastrarNumero();
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
    let tagThNumero = document.createElement("th");
    let tagThAcao = document.createElement("th");
    tagThNumero.innerText = "Número";
    tagThAcao.innerText = "Ação";
    tagTheadTr.appendChild(tagThNumero);
    tagTheadTr.appendChild(tagThAcao);
    tagThead.appendChild(tagTheadTr);
    tagTabela.appendChild(tagThead);

    let tagTbody = document.createElement("tbody");
    tagTabela.appendChild(tagTbody);

    let body = document.querySelector("body");
    body.appendChild(tagTabela);
}

// CRUD => Create, Read, Update, Delete
function cadastrarNumero() {
    let tagInput = document.querySelector("input");
    let valor = tagInput.value;
    if (valor.length === 0){
        alert("Número deve ser preenchido!");
        return;
    }

    tagInput.value = "";
    numeros.push(valor);
    criarLinha(valor);
}

function apagar(element){
    let botaoDoClick = element.target;
    let tr = botaoDoClick.parentNode.parentNode;
    let tbody = document.querySelector("tbody");
    tbody.removeChild(tr);
}

function editar(element){
    let botaoDoClick = element.target;
    let tr = botaoDoClick.parentNode.parentNode;
    let colunaAlterar = tr.querySelector("td");
    let valor = colunaAlterar.innerText;
    let tagInput = document.querySelector("input");
    tagInput.value = valor;
    
}

function criarLinha(numero) {
    let tagTr = document.createElement("tr");
    let tagTdNumero = document.createElement("td");
    let tagTdAcao = document.createElement("td");
    let tagButtonEditar = document.createElement("button");
    let tagButtonApagar = document.createElement("button");
    
    tagButtonEditar.innerText = "Editar";
    tagButtonApagar.innerText = "Apagar";
    tagTdNumero.innerText = numero;

    tagButtonEditar.onclick = editar;
    tagButtonApagar.onclick = apagar;
    
    tagTdAcao.appendChild(tagButtonEditar);
    tagTdAcao.appendChild(tagButtonApagar);
    tagTr.appendChild(tagTdNumero);
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