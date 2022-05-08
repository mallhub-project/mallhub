function validarSessao() {
  idUsuario = sessionStorage.ID_USUARIO
  nome = sessionStorage.NOME_USUARIO
  cpf = sessionStorage.CPF_USUARIO
  email = sessionStorage.EMAIL_USUARIO
  telefone = sessionStorage.TELEFONE_USUARIO
  cargo = sessionStorage.CARGO_USUARIO
  idShopping = sessionStorage.ID_SHOPPING
  nomeFantasia = sessionStorage.NOME_FANTASIA
  razaoSocial = sessionStorage.RAZAO_SOCIAL

  if (idUsuario == null && nome == null && cpf == null && email == null && telefone == null && cargo == null && idShopping == null && nomeFantasia == null && razaoSocial == null) {
    window.location = "login.html";
  }

  if (nomeFantasia != null) {
    nomeShopping.innerHTML = sessionStorage.NOME_FANTASIA
  } else {
    nomeShopping.innerHTML = sessionStorage.RAZAO_SOCIAL
  }
}

function Inicio() {
  divInicio.style.display = ''
  divDispositivos.style.display = 'none'
  divPerfil.style.display = 'none'
  divAcessos.style.display = 'none'

  inicioNavbar.style.backgroundColor = '#000'
  inicioNavbar.style.color = '#FFF'
  inicioNavbar.style.borderRadius = '20px'
  inicioIcon.style.filter = 'invert(100%)'

  dispositivoNavbar.style.backgroundColor = ''
  dispositivoNavbar.style.color = ''
  dispositivoNavbar.style.borderRadius = ''
  dispositivoIcon.style.filter = 'invert(0%)'

  perfilNavbar.style.backgroundColor = ''
  perfilNavbar.style.color = ''
  perfilNavbar.style.borderRadius = ''
  perfilIcon.style.filter = 'invert(0%)'

  acessosNavbar.style.backgroundColor = ''
  acessosNavbar.style.color = ''
  acessosNavbar.style.borderRadius = ''
  acessoIcon.style.filter = 'invert(0%)'
}

function trocarDispositivos() {
  if ((document.getElementById('filtroTodos').value) == 'dispositivos') {
    graficoTodosDispositivos.style.display = 'block'
    graficoTodosSetores.style.display = 'none'

    graficoPorDispositivos.style.display = 'block'
    graficoPorSetor.style.display = 'none'

  } else if ((document.getElementById('filtroTodos').value) == 'setores') {
    graficoTodosDispositivos.style.display = 'none'
    graficoTodosSetores.style.display = 'block'

    graficoPorDispositivos.style.display = 'none'
    graficoPorSetor.style.display = 'block'
  }
}

function Dispositivos() {
  divInicio.style.display = 'none'
  divDispositivos.style.display = ''
  divPerfil.style.display = 'none'
  divAcessos.style.display = 'none'

  inicioNavbar.style.backgroundColor = 'transparent'
  inicioNavbar.style.color = 'black'
  inicioNavbar.style.borderRadius = ''
  inicioIcon.style.filter = 'invert(0%)'

  dispositivoNavbar.style.backgroundColor = '#000'
  dispositivoNavbar.style.color = '#FFF'
  dispositivoNavbar.style.borderRadius = '20px'
  dispositivoIcon.style.filter = 'invert(100%)'

  perfilNavbar.style.backgroundColor = ''
  perfilNavbar.style.color = ''
  perfilNavbar.style.borderRadius = ''
  perfilIcon.style.filter = 'invert(0%)'

  acessosNavbar.style.backgroundColor = ''
  acessosNavbar.style.color = ''
  acessosNavbar.style.borderRadius = ''
  acessoIcon.style.filter = 'invert(0%)'
}

