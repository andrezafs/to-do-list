

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
    li.appendChild(criarButton());
    ul.appendChild(li);
    newTarefa.value = ''

    return li
}

function criarButton() {
    const button = document.createElement("button");
    button.id = `delete${(idN)}`;
    button.classList = 'delete';
    button.onclick = deletar;
    button.style.backgroundImage = "url('https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png')";
    return button;
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
  
