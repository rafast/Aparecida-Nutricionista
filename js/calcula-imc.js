var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  var peso = paciente.querySelector('.info-peso').textContent;
  var altura = paciente.querySelector('.info-altura').textContent;
  var tdImc = paciente.querySelector('.info-imc');

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){
    console.log('Peso invalido');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add('paciente-invalido');
  }

  if(!alturaEhValida){
    console.log('Altura inválida');
    alturaEhValida = false;
    tdImc.textContent = 'Altura invalida';
    paciente.classList.add('paciente-invalido');
  }

  if (pesoEhValido && alturaEhValida){
    paciente.querySelector('.info-imc').textContent = calculaIMC(peso, altura);
  }
}

titulo.addEventListener('click', function(){
  console.log('Olá eu fui clicado!! hahaha');
});

function mostraMensagem(){
  alert('Olá, eu fui clicado!!!');
}

function calculaIMC(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso >=1 && peso <= 300){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if ( altura >= 0.2 && altura <= 2.50){
    return true;
  }else{
    return false;
  }
}
