class DrawableObject {
    img;
    imageCache = {};
    x = 120;
    y = 300;
    height = 150;
    width = 100;
    currentImage = 0;

    /**
     * loads single img
     * @param {string} path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * draws the different images.
     * @param {ctx} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * makes a new image for every img path 
     * @param {array} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * checks any collision 
     * @param {movableobject} mo 
     * @returns 
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 50;
    }

    isCollidingCoin(mo) {
        return this.x + this.width > mo.x + this.offsetForCoin.left &&
            this.y + this.height > mo.y + this.offsetForCoin.bottom &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 50;
    }

    offsetForCoin = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    }

    isCollidingBottle(mo) {
        return this.x + this.width > mo.x + this.offsetForBottle.left &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 50;
    }

    offsetForBottle = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    }
    
    /**
     * checks the collision with an enemies head
     * @param {movableobject} mo 
     * @returns 
     */
    isCollidingHead(mo) {
        return this.y + this.height > mo.y - this.offsetForHead.top &&
        this.x + this.width > mo.x + this.offsetForHead.left &&
        this.x + this.width < mo.x + mo.width + 50;
    }

    offsetForHead = {
        top: 10,
        bottom: 0,
        left: 20,
        right: 0
    }
}