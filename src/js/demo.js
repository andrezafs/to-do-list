
const addTarefa = document.querySelector('.add-tarefa')
let newTarefa = document.querySelector('#tarefa')
const box = document.querySelector('.box-list');


addTarefa.addEventListener('click', function () {
    if (newTarefa.value === "") {
        aviso()
    }
    else criarTarefa();
})




let idN = 0;
function criarTarefa() {
    const ul = document.querySelector('.ul')
    const li = document.createElement("li");
    idN++
    li.id = `li${(idN)}`;
    li.innerHTML = newTarefa.value;
   
    li.appendChild(criarButonsTarefa())
    ul.appendChild(li);
    newTarefa.value = ''
    return li
}

function criarButton() {
    const button = document.createElement("button");
    button.id = `delete${(idN)}`;
    button.classList = 'delete'
    button.textContent = "-";
    button.onclick = deletar;
    return button;
}

function criarCheckBox() {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    

    return checkBox;
}

function aviso() {

    const p = document.createElement('p');
    p.classList = 'aviso'
    p.innerHTML = 'digite'
    newTarefa.focus()
    box.appendChild(p)

}

function deletar() {
    var tarefa = document.querySelector('li');
    return tarefa.parentNode.removeChild(tarefa);

}

function criarButonsTarefa() {
    const divBtnTarefas = document.createElement('div'); 
    divBtnTarefas.classList = 'btn-tarefas'
    divBtnTarefas.appendChild(criarButton())
    divBtnTarefas.appendChild(criarCheckBox())

    return divBtnTarefas;
}
