
        function validar(){
            var login = document.getElementById("login");
            var senha = document.getElementById("senha");
            var confSenha = document.getElementById("confSenha");

            if (login.value == "") {
                alert("O campo de login está vazio");
                login.Id.focus();
            } else if(senha.value.length<=8 && confSenha.value.length<=8 && senha.value != "" && confSenha.value !=""){
                if (senha.value == confSenha.value) {
                    alert("Informações confirmadas, login bem sucedido!")
                } else{
                    alert("As senhas não são iguais, tente novamente!")
                }
            } else{
                alert("As senhas não se encontram no formato correto, ou estão vazias. Tente novamente!")
            }
        }
  
