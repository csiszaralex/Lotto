import Lotto from "./Lotto";
import fs from "fs";

export default class Megoldas {
    private lottoSzamok: Lotto[] = [];
    
    /**
     * @param  {string} allomanyNeve
     */
    constructor(allomanyNeve: string);
    /**
     * @param  {string} adatokBe
     * @param  {boolean} tesztE
     */
    constructor(adatokBe: string, tesztE: boolean);
    
   
    constructor(adat: string, teszt?: boolean) {
        if (teszt == undefined) {
            fs.readFileSync(adat)
                .toString()
                .split("\n")
                .forEach((x, i) => {
                    const fileSora: string = x.trim();
                    this.lottoSzamok.push(new Lotto(fileSora, i + 1));
                });
        } else {
            adat.split(";").forEach((x, i) => {
                const adatSor: string = x.trim();
                this.lottoSzamok.push(new Lotto(adatSor, i + 1));
            });
        }
    }

    /**
     * @param  {number[]} ujAdat
     */
    public set add(ujAdat: number[]) {
        this.lottoSzamok.push(new Lotto(ujAdat.join(" "), 52));
    }

    /**
     * @returns boolean
     */
    public get voltENemKihzottSzam(): boolean {
        let szamokStat: boolean[] = new Array(90);
        szamokStat.fill(false);
        this.lottoSzamok.forEach(x => {
            x.szamokLista.forEach(y => {
                szamokStat[y - 1] = true;
            });
        });
        return szamokStat.filter(x => x == false).length > 0;
    }

    /**
     * @returns number
     */
    public get kihuzottSzamokStat(): number[] {
        let szamokStat: number[] = new Array(90).fill(0);
        this.lottoSzamok.forEach(x => {
            x.szamokLista.forEach(y => {
                szamokStat[y - 1]++;
            });
        });
        return szamokStat;
    }

    /**
     * @returns number
     */
    public get kiNemHuzottPrimek(): number[] {
        let primek: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];
        let kiPrimek: number[] = [];
        this.kihuzottSzamokStat.forEach((x, i) => {
            if (x === 0 && primek.includes(i + 1)) kiPrimek.push(i + 1);
        });
        return kiPrimek;
    }

    /**
     * @returns number
     */
    public get paratlanCount(): number {
        let paratlanDb = 0;
        this.lottoSzamok.forEach(x => {
            paratlanDb += x.paratlanCount;
        });
        return paratlanDb;
    }

    /**
     * @returns void
     */
    public filebaIr(): void {
        let kimenet: string[] = [];
        this.lottoSzamok.forEach(x => {
            kimenet.push(x.join(" "));
        });
        fs.writeFileSync("lotto52.ki", kimenet.join("\r\n"));
    }

    /**
     * @param  {number} hetSrsz
     * @returns string
     */
    public xHetiNyeroszamok(hetSrsz: number): string {
        return this.lottoSzamok[hetSrsz-1].join(" ");
    }
}
