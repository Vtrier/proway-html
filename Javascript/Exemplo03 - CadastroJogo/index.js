let tagSpanEditar = null;

function salvar() {
    // Selecionar elemento por id do input do nome do jogo
    let tagInputJogo = document.querySelector("#jogo");
    let tagInputMetacritic = document.querySelector("#metacritic");

    // Obter o valor do input do nome do jogo, digitado por usuário 
    let jogoNome = tagInputJogo.value;
    let jogoMetacritic = parseInt(tagInputMetacritic.value);

    // Limpar campos
    tagInputJogo.value = "";
    tagInputMetacritic.value = "";

    // Verificar se é o modo de cadastro
    if (tagSpanEditar === null) {
        // Chamar a função que criará a li, span e botões
        // Passando como parâmetro o nome do jogo e a nota do metacritic
        criarElementosJogo(jogoNome, jogoMetacritic);
    } else{
        editarJogo(jogoNome, jogoMetacritic);
    }

    // Colocar o foco no campo do nome do jogo
    tagInputJogo.focus();
}

function editarJogo(nome, metacritic){
    tagSpanEditar.innerHTML = `${nome} = > ${metacritic}`;
    // Atribui null para a tagSpanEditar para que seja possível cadastrar depois de editar
    tagSpanEditar = null;
    alert("Jogo alterado com sucesso");
}

function criarElementosJogo(jogoNome, jogoMetacritic) {
    // Criando um elemento li
    let tagLi = document.createElement("li");

    //Criando o elemento span, para apresentar o texto do que foi cadastrado
    let tagSpan = document.createElement("span");
    // Definindo o conteúdo do span
    tagSpan.innerHTML = `${jogoNome} => ${jogoMetacritic}`;
    // Adicionar a tag span como tag filha do li
    tagLi.appendChild(tagSpan)

    //Criar o elemento button para o botão de editar
    let tagButtonEditar = document.createElement("button")
    //Definir o texto editar
    tagButtonEditar.innerHTML = "Editar";
    //Definir o click do botão editar
    tagButtonEditar.onclick = editar;
    //Adicionar a tag button como tag filha do li
    tagLi.appendChild(tagButtonEditar)

    //Criar o elemento button para o botão de apagar
    let tagButtonApagar = document.createElement("button")
    //Definir o texto apagar
    tagButtonApagar.innerHTML = "Apagar";
    //Definir o click do botão apagar
    tagButtonApagar.onclick = apagar;
    //Adicionar a tag button como tag filha do li
    tagLi.appendChild(tagButtonApagar)

    // Selecionar a tag ul (lista não ordenada)
    let tagUl = document.querySelector("ul");
    // Adicionar o elemento li(criado por js) como elemento filho da ul
    tagUl.appendChild(tagLi);

}

function apagar(element) {
    // Confirmação que deseja realmente apagar, pois é uma ação perigosa
    let desejaApagar = confirm("Deseja realmente apagar?");
    // Caso escolheu que sim iremos apagar aquele jogo
    if (desejaApagar === true) {
        // Obter através do element o elemento que disparou o click, ou seja, o botão apagar, através do target
        let tagBotaoApagarDoClick = element.target;
        // Obter o elemento pai do botão de apagar, ou seja o elemento li
        let tagLi = tagBotaoApagarDoClick.parentNode;
        // Obter o elemento de ul, lista não ordenada
        let tagUl = document.querySelector("ul");
        // Remover o elemento li da lista
        tagUl.removeChild(tagLi);
        // Feedback de sucesso para o usuário
        alert("Jogo apagado com sucesso");
    }
}

function editar(element) {
    // Obter através do element o elemento que disparou o click, ou seja, o botão editar, através do target
    let tagBotaoEditardoClick = element.target;
    // Obter o elemento pai do botão de editar, ou seja, o elemento li
    let tagLi = tagBotaoEditardoClick.parentNode;
    // Obter o elemento span da li
    tagSpanEditar = tagLi.querySelector("span");
    // Obter o texto da tag span
    let textoSpan = tagSpanEditar.innerText;
    // Quebrar o texto em duas partes, ou seja, o split gerará um vetor com o seguinte ['Pacman , 20]
    let partes = textoSpan.split(" => ")
    // Obter o nome do jogo do vetor
    let jogoNome = partes[0];
    // Obter a nota do metacritic do vetor
    let jogoMetacritic = partes[1];
    // Obter a tag do input do nome do jogo
    let tagInputJogo = document.querySelector("#jogo");
    // Preencher o nome do jogo no valor do input, o que permitirá o usuário alterar o nome do jogo
    tagInputJogo.value = jogoNome;
    // Obter a tag do input da nota do metacritic do jogo
    let tagInputMetacritic = document.querySelector("#metacritic");
    // Preencher a nota do metacritic do jogo no valor do input, o que permitirá o usuário alterar caso desejar
    tagInputMetacritic.value = jogoMetacritic;
}