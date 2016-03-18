(function($) {

    $(document).ready(function() {

        $('.form-input input').each(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-input input').focus(function() {
            $(this).parent().find('span').css({'display': 'none'});
        });

        $('.form-input input').blur(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-checkbox input:checked').parent().addClass('checked');
        $('.form-checkbox span').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
        });

        $('form').validate({
            ignore: '',
            invalidHandler: function(form, validatorcalc) {
                validatorcalc.showErrors();
                var errors = validatorcalc.numberOfInvalids();
                if (errors) {
                    $('.text-error').addClass('visible');
                } else {
                    $('.text-error').removeClass('visible');
                }

                $('.form-checkbox').each(function() {
                    var curField = $(this);
                    if (curField.find('input.error').length > 0) {
                        $('.text-error').addClass('visible');
                        curField.addClass('error');
                    } else {
                        $('.text-error').removeClass('visible');
                        curField.removeClass('error');
                    }
                });
            },
            submitHandler: function(form) {
                $('.text-error').removeClass('visible');
                $('.overlay').show();
                $('.window').show();
            }
        });

        $('.overlay').click(function() {
            $('.window').hide();
            $('.overlay').hide();
        });

        $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                $('.window').hide();
                $('.overlay').hide();
            }
        });

        $('.window-close, .window-link a').click(function(e) {
            $('.window').hide();
            $('.overlay').hide();
            e.preventDefault();
        });

    });

})(jQuery);