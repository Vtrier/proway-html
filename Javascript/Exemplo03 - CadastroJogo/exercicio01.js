let tagSpanEditar = null;

function cadastrar() {
    let tagInputNome = document.querySelector("#nome");
    let tagInputNota1 = document.querySelector("#nota1");
    let tagInputNota2 = document.querySelector("#nota2");
    let tagInputNota3 = document.querySelector("#nota3");

    let nomeValor = tagInputNome.value;
    let nota1Valor = parseFloat(tagInputNota1.value);
    let nota2Valor = parseFloat(tagInputNota2.value);
    let nota3Valor = parseFloat(tagInputNota3.value);
    let media = parseFloat((nota1Valor+nota2Valor+nota3Valor)/3).toFixed(2);

    tagInputNome.value = "";
    tagInputNota1.value = "";
    tagInputNota2.value = "";
    tagInputNota3.value = "";

    if (tagSpanEditar === null) {
        criarAluno(nomeValor, nota1Valor, nota2Valor, nota3Valor, media);
    } else {
        editarAluno(nomeValor, nota1Valor, nota2Valor, nota3Valor, media);
    }
    
    tagInputNome.focus;
}

function criarAluno(nome, nota1, nota2, nota3, media) {
    let tagLi = document.createElement("li");
    let tagSpan = document.createElement("span");

    tagSpan.innerHTML = `${nome} | ${nota1}, ${nota2}, ${nota3} | ${media}`;
    tagLi.appendChild(tagSpan);

    let tagBotaoEditar = document.createElement("button");
    tagBotaoEditar.innerHTML = "Editar";
    tagBotaoEditar.onclick = editar;
    tagLi.appendChild(tagBotaoEditar);

    let tagBotaoApagar = document.createElement("button");
    tagBotaoApagar.innerHTML = "Apagar";
    tagBotaoApagar.onclick = apagar;
    tagLi.appendChild(tagBotaoApagar);

    let tagUl = document.querySelector("ul");
    tagUl.appendChild(tagLi);
}

function editarAluno(nome, nota1, nota2, nota3, media) {
    tagSpanEditar.innerHTML = `${nome} | ${nota1}, ${nota2}, ${nota3} | ${media}`;
    tagSpanEditar = null;
    alert("Cadastro alterado com sucesso");
}

function editar(element) {
    let tagBotaoEditardoClick = element.target;
    let tagLi = tagBotaoEditardoClick.parentNode;
    tagSpanEditar = tagLi.querySelector("span");
    let textoSpan = tagSpanEditar.innerHTML;
    let partes = textoSpan.split(" | ");
    let partesNotas = partes[1].split(", ");
    let nomeValor = partes[0];
    let nota1Valor = partesNotas[0];
    let nota2Valor = partesNotas[1];
    let nota3Valor = partesNotas[2];

    let tagInputNome = document.querySelector("#nome");
    tagInputNome.value = nomeValor;
    let tagInputNota1 = document.querySelector("#nota1");
    tagInputNota1.value = nota1Valor;
    let tagInputNota2 = document.querySelector("#nota2");
    tagInputNota2.value = nota2Valor;
    let tagInputNota3 = document.querySelector("#nota3");
    tagInputNota3.value = nota3Valor;
}

function apagar(element) {
    let desejaApagar = confirm("Deseja realmente apagar?");
    if (desejaApagar === true) {
        let tagBotaoApagarDoClick = element.target;
        let tagLi = tagBotaoApagarDoClick.parentNode;
        let tagUl = document.querySelector("ul");
        tagUl.removeChild(tagLi);
        alert("Cadastro apagado com sucesso");
    }
}