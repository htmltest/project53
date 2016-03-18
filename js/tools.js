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
            submitHandler: function(form) {
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