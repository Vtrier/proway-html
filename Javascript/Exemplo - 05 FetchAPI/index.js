let botaoSalvar = document.getElementById("salvar");
let botaoCarregarCategoria = document.getElementById("carregar-categorias");

botaoSalvar.onclick = salvar;
botaoCarregarCategoria.addEventListener("click", carregarCategorias);

function carregarCategorias() {
    let configuracaoRequest = {
        "headers": {
            "Content-Type": "application/json",
        },
        "method": "GET"
    }
    fetch('http://127.0.0.1:3000/categorias', configuracaoRequest)
        .then(response => response.json())
        .then(dados => {
            popularTabela(dados);
        })
        .catch(error => {
            alert("Não foi possível consultar as categorias");
            console.error(error);
        })
}

function popularTabela(categorias) {
    let tbody = document.querySelector("tbody");

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i];

        let linha = document.createElement("tr");

        let colunaId = document.createElement("td");
        colunaId.innerText = categoria.id;
        linha.appendChild(colunaId);

        let colunaNome = document.createElement("td");
        colunaNome.innerText = categoria.nome;
        linha.appendChild(colunaNome);

        let colunaAcao = document.createElement("td");
        let botaoEditar = document.createElement("button");
        botaoEditar.innerText = "Editar";
        botaoEditar.setAttribute("data-id", categoria.id);
        botaoEditar.setAttribute("type", "button");
        colunaAcao.appendChild(botaoEditar);

        let botaoApagar = document.createElement("button");
        botaoApagar.innerText = "Apagar";
        botaoApagar.onclick = apagar;
        botaoApagar.setAttribute("data-id", categoria.id);
        botaoApagar.setAttribute("type", "button");
        colunaAcao.appendChild(botaoApagar);

        linha.appendChild(colunaAcao);

        tbody.appendChild(linha);
    }
}

function apagar(event){
    let botao = event.target;
    let id = botao.getAttribute("data-id");
    let configuracaoRequest = {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    }
    fetch(`http://127.0.0.1:3000/categorias/delete/${id}`, configuracaoRequest)
    .then(response => response)
    .then(() => {
        alert("Categoria apagada com sucesso");
        let linha = botao.parentNode.parentNode;
        let tbody = document.querySelector("tbody");
        tbody.removeChild(linha);
    })
    .catch(error => {
        alert("Não foi possível consultar as categorias");
        console.error(error);
    })
}

function salvar() {
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value;
    if (nome.length === 0) {
        alert("Nome deve ser preenchido")
        return;
    }

    let dadoQueSeraEnviado = {
        "nome": nome
    }

    let dadoQueSeraEnviadoJSON = JSON.stringify(dadoQueSeraEnviado);
    let configuracaoRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: dadoQueSeraEnviadoJSON
    }
    fetch('http://127.0.0.1:3000/categorias', configuracaoRequest)
        .then((response) => response.json())
        .then(() => {
            alert("Categoria cadastrada com sucesso");
        })
        .catch((error) => {
            console.error(error);
            alert("Ocorreu um erro");
        })
}