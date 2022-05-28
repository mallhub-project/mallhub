let proximaAtualizacao;

window.onload = obterDadosGrafico(1);

function obterDadosGrafico(id_shopping) {
  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/ultimas/${id_shopping}`).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        // resposta.reverse();

        plotarGrafico(resposta, id_shopping);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGrafico(resposta, id_shopping) {
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
      label: 'Alimenticio',
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
      data: [],
    },{
      label: 'Moda',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [],
    },{
      label: 'Lacoste',
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
          max: 5000
        }
      }
    }
    
};
  var ctx = todosDispositivos.getContext('2d');
  window.myChart = new Chart(
    ctx,
    config
  );

  for (i = 0; i < 17; i++) {
    var registro = resposta[i];
    data.datasets[0].data.push(registro);
  }
  for (i = 0; i < 17; i++) {
    var registro = resposta[i];
    data.datasets[1].data.push(registro);
  }
  for (i = 0; i < 17; i++) {
    var registro = resposta[i];
    data.datasets[2].data.push(registro);
  }


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
      label: 'Fluxo de Pessoas',
      backgroundColor: 'white',
      borderColor: 'white',
      data: [(Math.random() * 1000).toFixed(0) , (Math.random() * 1000).toFixed(0) , (Math.random() * 10000).toFixed(0)],
    }]
  };

  const config2 = {
    type: 'bar',
    data: data2,
    options: {}
  };

  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    data2.datasets[0].data.push(registro.TotalPessoas);
  }

  console.log(JSON.stringify(data2));


  const myChart2 = new Chart(
    document.getElementById('porDispositivos'),
    config2
  );

  setTimeout(() => atualizarGrafico(id_shopping, data, myChart), 5000);
}

function atualizarGrafico(id_shopping, data, myChart) {
  console.log(myChart)
  
  fetch(`/medidas/tempo-real/${id_shopping}`, { cache: 'no-store' }).then(function (response) {

    if (response.ok) {

      response.json().then(function (novoRegistro) {
        console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
        console.log(`Dados atuais do gráfico: ${novoRegistro[0].TotalPessoas}`);
        console.log(`Dados atuais do gráfico: ${novoRegistro[1].TotalPessoas}`);
        // tirando e colocando valores no gráfico
        // data.labels.shift(); // apagar o primeiro
        // data.labels.push(novoRegistro[0].TotalPessoas); // incluir um novo momento

        data.datasets[0].data.shift();  // apagar o primeiro de umidade
        data.datasets[0].data.push(novoRegistro[0].TotalPessoas);
        data.datasets[1].data.shift(); // incluir uma nova medida de umidade
        data.datasets[1].data.push(novoRegistro[1].TotalPessoas);
        data.datasets[2].data.shift(); // incluir uma nova medida de umidade
        data.datasets[2].data.push(novoRegistro[2].TotalPessoas);
        
        window.myChart.update();

        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(() => atualizarGrafico(id_shopping, data), 2000);

      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

}