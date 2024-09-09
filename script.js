document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Lógica para o login ou registro
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        console.log('Login:', username, password);

        // Para registro, adicione lógica semelhante
        const firstname = document.querySelector('input[name="firstname"]').value;
        const reg_username = document.querySelector('input[name="reg_username"]').value;
        const reg_password = document.querySelector('input[name="reg_password"]').value;

        console.log('Registro:', firstname, reg_username, reg_password);
    });
});