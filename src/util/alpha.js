class Alpha {
    static colors = [
        'Black',
        'Red',
        'Green',
        'Yellow',
        'Blue',
        'Magenta',
        'Cyan',
        'White',
    ];
    constructor() {
        this.line = parseInt(Math.random() * 20) + 1;
        this.column = parseInt(Math.random() * 40) + 1;
        do {
            this.fg = Alpha.colors[parseInt(Math.random() * 8)];
            this.bg = Alpha.colors[parseInt(Math.random() * 8)];
        } while (this.fg == this.bg);

        this.ch = String.fromCharCode(Math.random() * 26 + 'A'.charCodeAt(0));
    }
}

export default Alpha;
