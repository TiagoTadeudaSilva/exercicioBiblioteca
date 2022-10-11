


const listaLivros = [];
const livrosSelecionados = [];
const tbodyLivrosElement = document.getElementById("tbody-livros");
const tbodyLivrosElement2 = document.getElementById("tbody-livros2");

class Livro {
    constructor(nome, autor, edicao){
        this.nome = nome;
        this.autor = autor;
        this.edicao = edicao;
        this.id = listaLivros.length + 1;
    }
}


function cadastrar (){
    var nomeLivro = document.getElementById("livro");
    var nomeAutor = document.getElementById("autor");
    var numeroEdicao = document.getElementById("edicao");
    var novoLivro = new Livro (nomeLivro.value,nomeAutor.value, numeroEdicao.value);
    listaLivros.push(novoLivro);
    mostrar();
}



function mostrar(){
    tbodyLivrosElement.innerHTML = "";
    listaLivros.forEach((livro) => {
        const tr = document.createElement("tr");
        tr.innerHTML= `
        <td> <button type="button" onclick="selecionar(${livro.id})" > Selecionar </button> ${livro.nome}</td>
        <td> ${livro.autor}</td>
        <td> ${livro.edicao}</td>`
        tbodyLivrosElement.appendChild(tr);
    }
     )
}


function selecionar (identificador){
        livrosSelecionados.push(identificador);
      
}



function mostrarSelecionados () {
    for(let i = 0; i < listaLivros.length; i++){
        var livro = listaLivros[i];

        livrosSelecionados.find((pegarId2) => {
            if(pegarId2 === livro.id){
                tbodyLivrosElement2.innerHTML = "";
                const tr = document.createElement("tr");
                tr.innerHTML= `
                <td> ${livro.nome}</td>
                <td> ${livro.autor}</td>
                <td> ${livro.edicao}</td>`
                tbodyLivrosElement2.appendChild(tr);
            }else {
                return
            }
         })
    }

     
        
}