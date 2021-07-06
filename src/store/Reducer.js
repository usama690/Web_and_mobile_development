const INITIAL_STATE = {
  username: 1,
  covid: [],
  countries: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GETCOVID":
      return {
        ...state,
        covid: action.covid,
      };
    case "GETCOUNTRIES":
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};
export default reducer;
