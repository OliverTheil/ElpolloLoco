class StatusBar extends DrawableObject {

    IMAGES = [
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 10;
        this.height = 40;
        this.width = 160;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * updates the statusbar 
     */
        resolveImageIndex() {
            if(this.percentage == 100) {
                return 5;
        }   else if(this.percentage > 80) {
                return 4;
        }   else if(this.percentage > 60) {
                return 3;
        }   else if(this.percentage > 40) {
                return 2;
        }   else if(this.percentage > 20) {
                return 1;
        }   else {
                return 0;
        }
 
        }
}
