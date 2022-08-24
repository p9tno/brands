// ФОРМА
function submitForm() {
    let modal = $('#infoModal');
    let message = modal.find('.infoModal__message');
    // при закрытии окна, чистим контент
    modal.on('hidden.bs.modal', function (e) {
    message.html('');
});
    // проверка клавиши enter
    $("[type=submit]").keyup(function(event){
        if(event.keyCode == 13){
            $(this).click();
        }
    });

    $('[type=submit]').on('click tab', function (e) {
        //отменяем стандартную обработку нажатия и табу по кнопке запрет на отправку
        e.preventDefault();

        // записуем объект относящийся к ЭТОЙ кнопке
        let form = $(this).closest('.form');

        // Поиск потомков внутри каждого элемента в текущем наборе ОБЯЗАТЕЛЬНЫЕ ПОЛЯ!!!
        let fields = form.find('[required]');

        // Записываем значение атрибута формы action
        let url = form.attr('action');

        // Записываем значения полей форм. Обязателен атрибут name у полей с уникальным значением
        let formData = form.serialize();

        // проверка спама
        let notspam = form.find('[name="notspam"]');
        notspam.val('Not spam');

        // для счетчика (колличесто не заполненых полей)
        let empty = 0;

        // выполняет функцию для каждого элемента. each - Итерация над объектом JQuery, выполняет функцию для каждого элемента(циклические операции над DOM-элементами)
        fields.each(function (index, el) {
        if ($(this).val() === '') {
            $(this).focus()
            empty++;
        }
        });


        if (empty === 0) {
            // отправляем форму
            // $('.form').submit();
            $.ajax({
                url:url,
                type: "POST",
                dataType: "html",
                data: formData,
                success: function (responce) {
                    console.log('success');
                    console.log(formData);
                    document.location.href = "/success/";
                    },

                    error: function (responce) {
                        console.log('error');
                        modal.modal('show');
                        message.html('Произошла ошибка при отправке. <br> Попробуйте отправить форму позже.');
                        }
                    })

                }
            });
}
submitForm();

$('#check_checked').on('change', function () {
    if ( $('#check_checked').prop('checked') ) {
        $('#btn_didisabled_js').attr('disabled', false);
    } else {
        $('#btn_didisabled_js').attr('disabled', true);
    }
});
