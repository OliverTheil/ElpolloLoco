class Level {
    coins;
    bottles;
    bottlesInInventory;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 6800;

    constructor(coins, bottles, bottlesInInventory, enemies, clouds, backgroundObjects) {
        this.coins = coins;
        this.bottles = bottles;
        this.bottlesInInventory = bottlesInInventory;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}