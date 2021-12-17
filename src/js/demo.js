
const addTarefa = document.querySelector('.add-tarefa')
let newTarefa = document.querySelector('#tarefa')
const box = document.querySelector('.box-list');


addTarefa.addEventListener('click', function () {
    if (newTarefa.value === "") {
        aviso()
    }
    else criarTarefa();
})






function criarTarefa() {
    const ul = document.querySelector('.ul')
    const li = document.createElement("li");
    li.classList = 'li'
    li.innerHTML = newTarefa.value;
    li.appendChild(criarButton())
    ul.appendChild(li);
    newTarefa.value = ''
}


function criarButton() {
    const button = document.createElement("button");
    button.id = "delete";
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