class Chicken extends MovableObject{
    height = 60;
    width = 60;
    y = 360;
    energy = 1;
    IMAGES_WALKING = [
        'Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGE_DEAD = [
        'Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    chicken1_sound = new Audio('audio/chicken1.mp3');
    chicken2_sound = new Audio('audio/chicken2.mp3');

    constructor() {
        super().loadImage('Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = Math.random() * 6000;
        this.speed = 0.10 + Math.random() * 1.1;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            if(this.energy <= 0) {
                this.energy = 0;
                this.speed = 0;
                this.loadImage('Inhalte/img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png');
                this.playAnimation(this.IMAGE_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }
}