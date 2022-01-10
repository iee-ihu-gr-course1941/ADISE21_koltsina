import { serverConnect } from "../js/functions/Util/serverConnection.js";

export class Card {
    constructor(id, card_number, card_shape, in_hand, player_id) {
        this.id = id;
        this.card_number = card_number;
        this.card_shape = card_shape;
        this.in_hand = in_hand;
        this.player_id = player_id;
    }

    // async changeOwnership(owner) {
    //     await serverConnect(`GET`, `/updateDeck`, `deck=${this}&player_id=${owner}`).then(
    //         (newOwner) => {
    //             this.player_no = newOwner;
    //         }
    //     );
    // }

    async updateCard() {
        await serverConnect(`GET`, `/updateCard`, `id=${this.id}&in_hand=${this.in_hand}&player_id=${this.player_id}`).then(
            async () => {
                await this.updateCardObject()
            }
        );
    }

    async updateCardObject() {
        var card = await this.getCard();
        this.in_hand = card.in_hand;
        this.player_id = card.player_id;
    }

    async getCard() {
        return await serverConnect(`GET`, `/getCard`,`id=${this.id}`);
    }
}