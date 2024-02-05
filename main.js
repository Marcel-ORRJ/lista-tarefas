$(document).ready(function() {
    const tarefas = []

    $('form').on('submit', function(e) {
        e.preventDefault()

        const inputTarefa = $('#nome-tarefa').val()
        tarefas.push(inputTarefa)
        console.log(tarefas)

        const novaTarefa = $('<li></li>')
        $(`<a href="#">${inputTarefa}</a>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
        $('#nome-tarefa').val('')
    })

    $('form').on('keyup', 'input', function() {
        const inputTarefa = $('#nome-tarefa').val()
        
        if(tarefas.includes(inputTarefa)) {
            $('input').css('border-bottom', '3px solid red')
            $('input').css('outlineColor', 'red')
            $('#btn-inserir').prop('disabled', true)
            $('#btn-inserir').css('color', 'red')
            $('#btn-inserir').css('border-bottom', '3px solid red')
        } else {
            $('input').css('border-bottom', '')
            $('input').css('outlineColor', '')
            $('#btn-inserir').prop('disabled', false)
            $('#btn-inserir').css('color', '')
            $('#btn-inserir').css('border-bottom', '')
        }
    })

    $('ul').on('click', 'a', function() {
        $(this).addClass('clicked')
    })
})