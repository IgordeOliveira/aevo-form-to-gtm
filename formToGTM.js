'use strict';
var formAttached = false;
var formToGtmSearch = setInterval(function () {
    var form = document.querySelector('form[action^="https://www.rdstation.com.br/api/"]');
    if (form && !formAttached) {
        clearInterval(formToGtmSearch);
        formAttached = true
        console.log("FormToGTM attached to form");
        // ID DO CAMPO "NUMERO DE FUNCIONARIOS"
        var NUMBER_EMPLOYEES_FIELD = 111153;

        form.addEventListener('submit', function (event) {

            var formData = Object.fromEntries(new FormData(form).entries());
            var numberOfEmployees = formData['custom_fields[' + NUMBER_EMPLOYEES_FIELD + ']'];

            if (numberOfEmployees === "") {
                return;
            }

            if (!window.dataLayer) {
                console.error('GTM DATALAYER GTM NÃO EXISTE NA PÁGINA');
            }

            window.dataLayer.push({
                'event': 'form-confirmation',
                '100+_funcionarios': ['Mais de 1000', 'De 501 a 1000', 'De 201 a 500', 'De 101 a 200'].includes(numberOfEmployees),
                'qnt_funcionarios': numberOfEmployees
            });
        });
    }
}, 500);
