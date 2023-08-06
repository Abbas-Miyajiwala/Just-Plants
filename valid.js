$(function(){
    $('#register').validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            password:true

        }
    })
})