
const addTarefa = document.querySelector('.add-tarefa')
let newTarefa = document.querySelector('#tarefa')
addTarefa.addEventListener('click', function () {
    if (newTarefa.value === "") {
        aviso()
        
        
    }
    else criar();


})






function criar() {
    const ul = document.querySelector('.ul')
    const li= document.createElement("li");
    li.classList = 'li'
 
    ul.appendChild(li);

    li.innerHTML = newTarefa.value;
    li.appendChild(criarButton())
    

    newTarefa.value = ''
}




function aviso() {
    const box = document.querySelector('.box-list')
    const p = document.createElement('p');
    p.classList = 'aviso'
    p.innerHTML = 'digite'
    newTarefa.focus()
    box.appendChild(p)
    
}



function criarButton() {
    const button = document.createElement("button");
    button.id = "delete";
    button.textContent = "Excluir";
  
    return button;
  }
 
  console.log(criarButton());





function deletar() {
   return criarButton().onclick = function() {
        alert('test');  
    };
}