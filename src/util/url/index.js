// export const baseUrl = "http://localhost:8000/api/v1";
// const baseUrl =  "https://tranquil-savannah-89328.herokuapp.com/api"

// const SIGN_IN = `${baseUrl}/login/`;
// const SIGN_UP = `${baseUrl}/registration/`;
// const START_GAME = `${baseUrl}/adv/init/`


// export const baseUrl = "http://localhost:3333/api";
const baseUrl =  "https://lambda-mud-test.herokuapp.com/api"

const SIGN_IN = `${baseUrl}/login`;
const SIGN_UP = `${baseUrl}/registeration`;
const GET_ROOMS = `${baseUrl}/adv/rooms`;
const GET_PLAYERS = `${baseUrl}/players`;
const INIT_GAME = "https://lambda-mud-test.herokuapp.com/api/adv/init/";
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

    case "INIT_GAME":
      return INIT_GAME;

    default:
      return ""; //this will force the request to error out, but i only put it there cos of eslint
  }
};
