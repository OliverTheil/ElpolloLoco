class Coin extends collectibleItems{
    height = 120;
    width = 120;
    y = 300;
    x = 300;

    constructor() {
        super().loadImage('Inhalte/img/8.Coin/Moneda1.png');
        this.x = Math.random() * 5500 + 500;
        this.y = Math.random() * 300 + 50;
    }
}