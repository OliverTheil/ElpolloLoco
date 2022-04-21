class Character extends MovableObject{
height = 250;
y = 170;
    x = 500;
    speed = 4;
    inactivity = 0;
    lastAction = 0;

    IMAGES_WALKING = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    
    IMAGES_IDLE = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-2.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-1.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-3.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-4.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-5.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-6.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-7.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-8.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-9.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/IDLE/I-10.png'
    ]

    IMAGES_IDLE_LONG = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-11.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-12.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-13.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-14.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-15.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-16.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-17.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-18.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-19.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/1.IDLE/LONG_IDLE/I-20.png',
    ]

    IMAGES_JUMPING = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_DEAD = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png'
    ];

    IMAGES_HURT = [
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png',
    ];

    world;
    walking_sound = new Audio('audio/running.mp3');

    constructor() {
        super().loadImage('Inhalte/img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.applyGravitiy();
        this.animate();
        this.timeToSleep();
    }

    animate() {
        this.checkInactivity();
        this.enableCharacterAnimations();
        this.characterMovement();
    }
    /**
     * checks 5sec if a button get pressed. After 5sec inactivity the character falls in idle mode (timetosleep). 
     */
    checkInactivity() {
        setTimeout(() => {
            setInterval(() => {
                this.inactivity = new Date().getTime() - this.lastAction;
                if(this.inactivity > 5000) {
                    this.playAnimation(this.IMAGES_IDLE_LONG);
                }
            }, 100);
        }, 5000);
    }

    /**
     * when a special status is active one of the different animations were drawn. 
     */
    enableCharacterAnimations() {
        setInterval(() => {            
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT && !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
    }

    /**
     * The movement of the character
     */
    characterMovement() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
            } 
            if (this.world.keyboard.LEFT && this.x > 400) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.walking_sound.play();
            } else {
                this.walking_sound.pause();
            }
            if((this.world.keyboard.SPACE || this.world.keyboard.UP) && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x +100;
        }, 1000 / 60);
    }

    /**
     * if the player dont push any button, the character falls in idle mode
     */
    timeToSleep() {
        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN || 
                this.world.keyboard.SPACE || this.world.keyboard.THROW || this.isAboveGround() || this.isHurt() || this.isDead()) {
                this.lastAction = new Date().getTime();
             }
        }, 100);
    }
    
}