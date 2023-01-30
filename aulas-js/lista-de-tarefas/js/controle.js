let input = document.getElementById('inputTarefa'); //CRIA REFERÊNCIA AO ELEMENTO HTML DE ID ESPECIFICADO
let btnAdd = document.getElementById('btn-Add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa(){
    let valorInput = input.value; /*PEGA O VALOR DO ELEMENTO INPUT*/
    if((valorInput != '') && (valorInput != null) && (valorInput != undefined)){
        
        contador += 1;

        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone">
            <i id="icone_${contador}" onclick="marcarTarefa(${contador})" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-tarefa">
            ${valorInput}
        </div>
        <div class="item-delete">
            <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`

    main.innerHTML += novoItem;
    input.value = '';
    input.focus(); //ELEMENTO INPUT CHAMA A FUNÇÃO FOCUS()
    }
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');
    if(classe == "item"){
        item.classList.add('clicado');

        let icone = document.getElementById(`icone_${id}`);
        icone.classList.remove('mdi-circle-outline'); //REMOVE CLASSE
        icone.classList.add('mdi-check-circle'); //ADICIONA CLASSE

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
        
        let icone = document.getElementById(`icone_${id}`);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    } 
}

function deletar(id){
    let item = document.getElementById(id);
    item.remove();
}

//ELEMENTO INPUT RECEBE OUVINTE DE EVENTO KEYUP
input.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        btnAdd.click();
    }
})
