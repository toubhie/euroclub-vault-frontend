import { PlayerData } from "../interfaces/PlayerData";
import { makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from "./config";

const updatePlayer = async (id: number, data: PlayerData) => {
    const dataToUpdate: PlayerData = {
        fullname: data?.fullname,
        age: data?.age,
        player_value: data?.player_value,
        nationality: data?.nationality,
        position: data?.position,
        club: data?.club,
    };

    return await makePutRequest(`players/${id}`, dataToUpdate);
};

const createPlayer = async (data: PlayerData) => {
    return await makePostRequest('players', data);
};

const getAllPlayers = async () => {
    return await makeGetRequest('players');
};

const getAllPlayerPositions = async () => {
    return await makeGetRequest('player-positions');
};

const getWikiInfoForPlayer = async (playerName: string) => {
    return await makePostRequest('get-wikipedia-info', { playerName });
};

const deletePlayer = async (id: number) => {
    return await makeDeleteRequest(`players/${id}`);
};

const filterPlayers = async (data: any) => {
    return await makePostRequest('players/filter', data);
};

export {
    getAllPlayers,
    updatePlayer,
    createPlayer,
    getAllPlayerPositions,
    getWikiInfoForPlayer,
    deletePlayer,
    filterPlayers
};
