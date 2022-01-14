import { serverConnect } from "../js/functions/Util/serverConnection.js";
import { Player } from "./player.js"

export class Game {
    constructor(id, turn, players = [], getPlayers = false) {
        this.id = id;
        this.turn = turn;
        this.players = (getPlayers == false) ? players : this.getPlayers(true);
        this.is_running = true;
    }

    async addGame() {
        await serverConnect(`POST`, `/addGame`, `turn=${this.turn}`).then(
            (id) => {
                this.id = id;
            }
        );
    }

    async updateGameObject() {
        var game = await this.getGame();
        this.turn = game.turn;

        var players = await this.getPlayers();

        for(let i=0; i<players.length; i++){
            this.players[i] = new Player (players[i].id, players[i].username, players[i].player_no, this.id)
            await this.players[i].updatePlayerObject();
        }
            
    }

    async updateTurn() {
        await serverConnect(`GET`, `/updateTurn`, `id=${this.id}&turn=${this.turn}`).then(
            (newTurn) => {
                this.turn = newTurn;
            }
        );
    }

    async getGame() {
        return await serverConnect(`GET`, `/getGame`, `id=${this.id}`);
    }

    async deleteGame() {
        await serverConnect(`GET`, `/deleteGame`, `id=${this.id}`);
    }

    async getTurn() {
        return await serverConnect(`GET`, `/getTurn`, `id=${this.id}`);
    }

    async addPlayer(username, player_no) {
        await serverConnect(`POST`, `/addPlayer`, `username=${username}&player_no=${player_no}&game_id=${this.id}`).then(
            (player) => {
                this.players.push(new Player (player.id, player.username, player.player_no, player.game_id))
            }
        );
    }

    async getPlayers() {
        return await serverConnect(`GET`, `/getPlayers`, `game_id=${this.id}`);
    }

    async getPlayerCount() {
        return await serverConnect(`GET`, `/getPlayerCount`, `game_id=${this.id}`).then(
            (value) => {
                return value;
            }
        )
    }

    async addLog(text) {
        await serverConnect(`POST`, `/addLog`, `text=${text}`);
    }
}