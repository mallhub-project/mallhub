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
  nome_novo_disp.style.display = ""
  descricao_novo_disp.style.display = ""
  salvar_novo_disp.style.display = ""
}
function SalvarDispositivo() {
  nome_novo_disp.style.display = "none"
  descricao_novo_disp.style.display = "none"
  salvar_novo_disp.style.display = "none"
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

function listarDispositivo() {

  fetch('/dispositivo/listar').then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        // //salva na sessão storage browser

        sessionStorage.ID_DISPOSITIVO = resposta[0].id_dispositivo;
        sessionStorage.NOME_DISPOSITIVO = resposta[1].nome;
        console.log(resposta.length)
        const nomeDispositivo = sessionStorage.NOME_DISPOSITIVO


        var listaDispositivo = resposta

        for (var posicao = 0; posicao < listaDispositivo.length; posicao++) {

          if (true) {
            divDispositivos.innerHTML += `
            <div class="dash_item">
              <div>
                <p class="dash_p">${listaDispositivo[posicao].nome}</p>
              </div>
              <div>
                <button onclick="editDispositivo()">
                  <img src="img/editar.svg">
                </button>
                <button onclick="deleteDispositivo()">
                  <img src="img/lixeira.svg">
                </button>
              </div>
            </div>
            `
          }

        }








        
      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");
      resposta.text().then(texto => {
        console.error(texto);
      });
    }
  })

  // if de atualização de dispositivos **************************************************************

}

/* função para o editar o shopping e o usuario */

async function salvarShopping() {
  const razaoSocial = razaoSocialPerfil.value;
  const nomeFantasia = fantasyNamePerfil.value;
  const cnpj = cnpjPerfil.value;
  const idShopping = sessionStorage.getItem('ID_SHOPPING') != null || undefined ? sessionStorage.getItem('ID_SHOPPING') : null

  if (idShopping != null && razaoSocial && nomeFantasia && cnpj) {

    await fetch("/usuarios/atualizarShopping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        razaoSocialServer: razaoSocial,
        cnpjServer: cnpj,
        nomeFantasiaServer: nomeFantasia,
        idShoppingServer: idShopping
      })
    }).then(async function (resposta) {
      if (resposta.ok) {

        Swal.fire('OK!', 'Informações do shopping atualizado com sucesso!', 'success')
        console.log(resposta)
        await fetch(`/usuarios/listar-shopping/${idShopping}`).then(function (resultado) {
          return resultado.json()
        }).then(function (data) {
          console.log(data)
          window.sessionStorage.removeItem('RAZAO_SOCIAL', 'NOME_FANTASIA', 'CNPJ')
          window.sessionStorage.setItem('RAZAO_SOCIAL', data.razao_social)
          window.sessionStorage.setItem('NOME_FANTASIA', data.nome_fantasia)
          window.sessionStorage.setItem('CNPJ', data.cnpj)
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }).catch(function (erro) {
          Swal.fire('Ops!', 'Não foi possivel carregar as informações' + erro, 'error')
        })

      } else {
        throw ("Houve um erro ao tentar realizar a atualização de Perfil!");
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  }

}

async function salvarUsuario() {

  const nome = nomePerfil.value;
  const cpf = cpfPerfil.value;
  const telefone = telefonePerfil.value;
  const cargo = cargoPerfil.value;
  const idUsuario = sessionStorage.getItem('ID_USUARIO') != null || undefined ? sessionStorage.getItem('ID_USUARIO') : null

  if (nome && idUsuario != null && cpf && telefone && cargo && telefone.length >= 9) {

    await fetch("/usuarios/atualizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nomeServer: nome,
        cpfServer: cpf,
        telefoneServer: telefone,
        cargoServer: cargo,
        idUsuarioServer: idUsuario
      })
    }).then(async function (resposta) {
      if (resposta.ok) {

        Swal.fire('OK!', 'Perfil atualizado com sucesso!', 'success')
        console.log(resposta)
        await fetch(`/usuarios/listar-usuario/${idUsuario}`).then(function (resultado) {
          return resultado.json()
        }).then(function (data) {
          console.log(data)
          window.sessionStorage.removeItem('NOME_USUARIO', 'CPF_USUARIO', 'CARGO_USUARIO', 'TELEFONE_USUARIO')
          window.sessionStorage.setItem('NOME_USUARIO', data.nome)
          window.sessionStorage.setItem('CPF_USUARIO', data.cpf)
          window.sessionStorage.setItem('TELEFONE_USUARIO', data.telefone)
          window.sessionStorage.setItem('CARGO_USUARIO', data.cargo)
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }).catch(function (erro) {
          Swal.fire('Ops!', 'Não foi possivel carregar as informações' + erro, 'error')
        })

      } else {
        throw ("Houve um erro ao tentar realizar a atualização de Perfil!");
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  }

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