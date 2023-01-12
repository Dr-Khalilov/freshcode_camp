class FableSquirrel extends FlyingSquirrel {
    constructor(name, maxDistance, songs) {
        super(name, maxDistance);
        this.#songs = songs;
    }

    dance() {
        return `${this.#name} is dancing`;
    }

    sang() {
        this.#songs.forEach(song => console.log(song));
    }

    climb() {
        throw new Error('Сказочная белка по деревьям не лазает!');
    }

}
const bat = new FableSquirrel('Teil', 500, ['song1', 'song2']);