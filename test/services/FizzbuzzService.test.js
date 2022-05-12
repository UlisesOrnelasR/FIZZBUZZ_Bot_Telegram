const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Pruebas para FizzbuzzService", () => {

    test("Test para que escriba como valor del trick, el score",() => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

        expect(explorer1).toEqual({name: "Explorer1", score: 1, trick: 1});
    });

    test("Test para cuando la llave de trick sea FIZZ  ", () => {
        const explorer2 = {name: "Explorer2", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer2);

        expect(explorer2).toEqual({name: "Explorer2", score: 3, trick: "FIZZ"});
    });

    test("Test para cuando la llave de trick sea BUZZ  ", () => {
        const explorer3 = {name: "Explorer3", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(explorer3).toEqual({name: "Explorer3", score: 5, trick: "BUZZ"});
    });

    test("Test para cuando la llave de trick sea BUZZ  ", () => {
        const Explorer4 = {name: "Explorer4", score: 15};
        FizzbuzzService.applyValidationInExplorer(Explorer4);

        expect(Explorer4).toEqual({name: "Explorer4", score: 15, trick: "FIZZBUZZ"});
    });

    test("Test para probar nuevo metodo de Fizzbuzz service con un numero", () => {
        const result = FizzbuzzService.applyValidationInNumber(9);

        expect(result).toBe("FIZZ");
    });
});