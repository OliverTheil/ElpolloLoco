class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  run = true;
  throwableObjects = [];
  endbossHealthbarImg = new EndbossHealthbarImg();
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  tabascoBar = new TabascoBar();
  endbossHealthbar = new EndbossHealthbar();

  /**
   * All Sounds of the game.
   */
  music_sound = new Audio("audio/music.mp3");
  collectCoin_sound = new Audio("audio/coin.mp3");
  collectBottle_sound = new Audio("audio/bottle.mp3");
  hurt_sound = new Audio("audio/hurt.mp3");
  win_sound = new Audio("audio/win.mp3");
  music_endboss = new Audio("audio/bossmusic.mp3");
  chicken1_sound = new Audio("audio/chicken1.mp3");
  chicken2_sound = new Audio("audio/chicken2.mp3");
  win_sound = new Audio("audio/win.mp3");

  /**
   * The constructor of the el pollo loco world. It loads and draws all objects + checks all different collisions etc.
   * @param {value} canvas
   * @param {input} keyboard
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.keyboard = keyboard;
    this.canvas = canvas;
    this.createWorld();
    this.enableEndbossHealthbar();
    this.draw();
    this.setWorld();
    this.checkCollisionsOfObjects();
    this.checkCollisions();
    this.checkCollectCoin();
    this.flipBottlesImg();
    this.checkEndboss();
    this.playSounds();
    this.checkGameStatus();
  }

  /**
   * This function creates all the objects and their quantity
   * You can customize every amount of an object.
   */
  createWorld() {
    for (let i = 0; i <= 10; i++) {
      this.level.clouds.push(new Cloud());
    }

    for (let coinNum = 0; coinNum <= 11; coinNum++) {
      this.level.coins.push(new Coin());
    }

    for (let chickenNum = 0; chickenNum <= 12; chickenNum++) {
      this.level.enemies.push(new Chicken());
    }

    for (let bottleNum = 0; bottleNum <= 7; bottleNum++) {
      this.level.bottles.push(new Bottle());
    }
  }

  /**
   * Flips every second bottle. With the filter we choose every second bottle of the bottles-array.
   */
  flipBottlesImg() {
    const second = (bottles, sec) =>
      bottles.filter((e, i) => i % sec === sec - 1);

    second(this.level.bottles, 2).forEach((element) => {
      element.img.src = "Inhalte/img/6.botella/2.Botella_enterrada2.png";
    });
  }

  /**
   * checks different collision-functions. They are all with a different intervall. Here we have the collisions of the different items:
   */
  checkCollisionsOfObjects() {
    setInterval(() => {
      this.checkThrowObjects();
    }, 1000);

    setInterval(() => {
      this.checkCollectCoin();
      this.checkCollectBottle();
    }, 100);
  }

  /**
   * checks if the character has a bottle in his inventory. If the inventory is empty it's not possible to throw a bottle.
   * if a bottle collides with the character, the bottle get pushed in the bottleinventory.
   * if a bottle collides with an enemy, the energy falls.
   */
  checkThrowObjects() {
    if (this.keyboard.THROW && this.level.bottlesInInventory.length > 0) {
      let bottle = new ThrowableObject(
        this.character.x + 50,
        this.character.y + 80
      );
      this.throwableObjects.push(bottle);
      this.level.bottlesInInventory.splice(0, 1);
      this.tabascoBar.setPercentage(this.level.bottlesInInventory.length);
      setInterval(() => {
        this.level.enemies.forEach((enemy, indexEnemy) => {
          if (bottle.isColliding(enemy)) {
            this.level.enemies[indexEnemy].energy -= 2;
          }
          if (this.level.enemies[indexEnemy].energy <= 0) {
            this.level.enemies[indexEnemy].energy = 0;
          }
        });
      }, 1000 / 60);
    }
  }

  /**
   * checks a collision with an enemy.
   * The intervall-collision-time of the character and an enemy is very long.
   * That makes it easier to survive longer.
   */
  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy, indexEnemy) => {
        if (
          this.character.isCollidingHead(enemy) &&
          this.character.y + this.character.height < 420
        ) {
          this.level.enemies[indexEnemy].energy -= 1;
        }
      });
    }, 1000 / 60);

    setInterval(() => {
      this.level.enemies.forEach((enemy, indexEnemy) => {
        if (
          this.character.isColliding(enemy) &&
          this.level.enemies[indexEnemy].energy > 0 &&
          this.run == true
        ) {
          this.character.hit();
          this.hurt_sound.play();
          this.statusBar.setPercentage(this.character.energy);
        }
      });
    }, 200);
  }

  /**
   * checks if the character collects a coin or a bottle
   */
  checkCollectCoin() {
    this.level.coins.forEach((coin, indexCoins) => {
      if (this.character.isCollidingCoin(coin) && this.run == true) {
        this.collectCoin_sound.play();
        this.level.coins.splice(indexCoins, 1);
        this.coinBar.setPercentage(this.level.coins.length);
      }
    });
  }

  checkCollectBottle() {
    this.level.bottles.forEach((bottle, indexBottles) => {
      if (this.character.isCollidingBottle(bottle) && this.run == true) {
        this.collectBottle_sound.play();
        this.level.bottlesInInventory.push(bottle);
        this.level.bottles.splice(indexBottles, 1);
        this.tabascoBar.setPercentage(this.level.bottlesInInventory.length);
      }
    });
  }

  setWorld() {
    this.character.world = this;
  }

  /**
   * the draw function. it draws every object in the canvas.
   */
  draw() {
    if (this.run == true) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.camera_x, 0);
      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);
      this.ctx.translate(-this.camera_x, 0);
      this.addToMap(this.statusBar);
      this.addToMap(this.coinBar);
      this.addToMap(this.tabascoBar);
      this.addToMap(this.endbossHealthbar);
      this.addToMap(this.endbossHealthbarImg);
      this.ctx.translate(this.camera_x, 0);
      this.addToMap(this.character);
      this.addObjectsToMap(this.level.enemies);
      this.addObjectsToMap(this.level.coins);
      this.addObjectsToMap(this.level.bottles);
      this.addObjectsToMap(this.throwableObjects);
      this.ctx.translate(-this.camera_x, 0);

      self = this;
      requestAnimationFrame(function () {
        self.draw();
      });
    } else if (this.run == false) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }
  }

  /**
   *
   * @param {object} objects Every object get drawn in canvas with addToMap and the forEach loop.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds the object to the canvas. If the image shows in the other direction (like our character which can turn left or right) it turns in the right
   * direction.
   * @param {movableobject} mo
   */

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * checks the health of the endboss and updates the healthbar of the boss.
   * If the energy falls to 0 the endboss gets a width of 0.
   */
  checkEndboss() {
    setInterval(() => {
      if (this.character.x >= 5500 && this.run == true) {
        this.endbossHealthbar.loadImages(
          this.endbossHealthbar.HEALTHBAR_IMAGES
        );
      }

      if (this.level.enemies[0].energy <= 0) {
        setTimeout(() => {
          this.level.enemies.width = 0;
        }, 1000);
      }
    }, 200);
  }

  enableEndbossHealthbar() {
    setInterval(() => {
      this.endbossHealthbar.setEnergy(this.level.enemies[0].energy);
      if (this.endbossHealthbar.energy <= 0) {
        this.endbossHealthbar.width = 0;
        this.endbossHealthbarImg.width = 0;
      } else if (this.character.x > 5000) {
        this.endbossHealthbar.width = 320;
        this.endbossHealthbarImg.width = 110;
      }
    }, 300);
  }

  /**
   * checks the game status - enables the endscreen
   */
  checkGameStatus() {
    setInterval(() => {
      if (this.character.energy <= 0) {
        removeKeyboard();
        enableEndscreenLost();
        this.run = false;
      } else if (this.level.enemies[0].energy <= 0) {
        removeKeyboard();
        enableEndscreenWon();
        this.run = false;
      }
    }, 500);
  }

  /**
   * the functions which play the different sounds.
   */
  playSounds() {
    this.music_sound.play();
    this.music_sound.volume = 0.01;
    this.chickenSounds();
    this.endbossSound();
    setInterval(() => {
      if (this.run == false) {
        this.music_sound.pause();
        this.music_endboss.pause();
      }
    }, 200);
  }

  chickenSounds() {
    setInterval(() => {
      if (this.run == true) {
        this.chicken1_sound.volume = 0.02;
        this.chicken1_sound.play();
      }
    }, 13000);

    setInterval(() => {
      if (this.run == true) {
        this.chicken2_sound.volume = 0.02;
        this.chicken2_sound.play();
      }
    }, 10000);
  }

  endbossSound() {
    setInterval(() => {
      if (this.character.x >= 5500 && this.run == true) {
        this.music_sound.pause();
        this.music_endboss.play();
        this.music_endboss.volume = 0.05;
      } else if (this.run) {
        this.music_sound.play();
      }
    }, 200);

    setInterval(() => {
      if (this.level.enemies[0].energy <= 5 && this.run == true) {
        this.music_endboss.pause();
        this.win_sound.play();
        this.win_sound.volume = 0.05;
      }
    }, 1000 / 60);
  }
}
