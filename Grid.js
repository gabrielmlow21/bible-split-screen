class Grid {
    constructor() {
        this.bibleCount = 1;
        this.bibleCountLimit = 4;
        this.bibleContainers = [];
    }

    addBibleVerse(bible) {
        if (this.bibleCount > this.bibleCountLimit) {
            return
        }
    }

    removeBibleVerse() {
        if (this.bibleCount === 1) {
            return
        }
    }
}