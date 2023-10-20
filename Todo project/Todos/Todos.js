const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let todos = users.find(user => user.name === currentUser).todos

function updateSite() {
    $('.todos').html('')

    for (let todo of todos) {
        $('.todos').html($('.todos').html() + `<div class="todo">
    <div class="todo-content">
        <h2>${todo.title}</h2>
        <p>
           ${todo.text}
        </p>
    </div>
    <div class="options">
        <button id="${todo.id}D" class="delete btn btn-danger">Delete</button>
        <button id="${todo.id}E" class="btn btn-success">Edit</button>
    </div>
</div>`)
    }
};

updateSite()

$('#addTodo').click(function () {
    $('.my-modal').addClass('active')
})

$('#close').click(function () {
    $('.my-modal').removeClass('active')
})



$('#save-todo').click(function () {
    let addTodo = {
        id: Date.now(),
        title: $('input').val(),
        text: $('textarea').val()
    }

    $('input').val('')
    $('textarea').val('')

    todos.push(addTodo)

    users.find(user => user.name === currentUser).todos = todos

    localStorage.setItem('users', JSON.stringify(users))
    updateSite()
    $('.my-modal').removeClass('active')
})


let id

$('.todos').click(function (e) {
    if (e.target.innerHTML === 'Delete') {
        id = e.target.id
        todos = todos.filter(todo => todo.id + 'D' !== id)

        console.log(todos)

        users.find(user => user.name === currentUser).todos = todos

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
    } 
})






