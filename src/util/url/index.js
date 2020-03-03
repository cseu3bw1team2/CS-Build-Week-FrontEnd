// export const baseUrl = "http://localhost:8000/api/v1";
const baseUrl =  "https://lambda-mud-test.herokuapp.com/api"

const SIGN_IN = `${baseUrl}/login/`;
const SIGN_UP = `${baseUrl}/registeration/`;
const START_GAME = `${baseUrl}/adv/init/`


export const getUrl = name => {
  switch (name) {

    case "SIGN_IN":
      return SIGN_IN;

    case "SIGN_UP":
      return SIGN_UP;
    
    case "START_GAME":
      return START_GAME;

    default:
      return ""; //this will force the request to error out, but i only put it there cos of eslint
  }
};
