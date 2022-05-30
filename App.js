class App {

    #totalBible = 1;
    #totalBibleLimit = 4;

    constructor() {

    }

    _loadGrid() {

    }

    _addBible() {
        if (this.#totalBible < this.#totalBibleLimit) {
            this.#totalBible += 1;
        }
    }
}