import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

export default function Home() {
  const optionsTemperatura = {
    chart: {
      type: "column",
    },
    title: {
      text: "Temperatura (°C)",
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      categories: ["Mirante", "Serra"],
      title: {
        text: null,
      },
      crosshair: true,
    },
    shadow: true,
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: [
      {
        name: "Máxima",
        color: "red",
        borderColor: "#303030",
        data: [30, 31],
      },
      {
        name: "Mínima",
        color: "blue",
        borderColor: "#303030",
        data: [20, 21],
      },
    ],
  };

  const optionsPrecipitacao = {
    chart: {
      type: "column",
    },
    title: {
      text: "Precipitação acumulada (mm)",
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      categories: ["Mirante", "Serra"],
      title: {
        text: null,
      },
      crosshair: true,
    },
    shadow: true,
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: [
      {
        borderColor: "#303030",
        data: [3, 0],
      },
    ],
  };

  const optionsUmidade = {
    chart: {
      type: "column",
    },
    title: {
      text: "Umidade relativa (%)",
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      categories: ["Mirante", "Serra"],
      title: {
        text: null,
      },
      crosshair: true,
    },
    shadow: true,
    yAxis: {
      min: 0,
      max: 100.0,
      title: {
        text: null,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: [
      {
        name: "Máxima",
        color: "red",
        borderColor: "#303030",
        data: [99, 98],
      },
      {
        name: "Mínima",
        color: "blue",
        borderColor: "#303030",
        data: [93, 94],
      },
    ],
  };

  const optionsVento = {
    chart: {
      type: "column",
    },
    title: {
      text: "Velocidade do vento (km/h)",
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    xAxis: {
      categories: ["Mirante", "Serra"],
      title: {
        text: null,
      },
      crosshair: true,
    },
    shadow: true,
    yAxis: {
      min: 0,
      title: {
        text: null,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: [
      {
        name: "Máxima",
        color: "red",
        borderColor: "#303030",
        data: [10, 12],
      },
      {
        name: "Média  ",
        color: "blue",
        borderColor: "#303030",
        data: [5, 6],
      },
    ],
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("Mirante da Lagoa", 33, 23, 10, 20), createData("Serra", 25, 22, 9, 12)];

  return (
    <Container>
      <h1>Resumo 29/08/2022</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="overline" gutterBottom>
                Temperatura Máxima
              </Typography>
              <Typography color="red" variant="h4" align="center" gutterBottom>
                33°C
              </Typography>
              <Typography variant="caption" gutterBottom>
                Mirante da Lagoa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography align="center" variant="overline" gutterBottom>
                Temperatura Mínima
              </Typography>
              <Typography align="center" color="blue" variant="h4" gutterBottom>
                22°C
              </Typography>
              <Typography align="center" variant="caption" gutterBottom>
                Serra
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography align="center" variant="overline" gutterBottom>
                Rajada de vento máxima
              </Typography>
              <Typography align="center" variant="h4" gutterBottom>
                20 km/h
              </Typography>
              <Typography variant="caption" gutterBottom>
                Mirante da Lagoa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography align="center" variant="overline" gutterBottom>
                Chuva acumulada
              </Typography>
              <Typography variant="h4" align="center" gutterBottom>
                10 mm
              </Typography>
              <Typography variant="caption" align="center" gutterBottom>
                Mirante da Lagoa
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Estação</TableCell>
                    <TableCell align="right">Temperatura máxima (°C)</TableCell>
                    <TableCell align="right">Temperatura mínima (°C)</TableCell>
                    <TableCell align="right">Precipitação acumulada (mm)</TableCell>
                    <TableCell align="right">Rajada de vento (km/h)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
