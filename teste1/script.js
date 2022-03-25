// Variaéis do programa
let objPessoa;
let arrayPessoas = [];
let cadastra; 
let resposta;

//criando pessoas para iniciar e testa o array.
objPessoa = new Pessoa("Bruno", 37, "casado");
arrayPessoas.push(objPessoa);
objPessoa = new Pessoa("Tiago", 37, "casado");
arrayPessoas.push(objPessoa);

// Iteragindo com o Usuário
    iteraUsuario();

// Funções do Programa
function iteraUsuario(){

resposta = prompt("O que deseja fazer: \n                     Digite 1 para Cadastra.\n                     Digite 2 para Verificar.\n                     Digite 3 para Imprimir.");
    
    if (resposta==1) {
        inserirPessoaArray();
    } else if (resposta==2) {
        let nome;
        nome =prompt("qual nome deseja verificar")
        verificaPessoa(nome);
    } else if (resposta==3) {
        o=imprimeArrayPessoas();
        
    } else {
        alert("**** Fim ******")
    }
}

function inserirPessoaArray(){

    nome = prompt("Qual é o seu nome");
    let validado = validaPessoa(nome);

    if(validado){
    idade= prompt("sua idade")
    estado_civil=prompt("e seu estado civil")

    objPessoa = new Pessoa(nome,idade,estado_civil)
    arrayPessoas.push(objPessoa);

    alert("Cadastra do com susseso!!")
    iteraUsuario();

    }else
    iteraUsuario();

}

function validaPessoa(nome){
    for (let i = 0; i < arrayPessoas.length; i++) {
        result =nome==arrayPessoas[i].nome
        if(result){
            alert("nome cadastrado")
            return false;
        }
    }
    return true;   
}

function verificaPessoa(nome){
    let result = arrayPessoas.find(element => element.nome==nome)
    if(result==undefined){
        alert("Pessoa não Cadastrada")
        iteraUsuario();


    }
    alert(`O ${result.nome} tem ${result.idade} e está ${result.estado_civil}.`)
    iteraUsuario();

}

function imprimeArrayPessoas(){

    var myJSON = JSON.stringify(arrayPessoas);
    alert(myJSON)
    

 iteraUsuario()
  
  

}



