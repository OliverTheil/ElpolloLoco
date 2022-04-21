class CoinBar extends DrawableObject{

    IMAGES = [
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];


    percentage = 12;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 420;
        this.y = 10;
        this.height = 40;
        this.width = 160;
        this.setPercentage(12);
    }

        //setPercentage
        setPercentage(percentage) {
            this.percentage = percentage;   // => 0 ... 5
            let path = this.IMAGES[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    
        /**
         * updates the coinbar
         */
            resolveImageIndex() {
                if(this.percentage > 10) {
                    return 0;
            }   else if(this.percentage > 8 && this.percentage <= 10) {
                    return 1;
            }   else if(this.percentage > 6 && this.percentage <= 8) {
                    return 2;
            }   else if(this.percentage > 4 && this.percentage <= 6) {
                    return 3;
            }   else if(this.percentage >= 2 && this.percentage <= 4) {
                    return 4;
            }   else if(this.percentage < 2) {
                    return 5;
            }   else {
                    return 0;
            }
        }
}

