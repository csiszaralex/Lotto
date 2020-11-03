import Megoldas from "../Megoldas";

describe("Megoldás osztály unit tesztek: ", ()=>{
  const tesztMegoldas: Megoldas = new Megoldas("1 1 3 4 5;7 8 9 10 11;2 13 17 19 23;29 31 37 41 43 47;53 59 61 67 71", true);
  it("Volt e nem kihúzott szám", async ()=>{
    expect(tesztMegoldas.voltENemKihzottSzam).toBe(true);
  });
  it("Kihúzott számok ellenőrzése", async ()=>{
    expect(tesztMegoldas.kihuzottSzamokStat).toEqual(
      [2,1,1,1,1,0,1,1,1,1,
       1,0,1,0,0,0,1,0,1,0,
       0,0,1,0,0,0,0,0,1,0,
       1,0,0,0,0,0,1,0,0,0,
       1,0,1,0,0,0,1,0,0,0,
       0,0,1,0,0,0,0,0,1,0,
       1,0,0,0,0,0,1,0,0,0,
       1,0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,0]
    );
  });
  it("Ki nem húzott prímek", async()=>{
    expect(tesztMegoldas.kiNemHuzottPrimek).toEqual(
      expect.arrayContaining([73,79,83,89]),
    );
  });
  it("Páratlan darab", async()=>{
    expect(tesztMegoldas.paratlanCount).toBe(22);
  });
  it("2. heti nyeroszamok", async()=>{
    expect(tesztMegoldas.xHetiNyeroszamok(2)).toBe("7 8 9 10 11");
  });
});