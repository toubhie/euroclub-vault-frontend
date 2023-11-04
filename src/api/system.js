import {  makeGetRequest, makePostRequest } from "./config";

const updatePlayer = async (id, data) => {
    return await makePostRequest('player', data);
};

const createPlayer = async (data) => {
    return await makePostRequest('player', data);
};

const getAllPlayers = async () => {
    return await makeGetRequest('players');
};

const getAllPlayerPositions = async () => {
    return await makeGetRequest('player-positions');
};

export { getAllPlayers, updatePlayer, createPlayer, getAllPlayerPositions };