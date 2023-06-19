import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
  

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);  

const dados = {
    labels  : ['2023', '2022', '2021', '2020', '2019'],
    datasets: [
      {
        label               : 'A1',
        data                : [9, 33, 30, 26, 17],
        backgroundColor     : '#4dc9f6'
      },
      {
        label               : 'A2',
        data                : [0, 8, 13, 17, 6],
        backgroundColor     : '#f67019'
      },
      {
        label               : 'A3',
        data                : [12, 26, 24, 46, 20],
        backgroundColor     : '#537bc4'
      },
      {
        label               : 'A4',
        data                : [0, 30, 49, 25, 55],
        backgroundColor     : '#acc236'
      },
    ]
  }

const config = {
    responsive              : true,
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }

export default function GraficoProducao() {
    return (
        <div className="card card-gray">
            <div className="card-header">
                <h3 className="card-title">Produção vs Qualis</h3>

                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="chart">
                    <Bar options={config} data={dados} />
                </div>
            </div>
        </div>
    );

}