export const baseUrl = "http://localhost:3333/api";
// const baseUrl =  "https://lambda-mud-test.herokuapp.com/api"

const SIGN_IN = `${baseUrl}/login`;
const SIGN_UP = `${baseUrl}/registeration`;
const GET_ROOMS = `${baseUrl}/rooms`;
const GET_PLAYERS = `${baseUrl}/players`;


export const getUrl = name => {
  switch (name) {

    case "SIGN_IN":
      return SIGN_IN;

    case "SIGN_UP":
      return SIGN_UP;
    // rooms
    case "GET_ROOMS":
      return GET_ROOMS;

    case "GET_PLAYERS":
      return GET_PLAYERS;

    default:
      return ""; //this will force the request to error out, but i only put it there cos of eslint
  }
};
