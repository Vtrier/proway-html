let nomes = [];
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
let idAlterar = -1;
let proximoId = 0;

ocultarBotao();
verificacao();

function verificacao() {
    let tagInputNome = document.getElementById("nome");
    let tagSelectEstado = document.getElementById("estado");

    tagInputNome.onfocus = verificarValorCampo;
    tagSelectEstado.onclick = verificarValorCampo;
    tagSelectEstado.onblur = verificarValorCampo;
    tagInputNome.onblur = verificarValorCampo;
    tagInputNome.onkeyup = keyUp;
}

function cadastrar() {
    let tagInput = document.getElementById("nome");
    let nomeCadastro = tagInput.value;
    if (nomeCadastro.length === 0) {
        alert("Nome deve ser preenchido");
        return;
    }

    let tagSelectEstado = document.getElementById("estado");
    let estadoCadastrar = tagSelectEstado.value;
    if (estadoCadastrar == "Empty") {
        alert("Estado deve ser preenchido");
        return;
    }

    tagInput.value = "";
    estadoCadastrar.value = "Empty";

    if (idAlterar == -1) {
        let id = ++proximoId;
        let nome = {
            "id": id,
            "nome": nome,
            "estado": estado,
        }
        nome.push(nomes);
    }
}

function criarLinha() {
    let tagTr = document.createElement("tr");
    let tagTdId = document.createElement("td");
    let tagTdNome = document.createElement("td");
    let tagTdEstado = document.createElement("td");
    let tagTdAcao = document.createElement("td");
    let tagButtonEditar = document.createElement("button");
    let tagButtonApagar = document.createElement("button");

    tagButtonEditar.innerText = "Editar";
    tagButtonApagar.innerText = "Apagar";
    tagTdId.innerText = "ID";
    tagTdNome.innerText = "Nome";

    tagButtonEditar.onclick = editar;
    tagButtonApagar.onclick = apagar;

    tagTdAcao.appendChild(tagButtonEditar);
    tagTdAcao.appendChild(tagButtonApagar);
    tagTr.appendChild(tagTdId);
    tagTr.appendChild(tagTdNome);
    tagTr.appendChild(tagTdEstado);
    tagTr.appendChild(tagTdAcao);

    let tbody = document.querySelector("tbody");
    tbody.appendChild(tagTr);
}

function editar(element){
    let botaoDoClick = element.target;
    let tr = botaoDoClick.parentNode.parentNode;
    let colunaId = tr.querySelector("td");
    idAlterar = parseInt(colunaId.innerText)
}

function keyUp(event) {
    verificarValorCampo();

    if (event.key === "Enter") {
        cadastrar();
    }
}

function verificarValorCampo() {
    let tagInput = document.getElementById("nome");
    let tagEstado = document.getElementById("estado");
    let valor = tagInput.value;
    if (valor.length === 0 || tagEstado.value == "Empty") {
        ocultarBotao();
    } else {
        mostrarBotao();
    }
}

function ocultarBotao() {
    let tagButton = document.getElementById("cadastrarBotao");
    tagButton.style.visibility = "hidden";
}

function mostrarBotao() {
    let tagButton = document.getElementById("cadastrarBotao");
    tagButton.style.visibility = "visible";
}

