class Endboss extends MovableObject {
    height = 400;
    width = 350;
    y = 50;
    energy = 100;
    
    IMAGES_WALKING = [
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];

    IMAGES_ANGRY = [
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png'
    ]

    IMAGES_ATTACK = [
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G13.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G14.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G15.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G16.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G17.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G18.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G19.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/2.Ataque/G20.png'
    ]

    IMAGES_DEAD = [
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        'Inhalte/img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png'
    ]
    

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ANGRY);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 6500;
        this.checkEnergy();
        this.move();
    }

    /**
     * checks the hp of the endboss and plays the different images.
     */

    checkEnergy() {
        setInterval(() => {
            if(this.energy <= 0) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.energy > 0 && this.energy <= 50) {
                this.playAnimation(this.IMAGES_ANGRY);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            };
        }, 300);
    }


    /**
     * When the endboss gets angry. 
     */
    move() {
        setInterval(() => {
            if(this.energy < 80) {
                this.x -= 20;
                this.y -= 20;
                this.y += 20;
                this.x += 14;
            }
            if(this.x < 5000) {
                this.x += 40
            }
        }, 100);
    }

    /**
     * the functions behind the animations. normal > 50 hp, angry 1 - 50 hp and dead with 0 hp. 
     */
    animate(){
        if(this.energy >= 80) {
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALKING);
            }, 100);
        }
    }

    angry() {
        if(this.energy < 80) {
            setInterval(() => {
                this.playAnimation(this.IMAGES_ANGRY);
            }, 200);
        }
    }

    dead() {
        setInterval(() => {
            if(this.energy <= 0) {
                this.energy = 0;
                    this.playAnimation(this.IMAGES_DEAD);
            }
        }, 1000 / 60);
    }
}