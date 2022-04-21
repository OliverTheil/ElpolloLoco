class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('Inhalte/img/5.Fondo/Capas/4.nubes/1.png');
        this.y = Math.random() * 80;
        this.x = Math.random() * 6000; 
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}

