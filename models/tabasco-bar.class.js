class TabascoBar extends DrawableObject{

    IMAGES = [
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'Inhalte/img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];


    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 220;
        this.y = 10;
        this.height = 40;
        this.width = 160;
        this.setPercentage(0);
    }

        //setPercentage
        setPercentage(percentage) {
            this.percentage = percentage;   // => 0 ... 5
            let path = this.IMAGES[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    

        /**
         * updates the tabascobar 
         */ 
            resolveImageIndex() {
                if(this.percentage <= 0) {
                    return 0;
            }   else if(this.percentage > 0 && this.percentage <= 2) {
                    return 1;
            }   else if(this.percentage > 2 && this.percentage <= 4) {
                    return 2;
            }   else if(this.percentage > 4 && this.percentage <= 6) {
                    return 3;
            }   else if(this.percentage > 6 && this.percentage <= 7) {
                    return 4;
            }   else if(this.percentage > 7) {
                    return 5;
            }   else {
                    return 0;
            }
        }
}