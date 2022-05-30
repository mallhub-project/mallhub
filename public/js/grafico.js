let proximaAtualizacao;

window.onload = obterDadosGrafico(1);

function obterDadosGrafico(id_shopping) {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/ultimas/${id_shopping}`).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        fetch(`/medidas/buscar-mes?idShopping=1&dataInicial=2022-06-01&dataFinal=2022-06-30`)
        .then(data => data.json())
        .then((data) => {
          plotarGrafico(resposta, id_shopping, data[0].TotalPessoas);
        })
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGrafico(resposta, id_shopping, dadosMes) {
  const labels = [
    '',
    '',
    '',
    '',
    '',
    ''
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Cinemark',
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
      data: [],
    }, {
      label: 'Praça São José',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [],
    }, {
      label: 'Playcenter family',
      backgroundColor: 'green',
      borderColor: 'green',
      data: [],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    display: true,
    includeBounds: true,
    options: {
      drawActiveElementsOnTop: true,
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 1000
        }
      }
    }

  };
  var ctx = todosDispositivos.getContext('2d');
  window.myChart = new Chart(
    ctx,
    config
  );

  console.log(resposta)

  for (i = 0; i < resposta.length; i++) {
    console.log("aquii 2", resposta[i])
    var registro = resposta[i];
    if (i == 0 || i == 2) {
      data.datasets[i].data.push(registro.TotalPessoas * 10);
    } else {
      data.datasets[i].data.push(registro.TotalPessoas);
    }
  }

  // for (i = 0; i < 6; i++) {
  //   console.log(i, "aquii")
  //   var registro = resposta[i];
  //   data.datasets[0].data.push(registro);
  // }

  // for (i = 0; i < 6; i++) {
  //   var registro = resposta[i];
  //   data.datasets[1].data.push(registro);
  // }

  // for (i = 0; i < 6; i++) {
  //   var registro = resposta[i];
  //   data.datasets[2].data.push(registro);
  // }


  const labels2 = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  const data2 = {
    labels: labels2,
    datasets: [{
      label: 'Fluxo de Pessoas por mês',
      backgroundColor: 'white',
      borderColor: 'white',
      data: [(Math.random() * 1000).toFixed(0),
      (Math.random() * 1000).toFixed(0),
      (Math.random() * 1000).toFixed(0),
      (Math.random() * 1000).toFixed(0),
      (Math.random() * 1000).toFixed(0),
      dadosMes],
    }]
  };
  const config2 = {
    type: 'bar',
    data: data2,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1000
        }
      }
    }
  };

  window.myChart2 = new Chart(
    document.getElementById('porDispositivos'),
    config2
  );

  setTimeout(() => atualizarGrafico(id_shopping, data, myChart, data2, myChart2), 5000);
}

function atualizarGrafico(id_shopping, data, myChart, data2, myChart2) {
  fetch(`/medidas/tempo-real/${id_shopping}`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {
       
         console.log("aquii", novoRegistro)

        console.log("aquii, ",data.datasets[0])
        data.datasets[0].data.length > 6 ? data.datasets[0].data.shift() : null
        data.datasets[0].data.push(novoRegistro[0].TotalPessoas * 20);
        data.datasets[1].data.length > 6 ? data.datasets[1].data.shift() : null
        data.datasets[1].data.push(novoRegistro[1].TotalPessoas);
        data.datasets[2].data.length > 6 ? data.datasets[2].data.shift() : null
        data.datasets[2].data.push(novoRegistro[2].TotalPessoas * 10);

        window.myChart.update();

      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

    fetch(`/medidas/buscar-mes?idShopping=1&dataInicial=2022-06-01&dataFinal=2022-06-30`)
    .then(data => data.json())
    .then((novoRegistro) => {
        data2.datasets[0].data[5] = novoRegistro[0].TotalPessoas
        window.myChart2.update();
    })

    proximaAtualizacao = setTimeout(() => atualizarGrafico(id_shopping, data, null, data2), 2000);

}