


/* função para validação de campos com mensagens */



validateState = false;

/* Required messagem */
validateRequiredMsg = "Campo de preechimento obrigat&oacute;rio";
/* E-mail messagem */
validateMailMsg = "E-mail informado &eacute; inv&aacute;lido";
/* Numerico messagem */
validateNumericMsg = "O valor deve ser num&eacute;rico";
/* Minimo messagem */
validateMinMsg = "A quantidade m&iacute;nima de caracters &eacute;: ";
/* Maximo messagem */
validateMaxMsg = "A quantidade m&aacute;xima de caracters &eacute;: ";
/* Senha messagem */
validatePasswordMsg = "Senhas n&atilde;o conferem";


function validate(form_id)
{
    /* função para preenchimento do campo */
    $('#'+form_id+' :input').each(function(){
        /* required */
        if ( $(this).hasClass('required') && $.trim( $(this).val() ) == ""){
            $(this).addClass('invalid');
            $(this).focus();
            $('#validate_message').html(validateRequiredMsg);
            validateState = false;
            return false;
        }
        else{
            $(this).removeClass('invalid');
            validateState = true;
        }

        /* numerico value */
        if ( $(this).hasClass('required') && $(this).hasClass('numeric') ){
            var nan = new RegExp(/(^-?\d*\.\d*$)|(^-?\d*$)|(^-?\.\d*$)/);
            if (!nan.test($.trim( $(this).val() ))){
                $(this).addClass('invalid');
                $(this).focus();
                $('#validate_message').html(validateNumericMsg);
                validateState = false;
                return false;
            }
            else{
                $('#validate_message').html('');
                $(this).removeClass('invalid');
                validateState = true;
            }
        }

        /*função do  e-mail */
        if ( $(this).hasClass('email') ){
            var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
            if (!er.test($.trim( $(this).val() ))){
                $(this).addClass('invalid');
                $(this).focus();
                $('#validate_message').html(validateMailMsg);
                validateState = false;
                return false;
            }
            else{
                $(this).removeClass('invalid');
                validateState = true;
            }
        }

        /* minimo de caracteres value */
        if ( $(this).attr('min') && $(this).hasClass('required') ){
            if($.trim($(this).val()).length < $(this).attr('min') ){
                $(this).addClass('invalid');
                $(this).focus();
                $('#validate_message').html(validateMinMsg + $(this).attr('min'));
                validateState = false;
                return false;
            }
            else{
                $('#validate_message').html('');
                $(this).removeClass('invalid');
                validateState = true;
            }
        }

        /* maximo de caracteres value */
        if ( $(this).attr('max')  && $(this).hasClass('required') ){
            if($.trim($(this).val()).length > $(this).attr('max') ){
                $(this).addClass('invalid');
                $(this).focus();
                $('#validate_message').html(validateMaxMsg + $(this).attr('max'));
                validateState = false;
                return false;
            }
            else{
                $('#validate_message').html('');
                $(this).removeClass('invalid');
                validateState = true;
            }
        }
        /* função para a senha */
        if ( $(this).hasClass('password') && $(this).nextAll('.password').hasClass('password')){
            if ($.trim( $(this).val() ) != $.trim( $(this).nextAll('.password').val() )){
                $(this).nextAll('.password').addClass('invalid');
                $(this).nextAll('.password').focus();
                $('#validate_message').html(validatePasswordMsg);
                validateState = false;
                return false;
            }
            else{
                $('#validate_message').html('');
                $(this).nextAll('.password').removeClass('invalid');
                validateState = true;
            }
        }
    })
}

