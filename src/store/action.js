const getCovidData = () => {
  return (dispatch) => {
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "GETCOVID", covid: json }))  };
};

const getCountries = () => {
  return (dispatch) => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((app) => app.json())
      .then((actualdata) => dispatch({ type: "GETCOUNTRIES", countries: actualdata })) };
};
export { getCovidData, getCountries };
