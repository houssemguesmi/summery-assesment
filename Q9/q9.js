$(document).ready(function() {
    $('#create').click(function() {
        if($("#c1").prop('checked') && $("#c2").prop('checked') && $("#c3").prop('checked')){
            $('#list').append('<li class="black">Black</li>')
        }else if($("#c1").prop('checked') && $("#c2").prop('checked')  ||  $("#c1").prop('checked') && $("#c3").prop('checked') || $("#c2").prop('checked') && $("#c3").prop('checked') ){
            $('#list').append('<li class="purple">Purple = Red + Blue</li>')
            $('#list').append('<li class="green">Green = Blue + Yellow</li>')
            $('#list').append('<li class="orange">Orange = Red + Yellow</li>')
        }else if($("#c1").prop('checked') || $("#c2").prop('checked') || $("#c3").prop('checked')){
            $('#list').append('<li class="red">Red</li>')
        }
    })
    $('#delete').click(function() {
        $('#list').remove()
        $('body').prepend('<ul id="list"></ul>')
    })
})
