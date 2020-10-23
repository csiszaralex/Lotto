import Lotto from "./Lotto";
import fs from "fs";

export default class Megoldas {
    private lottoSzamok: Lotto[] = [];

    /**
     * @param  {string} allomanyNeve
     */
    constructor(allomanyNeve: string) {
        fs.readFileSync(allomanyNeve)
            .toString()
            .split("\n")
            .forEach((x, i) => {
                const fileSora: string = x.trim();
                this.lottoSzamok.push(new Lotto(fileSora, i));
            });
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

    //9.es

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
        return this.lottoSzamok[hetSrsz - 1].join(" ");
    }
}
