
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
    idN ++
    li.id = `li${(idN)}`;
    li.innerHTML = newTarefa.value;
    li.appendChild(criarButton())
    ul.appendChild(li);
    
    newTarefa.value = ''
}


function criarButton() {
    const button = document.createElement("button");
    button.id =  `delete${(idN)}`;
    button.textContent = "Excluir";
    button.onclick = deletar;
    return button;
}

console.log(criarButton());



function aviso() {

    const p = document.createElement('p');
    p.classList = 'aviso'
    p.innerHTML = 'digite'
    newTarefa.focus()
    box.appendChild(p)

}





function deletar() {
   console.log('clicou');
}