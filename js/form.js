var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
  event.preventDefault();

var form = document.querySelector('#form-adiciona');

var paciente = obtemPacienteDoFormulario(form);

var erros = validaPaciente(paciente);

if (erros.length > 0){
  exibeMensagensDeErro(erros);
  return;
}

adicionaPacienteNaTabela(paciente);

form.reset();
var menesangesErro = document.querySelector('#mensagens-erro');
menesangesErro.innerHTML = "";

});


function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTd(dado, classe){
  var td = document.createElement('td');
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function montaTr(paciente){
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');
  pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

  return pacienteTr;
}

function validaPaciente(paciente){
  var erros = [];
  if (!validaPeso(paciente.peso)) erros.push('Peso inválido! Favor insira uma peso entre 1 e 500');
  if (!validaAltura(paciente.altura)) erros.push('Altura inválida! Favor insira uma altura entre 0.40 a 2.70');
  if (paciente.nome.length == 0) erros.push('O campo nome não pode ficar em branco');
  if (paciente.gordura.length ==0) erros.push('O campo gordura não pode ficar em branco');
  if (paciente.peso.length ==0) erros.push('O campo peso não pode ficar em branco');
  if (paciente.altura.length ==0) erros.push('O campo altura não pode ficar em branco');

  return erros;
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = ""
  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
