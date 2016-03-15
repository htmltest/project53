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
            ignore: ''
        });

    });

})(jQuery);