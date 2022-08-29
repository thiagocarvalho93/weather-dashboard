import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Home() {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>Painel</h1>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
