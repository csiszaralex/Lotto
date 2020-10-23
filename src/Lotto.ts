// 5 db 1-90 emelkedő
export default class Lotto {
    private het: number;
    private szamok: number[] = [];

    /**
     * @param  {string} fileSora
     * @param  {number} hetSrsz
     */
    constructor(fileSora: string, hetSrsz: number) {
        const adatok: string[] = fileSora.split(" ");
        adatok.forEach(x => {
            this.szamok.push(parseInt(x));
        });
        this.het = hetSrsz;
    }

    /**
     * @returns Number
     */
    public get szamokLista(): number[] {
        return this.szamok;
    }

    /**
     * @returns number
     */
    public get paratlanCount(): number {
        return this.szamok.filter(x => x % 2 === 0).length;
    }

    /**
     * @param  {string} szeparator
     * @returns string
     */
    public join(szeparator: string): string {
        return this.szamok.join(szeparator);
    }
}
