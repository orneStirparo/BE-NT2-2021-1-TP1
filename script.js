const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let contadorTareas = 3
  let contadorTareasPorHacer = 3

  itemCountSpan.innerHTML = contadorTareas
  uncheckedCountSpan.innerHTML = contadorTareasPorHacer


  function addTodo() {
    // alert('Boton Add TODO clickeado!')
    let todo = prompt('Please, add the task!')

    if (todo){
      itemCountSpan.innerHTML = ++contadorTareas
      uncheckedCountSpan.innerHTML = ++contadorTareasPorHacer
    }
  }