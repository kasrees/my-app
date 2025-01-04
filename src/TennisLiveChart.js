import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Импорт плагина

// Регистрация Chart.js модулей и плагина datalabels
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const TennisLiveChart = () => {
  const data = {
    labels: [
      "1xBet",
      "Stake",
      "Gastonred",
      "MyStake",
      "Cloudbet",
      "Vave",
      "JoyCasino",
      "Loot",
      "Betfair Betting",
      "BB",
      "Sportsbet.io",
      "Everygame",
      "BookMaker",
    ],
    datasets: [
      {
        label: "Процент (%)",
        data: [5, 3, 3, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(33, 150, 243, 0.8)", // Синий цвет
        borderColor: "rgba(33, 150, 243, 1)", // Граница синего
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Скрыть легенду
      },
      title: {
        display: true,
        text: "ТЕННИС ЛАЙВ",
        color: "#1976d2",
        font: {
          size: 24,
        },
        padding: 20,
      },
      tooltip: {
        enabled: true, // Всплывающие подсказки
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value + "%",
        color: "#fff",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#fff",
          callback: function (value) {
            return value + "%"; // Добавить "%" к значениям
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Линии сетки
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default TennisLiveChart;
