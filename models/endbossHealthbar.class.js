class EndbossHealthbar extends DrawableObject {

    HEALTHBAR_IMAGES = [
        '',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/Naranja/20.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
    ];

    energy = 100;

    constructor() {
        super();
        this.loadImages(this.HEALTHBAR_IMAGES);
        this.x = 200;
        this.y = 380;
        this.height = 100;
        this.width = 0;
        this.setEnergy(100);
    }

    /**
     * @param  {} energy
     */
    setEnergy(energy) {
        this.energy = energy;
        let path = this.HEALTHBAR_IMAGES[this.setHealthbar()];
        this.img = this.imageCache[path];
    }

    /**
     * Changes the endboss hp-bar. 
     */
    setHealthbar() {
        if(this.energy >= 100) {
            return 5;
        } else if(this.energy < 100 && this.energy >= 80) {
            return 4;
        } else if(this.energy < 80 && this.energy >= 60) {
            return 3;
        } else if(this.energy < 60 && this.energy >= 40) {
            return 2;
        } else if(this.energy < 40 && this.energy > 0) {
            return 1;
        } else if(this.energy <= 0) {
            return 0;
        }
    }
}