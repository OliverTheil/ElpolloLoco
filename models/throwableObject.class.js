class ThrowableObject extends MovableObject {

    bottlesInInventory = level1.bottlesInInventory.length;
    breakBottle_Audio = new Audio('audio/breakbottle.mp3');

    brokenBottle = [
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'Inhalte/img/6.botella/Rotaciขn/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ]

    flipBottle = [
        'Inhalte/img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png',
        'Inhalte/img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 4.png',
        'Inhalte/img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 5.png',
        'Inhalte/img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 6.png',
    ]

    constructor(x, y) {
        super().loadImage('Inhalte/img/6.botella/Rotaciขn/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.flipBottle);
        this.loadImages(this.brokenBottle);
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 70;
        this.throw();
        this.checkThrow();
    }

    /**
     * checks if enough bottles are the inventory. If true, they flip and break. 
     */
    throw() {
        if(this.bottlesInInventory < 0) {
            this.bottlesInInventory = 0;
        };
        if(this.bottlesInInventory > 0) {
            setInterval(() => {
                this.playAnimation(this.flipBottle);
            }, 50);
            this.speedY = 30;
            this.applyGravitiy();
            setInterval(() => { 
                this.x += 8;
            }, 1000 / 60);
        }
    }

    checkThrow() {
        setInterval(() => {
            if(this.y >= 280) {
                this.y = 280;
                this.width = 160;
                this.height = 160;
                this.playAnimation(this.brokenBottle);
                setTimeout(() => {
                    this.x = -1000;
                }, 100);
            }
        }, 50);
        setTimeout(() => {
        this.breakBottle_Audio.play();
        }, 500);
    }
}