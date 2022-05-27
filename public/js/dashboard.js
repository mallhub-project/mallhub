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
  divAjuda.style.display = 'none'

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

  ajudaNavbar.style.backgroundColor = ''
  ajudaNavbar.style.color = ''
  ajudaNavbar.style.borderRadius = ''
  ajudaIcon.style.filter = 'invert(0%)'

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
  listarDispositivo()
  divInicio.style.display = 'none'
  divDispositivos.style.display = ''
  divPerfil.style.display = 'none'
  divAcessos.style.display = 'none'
  divAjuda.style.display = 'none'

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

  ajudaNavbar.style.backgroundColor = ''
  ajudaNavbar.style.color = ''
  ajudaNavbar.style.borderRadius = ''
  ajudaIcon.style.filter = 'invert(0%)'

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
  divAjuda.style.display = 'none'

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

  ajudaNavbar.style.backgroundColor = ''
  ajudaNavbar.style.color = ''
  ajudaNavbar.style.borderRadius = ''
  ajudaIcon.style.filter = 'invert(0%)'

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
  listarAcesso()
  divInicio.style.display = 'none'
  divDispositivos.style.display = 'none'
  divPerfil.style.display = 'none'
  divAcessos.style.display = ''
  divAjuda.style.display = 'none'

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

  ajudaNavbar.style.backgroundColor = ''
  ajudaNavbar.style.color = ''
  ajudaNavbar.style.borderRadius = ''
  ajudaIcon.style.filter = 'invert(0%)'

  acessosNavbar.style.backgroundColor = '#000'
  acessosNavbar.style.color = '#fff'
  acessosNavbar.style.borderRadius = '20px'
  acessoIcon.style.filter = 'invert(100%)'
}

function ajuda() {
  divInicio.style.display = 'none'
  divDispositivos.style.display = 'none'
  divPerfil.style.display = 'none'
  divAcessos.style.display = 'none'
  divAjuda.style.display = ''

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

  acessosNavbar.style.backgroundColor = ''
  acessosNavbar.style.color = ''
  acessosNavbar.style.borderRadius = ''
  acessoIcon.style.filter = 'invert(0%)'

  ajudaNavbar.style.backgroundColor = '#000'
  ajudaNavbar.style.color = '#fff'
  ajudaNavbar.style.borderRadius = '20px'
  ajudaIcon.style.filter = 'invert(100%)'
}

function loggout() {
  sessionStorage.clear()
  window.location.href = 'login.html'
}

/* função mostrar alerta */

async function showAlerta(openModal) {
  listarAlerta.innerHTML = ''
  var id_shopping = sessionStorage.ID_SHOPPING
  if (id_shopping) {
    console.log(id_shopping)
    await fetch(`/aviso/listar?idShopping=${id_shopping}`)
      .then(data => data.json()).then((data) => {
        quantidadeAlertas.innerHTML = `${data.length}`
        for (var posicao = 0; posicao < data.length; posicao++) {
          listarAlerta.innerHTML += `
            <div class="alertaItem">
              <p>${data[posicao].descricao}</p>
              <div>
                <span>${data[posicao].data_hora}</span>
              </div>
            </div>
          `
        }
        if (openModal) {
          idShowAlerta.style.display = ''
        }
      }).catch(function () {
        idShowAlerta.style.display = 'none'
      });
  }
}

function hideAlerta() {
  idShowAlerta.style.display = 'none'
}

/* função para o Dispositivo */

async function novoDispositivo() {
  if (modalNovoDispositivo.style.display == 'none') {
    var id_shopping = sessionStorage.ID_SHOPPING
    localidadesDispositivo.innerHTML = '<option value="0">Selecione a localidade</option>'
    if (id_shopping) {
      await fetch(`/localidade/listar?idShopping=${id_shopping}`)
        .then(data => data.json())
        .then((data) => {
          for (var posicao = 0; posicao < data.length; posicao++) {
            localidadesDispositivo.innerHTML += `<option value="${data[posicao].id_localidade}">${data[posicao].nome}</option>`
          }
          modalNovoDispositivo.style.display = ''
        }).catch(function () {
          modalNovoDispositivo.style.display == 'none'
        });
    }
  } else {
    modalNovoDispositivo.style.display = 'none'
  }
}

