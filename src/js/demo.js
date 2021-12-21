

const addTarefa = document.querySelector('.add-tarefa')
let newTarefa = document.querySelector('#tarefa')
const box = document.querySelector('.box-list');
// const inputbox = document.querySelector('.box-new-tarefa')


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
  
    li.insertBefore(criarCheckBox(), li.firstChild);
    ul.appendChild(li);
    newTarefa.value = ''
    li.addEventListener("mouseover", function () {
     alert('olá')
      
    })
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
    checkBox.id = 'check';
    checkBox.onclick = aparecer;
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

function aparecer() {
    const chk = document.querySelector("#check");
    const lis = document.querySelector('li');
   
    if (chk.checked) {
        lis.classList.add('concluido');
        
    } else lis.classList.remove('concluido');
   
}