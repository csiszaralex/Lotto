import Lotto from "../Lotto";

describe("Lottó osztály unit tesztjei: ", () => {
    const tesztLotto = new Lotto("1 2 3 4 5", 1);
    it("Számok ellenőrzése", async () => {
        expect(tesztLotto.szamokLista[0]).toBe(1);
        expect(tesztLotto.szamokLista[1]).toBe(2);
        expect(tesztLotto.szamokLista[2]).toBe(3);
        expect(tesztLotto.szamokLista[3]).toBe(4);
        expect(tesztLotto.szamokLista[4]).toBe(5);
    });
    it("Páratlan számok ellenőrzése", async () => {
        expect(tesztLotto.paratlanCount).toBe(3);
    });
    it("Elemek összekapcsolásának ellenőrzése", async ()=>{
      expect(tesztLotto.join(", ")).toBe("1, 2, 3, 4, 5");
    });
});
