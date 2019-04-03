
describe("Calculator", function() {

    beforeEach(() => {
        calc = new Calculator;
    });

    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });

        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

    describe("multiplication tests", function() {
        it("should return 28", function() {
            calc.prod(4);
            calc.prod(7);
            expect(calc.value).toBe(28);
        });
    });
});

//Step one - when adding a new feature, start with a rule that breaks


