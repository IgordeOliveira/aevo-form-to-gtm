document.addEventListener("DOMContentLoaded", function() {
  // ID DO CAMPO "NUMERO DE FUNCIONARIOS"
    const NUMBER_EMPLOYEES_FIELD = 111153;

    const form = document.querySelector('form[action^="https://www.rdstation.com.br/api/"]');
    form.addEventListener('submit', (event) => {

        const formData = Object.fromEntries(new FormData(form).entries());
        const numberOfEmployees = formData[`custom_fields[${NUMBER_EMPLOYEES_FIELD}]`];

        if(numberOfEmployees === ""){
            return;
        }

        if(!window.dataLayer){
            console.error('GTM DATALAYER GTM NÃO EXISTE NA PÁGINA');
        }

        window.dataLayer.push({
            'event': 'form-confirmation',
            '100+_funcionarios': ['Mais de 1000', 'De 501 a 1000', 'De 201 a 500', 'De 101 a 200'].includes(numberOfEmployees);
        })
    })
});