function Perfil() {
  divInicio.style.display = 'none'
  divDispositivos.style.display = 'none'
  divPerfil.style.display = ''
  divAcessos.style.display = 'none'

  inicioNavbar.style.backgroundColor = 'transparent'
  inicioNavbar.style.color = 'black'
  inicioNavbar.style.borderRadius = ''
  inicioIcon.style.filter = 'invert(0%)'

  dispositivoNavbar.style.backgroundColor = ''
  dispositivoNavbar.style.color = ''
  dispositivoNavbar.style.borderRadius = ''
  dispositivoIcon.style.filter = 'invert(0%)'

  perfilNavbar.style.backgroundColor = '#000'
  perfilNavbar.style.color = '#FFF'
  perfilNavbar.style.borderRadius = '20px'
  perfilIcon.style.filter = 'invert(100%)'

  acessosNavbar.style.backgroundColor = ''
  acessosNavbar.style.color = ''
  acessosNavbar.style.borderRadius = ''
  acessoIcon.style.filter = 'invert(0%)'

  //TRAZER DADOS DO USUARIO PARA AS INPUTS DO PERFIL
  cnpjPerfil.value = mascaraCnpj(sessionStorage.CNPJ)
  fantasyNamePerfil.value = sessionStorage.NOME_FANTASIA
  razaoSocialPerfil.value = sessionStorage.RAZAO_SOCIAL

  nomePerfil.value = sessionStorage.NOME_USUARIO
  cpfPerfil.value = mascaraCpf(sessionStorage.CPF_USUARIO)
  emailPerfil.value = sessionStorage.EMAIL_USUARIO
  telefonePerfil.value = sessionStorage.TELEFONE_USUARIO
  cargoPerfil.value = sessionStorage.CARGO_USUARIO
}

function Acessos() {
  divInicio.style.display = 'none'
  divDispositivos.style.display = 'none'
  divPerfil.style.display = 'none'
  divAcessos.style.display = ''

  inicioNavbar.style.backgroundColor = 'transparent'
  inicioNavbar.style.color = 'black'
  inicioNavbar.style.borderRadius = '0'
  inicioIcon.style.filter = 'invert(0%)'

  dispositivoNavbar.style.backgroundColor = ''
  dispositivoNavbar.style.color = ''
  dispositivoNavbar.style.borderRadius = ''
  dispositivoIcon.style.filter = 'invert(0%)'

  perfilNavbar.style.backgroundColor = ''
  perfilNavbar.style.color = ''
  perfilNavbar.style.borderRadius = ''
  perfilIcon.style.filter = 'invert(0%)'

  acessosNavbar.style.backgroundColor = '#000'
  acessosNavbar.style.color = '#fff'
  acessosNavbar.style.borderRadius = '20px'
  acessoIcon.style.filter = 'invert(100%)'
}

function loggout() {
  sessionStorage.clear()
  window.location.href = 'login.html'
}

/* função mostrar alerta */

function showAlerta() {
  idShowAlerta.style.display = 'block'
}

function hideAlerta() {
  idShowAlerta.style.display = 'none'
}

/* função para o Dispositivo */
function novoDispositivo() {
  alert('Adicionar dispositivo')
}

function deleteDispositivo() {
  Swal.fire({
    title: 'Deseja excluir?',
    text: "Você não poderá reverter isso",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, excluir!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'OK!',
        'Dispositivo excluido com sucesso!',
        'success'
      )
    }
  })
}

function editDispositivo() {
  alert('editar dispositivo')
}

/* função para o editar o shopping e o usuario */

function salvarShopping() {
  Swal.fire('OK!', 'Shopping atualizado com sucesso!', 'success')
}

function salvarUsuario() {
  Swal.fire('OK!', 'Perfil atualizado com sucesso!', 'success')
}

/* função para acessos */

function showModalNewUser() {
  modalCadastroAcesso.style.display == 'flex'
}

function novoAcesso() {
  alert('Criar novo acesso')
}

function editarAcesso() {
  alert('editar acesso')
}

function deleteAcesso() {
  Swal.fire({
    title: 'Deseja excluir?',
    text: "Você não poderá reverter isso",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, excluir!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'OK!',
        'Acesso excluido com sucesso!',
        'success'
      )
    }
  })
}

/*  função de formatar cpf e cnpj */

function mascaraCpf(valor) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
}
function mascaraCnpj(valor) {
  return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
}