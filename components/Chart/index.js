import { Line } from "react-chartjs-2";

import styles from "../../styles/Chart.module.sass";

const Chart = () => {
  const yAxis = [
    0,
    94.99902439729593,
    142.49853037435676,
    174.1648614712983,
    197.9146051284214,
    102.91558073112546,
    55.416074754064624,
    23.74974365712307,
    0,
  ];

  const xAxis = [
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
    "10 / 4",
  ];

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Total Amount in Pool over time",
        data: yAxis,
        backgroundColor: "#0f0f0f",
        borderColor: "#923cb5",
        borderWidth: 1,
        lineTension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Line data={data} />
    </div>
  );
};

export default Chart;
