class Bottle extends collectibleItems{
    height = 90;
    width = 90;

    constructor() {
        super().loadImage('Inhalte/img/6.botella/2.Botella_enterrada1.png');
        this.x = Math.random() * 5500 + 500;
        this.y = 340;
    }
}