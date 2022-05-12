const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Pruebas para la clase ExplorerService",() => {
    
    test("Prueba 1: Filtrando explorers por mission",() => {
        const explorers = Reader.readJsonFile("./test/data/ExplorerTestFile.json"); // esto regresa la lista de explorers del archivo
        const explorersNode = ExplorerService.filterByMission(explorers, "node");
        
        expect(explorersNode.length).toBe(10);
    });

    test("Prueba 2: Obteniendo cuántos explorers estan en la mission", () => {
        const explorers = Reader.readJsonFile("./test/data/ExplorerTestFile.json"); // esto regresa la lista de explorers del archivo
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(explorersInMission).toBe(10);
    });

    test("Prueba 3: Obteniendo los username de los explorers en la mission ", () => {
        const explorers = Reader.readJsonFile("./test/data/ExplorerTestFile.json"); // esto regresa la lista de explorers del archivo
        const ExplorersMissionNames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(ExplorersMissionNames[0]).toBe("ajolonauta1");
    });


});