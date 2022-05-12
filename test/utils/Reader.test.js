const Reader = require("./../../lib/utils/Reader");

describe("Pruebas para la clase Reader", () => {
    test("Probando el método para leer un archivo", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);
    });

});