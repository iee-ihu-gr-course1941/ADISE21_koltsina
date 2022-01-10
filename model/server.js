import { serverConnect } from "../js/functions/Util/serverConnection.js";

export class Server {
    constructor() {}

    async getGames() {
        return await serverConnect(`GET`, `/getGames`);
    }

}