function criar_dispositivo() {
  var nome = nome_dispositivo.value
  var descricao = descricao_dispositivo.value
  var localidade = localidadesDispositivo.value

  if (nome && descricao && localidade) {
    fetch("/dispositivo/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nomeServer: nome,
        descricaoServer: descricao,
        localidadeServer: localidade
      })
    }).then(function (resposta) {
      if (resposta.status == 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Dispositivo cadastrado com sucesso!'
        })
        modalNovoDispositivo.style.display = 'none'
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'error',
          title: 'Dispositivo não cadastrado!'
        })
        modalNovoDispositivo.style.display = 'none'
      }
    }).catch(function (erro) {
      console.log(erro);
    })
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'error',
      title: 'Preencha os campos necessários!'
    })
  }
}

function deleteDispositivo(id_dispositivo) {
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
      fetch("/dispositivo/apagar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_dispositivoServer: id_dispositivo
        })
      }).then(function (resposta) {
        if (resposta.status == 200) {
          Swal.fire(
            'OK!',
            'Dispositivo excluido com sucesso!',
            'success'
          )
        }
      }).catch(function (erro) {
        console.log(erro);
      })
    }
  })
}

function listarDispositivo() {
  listaDispositivos.innerHTML = ''
  var id_shopping = sessionStorage.ID_SHOPPING
  fetch(`/dispositivo/listar?idShopping=${id_shopping}`).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        for (var posicao = 0; posicao < resposta.length; posicao++) {
          listaDispositivos.innerHTML += `
              <div id="${resposta[posicao].id_dispositivo}" class="dash_item">
                <div>
                  <p class="dash_p_dispositivo">${resposta[posicao].nome}</p>
                </div>
                <div>
                  <button onclick="openModalEditar(${resposta[posicao].id_dispositivo})">
                    <img src="img/editar.svg">
                  </button>
                  <button onclick="deleteDispositivo(${resposta[posicao].id_dispositivo})">
                    <img src="img/lixeira.svg">
                  </button>
                </div>
              </div>  
              `
        }
      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");
      resposta.text().then(texto => {
        console.error(texto);
      });
    }
  })
}

async function openModalEditar(id_dispositivo) {
  var id_shopping = sessionStorage.ID_SHOPPING

  if (id_dispositivo && id_shopping) {
    modalEditarDispositivo.innerHTML = `
    <div class="buttonClose" onclick="fecharModalEditar()">X</div>
          <div class="box">
            <h2>Nome Dispositivo:</h2>
            <input class="dash_input_info" id="nome_dispositivo_editar" placeholder="Nome">

            <h2>Descrição do Dispositivo:</h2>
            <input class="dash_input_info" id="descricao_dispositivo_editar" placeholder="Descrição">

            <h2>Localidade</h2>
            <select id="localidadesDispositivo_editar">
            </select>
          </div>
          <button onclick="editDispositivo(${id_dispositivo})" id="botao_salvarDispositivo_editar">Salvar Dispositivo</button>
    `
    localidadesDispositivo_editar.innerHTML += '<option value="0">Selecione a localidade</option>'
    await fetch(`/localidade/listar?idShopping=${id_shopping}`)
      .then(data => data.json())
      .then((data) => {
        for (var posicao = 0; posicao < data.length; posicao++) {
          localidadesDispositivo_editar.innerHTML += `<option value="${data[posicao].id_localidade}">${data[posicao].nome}</option>`
        }
      })
    await fetch(`/dispositivo/listar-por-id?idDispositivo=${id_dispositivo}`)
      .then(function (resposta) {
        if (resposta.ok) {
          resposta.json().then(function (resposta) {
            console.log(resposta, "resposta do open modal editar")
            nome_dispositivo_editar.value = resposta[0].nome
            descricao_dispositivo_editar.value = resposta[0].descricao
            localidadesDispositivo_editar.value = resposta[0].fk_localidade
          });
        }
      })
    modalEditarDispositivo.style.display = ''
  }
}

function editDispositivo(id_dispositivo) {
  console.log(id_dispositivo, "id no editar")
  var nome = nome_dispositivo_editar.value
  var descricao = descricao_dispositivo_editar.value
  var localidade = localidadesDispositivo_editar.value

  fetch("/dispositivo/editar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id_dispositivoServer: id_dispositivo,
      nomeServer: nome,
      descricaoServer: descricao,
      localidadeServer: localidade
    })
  }).then(function (resposta) {
    if (resposta.status == 200) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'success',
        title: 'Dispositivo editado com sucesso!'
      })
      modalEditarDispositivo.style.display = 'none'
    }
  }).catch(function (erro) {
    console.log(erro);
  })
}

