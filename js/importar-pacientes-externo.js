var botaoImportar = document.querySelector('#importar-pacientes');

botaoImportar.addEventListener('click', function(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', function(){
    var erroAjax = document.querySelector('#erro-ajax');
    if (xhr.status == 200){
      erroAjax.classList.add('invisivel');
      var resposta = this.responseText;
      var pacientes = JSON.parse(resposta);

      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        adicionaPacienteNaTabela(paciente);
      }
    }else{
      erroAjax.classList.remove('invisivel');
    }
  });
  xhr.send();
});
