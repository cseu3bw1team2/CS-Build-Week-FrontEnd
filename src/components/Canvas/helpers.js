import Player from './Player';
import Room from './Room';
import { get } from '../../util/controllers/data';
import { getUrl } from '../../util/url';
// import axiosAuth from '../../util/axios/axiosAuth';
import axios from 'axios';

export const startPoint = {
    x: 500,
    y: 300,
}

export const pointDimensions = {
    pointWidth: 15,
    pointHeight:15,
}

export const lineDimensions = {
    lineWidth: 50,
    lineHeight: 1
}

export const formatData = (data) => {
    let dictionary = {"0" : null}
    data.forEach(el => {
        const key = String(el.pk)
        dictionary[key] = el.fields.title;
    })

    const formattedData = [];

    data.forEach(el => {
        const {n_to, s_to, e_to, w_to } = el.fields;

        const obj = {
            n_to: dictionary[String(n_to)],
            s_to: dictionary[String(s_to)],
            e_to: dictionary[String(e_to)],
            w_to: dictionary[String(w_to)]
        }

        const mod = { ...{ name: el.fields.title, players: [] }, ...el.fields, ...obj };
        formattedData.push(mod);
    });

    return formattedData;
    
}
  
export const initCanvas = (canvasRef) => {
    const canvas = canvasRef.getContext("2d");
    canvas.fillStyle = "#fff";
    canvas.strokeStyle = "#fff";

    return canvas
  }

export const getGameInitData = () => {
    return new Promise((resolve) => {
      const url = getUrl("INIT_GAME");
      axios
      .create({
        headers: { 'Authorization': 'Token ' + window.sessionStorage.getItem("token") }
      })
      .get(url)
      .then(res => {
          resolve(res)
      })
      .catch(err => console.log("Error: ", err.message));
      // getWithAuth(url)
      //   .then(resolve)
      //   .catch(reject);
    });
  }

export const getRooms = () => {
    return new Promise((resolve, reject) => {
        const url = getUrl('GET_ROOMS')
      get(url)
        .then(res => {
          const data = JSON.parse(res.data.rooms);
          const formatted = formatData(data);
          const rooms = formatted.map(roomEl => {
            const room = new Room(roomEl);
            let players = [];
            if (roomEl.players.length !== 0) {
              //convert each literal object to Player instance object
              players = room.players.map(el => {
                const player = new Player(el);
                player.current_room = room;
                return player;
              });
            }
            room.players = players;
            return room;
          });

          resolve(rooms);
        })
        .catch(reject);
    });
  };
