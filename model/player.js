import { serverConnect } from "../js/functions/Util/serverConnection.js";
import { Card } from "./card.js"

export class Player {
    constructor(id, username, player_no, game_id, cards = [], getDeck = false)  {
        this.id = id;
        this.username = username;
        this.player_no = player_no;
        this.game_id = game_id;
        this.cards = (getDeck == false) ? cards : this.getDeck();
        this.can_play = true;
    }


    async addPlayer() {
        await serverConnect(`POST`, `/addPlayer`, `username=${this.username}&player_no=${this.player_no}&game_id=${this.game_id}`).then(
            () => {
                this.addDeck();
            }
        );
    }

    async updatePlayer() {
        await serverConnect(`GET`, `/updatePlayer`, `username=${this.username}&player_no=${this.player_no}&id=${this.id}`).then(
            async () => {
                await this.updatePlayerObject();
            }
        );
    }

    async updatePlayerObject() {
        var player = await this.getPlayer();

        this.username = player.username;
        this.player_no = player.player_no;
        this.game_id = player.game_id;

        var deck = await this.getDeck();
        if(deck == 0){
            this.cards = [];
            return;
        }

        for(let i=0; i<deck.length; i++){
            this.cards[i] = new Card (deck[i].id, deck[i].card_number, deck[i].card_shape, deck[i].in_hand, this.id)
            await this.cards[i].updateCardObject()
        }
    }

    async getPlayer() {
        return await serverConnect(`GET`, `/getPlayer`,`id=${this.id}`);
    }

    async addDeck(deck) {
        await serverConnect(`POST`, `/addDeck`, `deck=${JSON.stringify(deck)}&in_hand=${0}&player_id=${this.id}`);
    }

    async getDeck(in_hand = -1, number_of_cards = 0) {
        return await serverConnect(`GET`, `/getDeck`, `player_id=${this.id}&in_hand=${in_hand}&number_of_cards=${number_of_cards}`);
    }

}