import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Lottó</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->
        let Megold: Megoldas = new Megoldas("lottosz.dat");
        //1. feladat
        let be1: string = params.be1 as string;
        if (!be1) be1 = "";
        res.write(`1. feladat: Kérem az 52. hét lottó számait: <input type='text' name='be1' value='${be1}' style='max-width:100px;' onChange='this.form.submit();' pattern='/^[0-9]+[ ][0-9]+[ ][0-9]+[ ][0-9]+[ ][0-9]+$/'>\n`);
        //2. feladat
        let szamok52: number[] = [];
        if (be1.split(" ").length == 5) be1.split(" ").forEach(x => szamok52.push(parseInt(x)));
        szamok52.sort((a, b) => a - b);
        Megold.add = szamok52;
        res.write("2. feladat: Rendezett számok: " + szamok52.join(" ") + "\n");
        //3. feladat
        let be3Het: number = parseInt(params.be3 as string);
        if (isNaN(be3Het)) be3Het = 0;
        res.write(`3. feladat: Kérem egy hét sorszámát: <input type='text' name='be3' id='be3'  style='max-width:300px;' class='form-control' value='${be3Het}' onChange='this.form.submit();'>\n`);
        //4. feladat
        res.write(`4. feladat: A(z) ${be3Het}. heti nyerőszámok: ${Megold.xHetiNyeroszamok(be3Het)}\n`);
        //5. feladat
        res.write(`5. feladat: ${Megold.voltENemKihzottSzam ? "Volt" : "Nem volt"} nem kihúzott szám a vizsgált időszakban.\n`);
        //6. feladat
        res.write(`6. feladat: Páratlan számok a hűzásokban: ${Megold.paratlanCount} db\n`);
        //7. feladat
        Megold.filebaIr();
        //8. feladat
        res.write("8. feladat:\n");
        Megold.kihuzottSzamokStat.forEach((x, i) => {
            res.write(`&nbsp;${i+1} - ${x}\n`);
        });

        // <---- Fejezd be a kódolást

        res.write("</pre></form>");
        res.write("</body></html>");
        res.end();
    }
}
