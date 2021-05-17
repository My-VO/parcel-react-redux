class App {
    constructor(name) {
        this.name = name;
    }
}

const main = async () => {
    const bar = new App('E-brairie');

    console.log(bar);
}

main();