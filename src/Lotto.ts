export default class Lotto {
    private _het: number;
    private _szamok: number[] = [];

    /**
     * @param  {string} fileSora
     * @param  {number} hetSrsz
     */
    constructor(fileSora: string, hetSrsz: number) {
        const adatok: string[] = fileSora.split(" ");
        adatok.forEach(x => {
            this._szamok.push(parseInt(x));
        });
        this._het = hetSrsz;
    }

    /**
     * @returns Number
     */
    public get szamokLista(): number[] {
        return this._szamok;
    }

    /**
     * @returns number
     */
    public get paratlanCount(): number {
        return this._szamok.filter(x => x % 2 === 1).length;
    }

    /**
     * @param  {string} szeparator
     * @returns string
     */
    public join(szeparator: string): string {
        return this._szamok.join(szeparator);
    }
}
