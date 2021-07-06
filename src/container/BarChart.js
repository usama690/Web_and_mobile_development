import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getCovidData, getCountries } from "../store/action";
import { useEffect } from "react";

function BarChart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCovidData());
    dispatch(getCountries());
  }, [dispatch]);
  console.log(state.countries);
  const data = {
    labels: state.covid.map(({ state }) => state),
    datasets: [
      {
        label: "Infected",
        data: state.covid.map((data) => data.positive),
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgba(255,206,86,0.2)"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        pointBorderColor: "rgba(255,206,86,0.2)",
        fill: true,
      },
      {
        label: "Deaths",
        data: state.covid.map((data) => data.death),
        borderColor: ["rgba(54,162,235,0.2)"],
        backgroundColor: ["rgba(54,162,235,0.2)"],
        pointBackgroundColor: "rgba(54,162,235,0.2)",
        pointBorderColor: "rgba(54,162,235,0.2)",
        fill: true,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <>
      <select>
        {state.countries.map(({ name }) => {
    return      <option value={name}> {name}</option>  ;
        })}
      </select>
      <Bar data={data} options={options} />{" "}
    </>
  );
}

export default BarChart;