function fecharModalEditar() {
  modalEditarDispositivo.style.display = 'none'
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

async function listarAcesso() {
  listarAcesso_lista.innerHTML = ''
  var id_shopping = sessionStorage.ID_SHOPPING
  fetch(`/acesso/listar?idShopping=${id_shopping}`).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        console.log(resposta)
        var user = ''
        for (var posicao = 0; posicao < resposta.length; posicao++) {
          if (resposta[posicao].fk_superior == 0 || resposta[posicao].fk_superior == null) {
            user = 'Admin'
          } else {
            user = 'usuario'
          }
          listarAcesso_lista.innerHTML += `
            <div class="dash_item">
              <p class="dash_p">Nome: <span id="nomeUsuarioAcesso">${resposta[posicao].nome}</span></p>
              <p class="dash_p" style="margin-right: auto;">Nivel: <span>${user}</span></p>
            </div>
          `
        }

      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");
      resposta.text().then(texto => {
        console.error(texto);
      });
    }
  })
}

function abriModalAcesso() {
  modalNovoAcesso.style.display = ''
}

function cadastrarAcesso() {
  var nome = nome_acesso.value
  var email = email_acesso.value
  var cpf = CPF_acesso.value
  var senha = senha_acesso.value
  var fk_superior = sessionStorage.ID_USUARIO
  var fk_shopping = sessionStorage.ID_SHOPPING

  if(nome.length, email.length, cpf.length = 11, senha.length, fk_superior, fk_shopping) {
    fetch("/acesso/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nomeServer: nome,
        emailServer: email,
        cpfServer: cpf,
        cargoServer: '',
        senhaServer: senha,
        fk_superiorServer: fk_superior,
        fk_shoppingServer: fk_shopping
      })
    }).then(function (resposta) {
      if (resposta.status == 200 || resposta.status == 204) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Acesso cadastrado com sucesso!'
        })
        modalCriarSetor.style.display = 'none'
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'error',
          title: 'Acesso não cadastrado!'
        })
        modalCriarSetor.style.display = 'none'
      }
    }).catch(function (erro) {
      console.log(erro);
    })
  }
}

function fecharNovoAcesso() {
  modalNovoAcesso.style.display = 'none'
}

/*  função de formatar cpf e cnpj */

function mascaraCpf(valor) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
}
function mascaraCnpj(valor) {
  return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
}

// setor

function criarSetor() {
  modalCriarSetor.style.display = ''
}

function cadastrarSetor() {
  var nome = nome_setor.value
  var descricao = descricao_setor.value
  var shopping = sessionStorage.ID_SHOPPING

  fetch("/setor/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nomeServer: nome,
      descricaoServer: descricao,
      idShoppingServer: shopping
    })
  }).then(function (resposta) {
    if (resposta.status == 200 || resposta.status == 204) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'success',
        title: 'Setor cadastrado com sucesso!'
      })
      modalCriarSetor.style.display = 'none'
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'error',
        title: 'Setor não cadastrado!'
      })
      modalCriarSetor.style.display = 'none'
    }
  }).catch(function (erro) {
    console.log(erro);
  })
}

function fecharCriarSetor() {
  modalCriarSetor.style.display = 'none'
}

// localidade

function criarLocalidade() {
  var id_shopping = sessionStorage.ID_SHOPPING
  setor_localidade_select.innerHTML = `<option>Selecione o setor</option>`
  fetch(`/setor/listar?idShopping=${id_shopping}`)
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (resposta) {
          console.log(resposta)
          for (var posicao = 0; posicao < resposta.length; posicao++) {
            setor_localidade_select.innerHTML += `<option value="${resposta[posicao].id_setor}">${resposta[posicao].nome}</option>`
          }
        });
      }
    })
  modalCriarLocalidade.style.display = ''
}

function cadastrarLocalidade() {
  var nome = nome_localidade.value
  var descricao = descricao_localidade.value
  var setor = setor_localidade_select.value

  console.log(nome, descricao, setor)

  fetch("/localidade/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nomeServer: nome,
      descricaoServer: descricao,
      idSetorServer: setor
    })
  }).then(function (resposta) {
    if (resposta.status == 200 || resposta.status == 204) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'success',
        title: 'Localidade cadastrada com sucesso!'
      })
      modalCriarLocalidade.style.display = 'none'
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'error',
        title: 'Localidade não cadastrada!'
      })
      modalCriarLocalidade.style.display = 'none'
    }
  }).catch(function (erro) {
    console.log(erro);
  })

}

function fecharCriarLocalidade() {
  modalCriarLocalidade.style.display = 'none'
}