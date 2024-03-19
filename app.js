$(document).ready(function(){
    $('.add').click(function(){

        
        $('.field').append('<div><input> <a href="#" class="remove_field">remove_field</a></div>')

      
    })
});

$('.field').on("click", ".remove_field", function(){
    $(this).parent('div').remove()
})



