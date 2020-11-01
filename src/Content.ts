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
        res.write('<meta charset="UTF-8" />');
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Lottó</title>");
        res.write(
            '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">'
        );
        res.write(
            '<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossorigin="anonymous"></script>'
        );
        res.write("</head>");
        res.write('<body><div class="container-fluid m-3"><form>');
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->
        const div: string = '<div class="row align-items-center mb-3">';
        const col4: string = '<div class="col-4">';
        let Megold: Megoldas = new Megoldas("lottosz.dat");
        //1. feladat
        let be1: string = params.be1 as string;
        if (!be1) be1 = "";
        res.write(div);
        res.write(col4);
        res.write('<label for="fel1" class="col-form-label">1. feladat: Kérem az 52. hét lottó számait: </label></div>');
        res.write(col4);
        res.write(
            `<input type='text' id="fel1" class="form-control" name='be1' value='${be1}' onChange='this.form.submit();' pattern='/^[0-9]+[ ][0-9]+[ ][0-9]+[ ][0-9]+[ ][0-9]+$/'></div>`
        );
        res.write(col4);
        res.write('<span class="form-text">5 szám, szóközzel elválasztva 1-90-ig</span></div></div>');
        //2. feladat
        let szamok52: number[] = [];
        if (be1.split(" ").length == 5) be1.split(" ").forEach(x => szamok52.push(parseInt(x)));
        szamok52.sort((a, b) => a - b);
        Megold.add = szamok52;
        res.write(div);
        res.write('<div class="col-4">2. feladat: Rendezett számok:</div>');
        res.write(`<div class="col-4">${szamok52.join(" ")}</div></div>`);
        //3. feladat
        let be3Het: number = parseInt(params.be3 as string);
        if (isNaN(be3Het)) be3Het = 1;
        res.write(div);
        res.write(col4);
        res.write('<label for="fel3" class="col-form-label">3. feladat: Kérem egy hét sorszámát:</label></div>');
        res.write(col4);
        res.write(`<input type="text" id="fel3" class="form-control" name="be3" value="${be3Het}" onchange="this.form.submit();" /></div>`);
        res.write(col4);
        res.write('<span class="form-text">Egy hét száma 1-52-ig</span></div></div>');
        //4. feladat
        res.write(div);
        res.write(`<div class="col-4">4. feladat: A(z) ${be3Het}. heti nyerőszámok:</div>`);
        res.write(`<div class="col-4">${Megold.xHetiNyeroszamok(be3Het)}</div></div>`);
        //5. feladat
        res.write(div);
        res.write(`<div class="col-6">5. feladat: ${Megold.voltENemKihzottSzam ? "Volt" : "Nem volt"} nem kihúzott szám a vizsgált időszakban.</div></div>`);
        //6. feladat
        res.write(div);
        res.write('<div class="col-4">6. feladat: Páratlan számok a húzásokban:</div>');
        res.write(`<div class="col-4">${Megold.paratlanCount} db</div></div>`);
        //7. feladat
        Megold.filebaIr();
        //8. feladat
        res.write('<div class="row align-items-center mb-1"><div class="col-3">8. feladat: Lottószámok:</div></div>');
        res.write('<div class="row mb-1"><div class="col-4"></div><div class="col-4">');
        Megold.kihuzottSzamokStat.forEach((x, i) => {
            res.write(` ${x}`);
            if (i % 15 === 14) {
                res.write("</div></div>");
                if (i != 89) res.write('<div class="row mb-1"><div class="col-4"></div><div class="col-4">');
            }
        });
        //9. feladat
        res.write(div);
        res.write('<div class="col-4">9. feladat: Ki nem húzott prímek:</div>');
        res.write(`<div class="col-4">${Megold.kiNemHuzottPrimek.join(", ")} db</div></div>`);
        //GIT
        res.write('<div class="row align-items-center mb-3 mt-5">');
        res.write('<div class="col-4"><a href="https://github.com/csiszaralex/Lotto"><button type="button" class="btn btn-info">GitHub</button></a></div>');

        //Filek
        let filek: string[] = ["lottosz.dat", "lotto52.ki"];
        filek.forEach(x => {
            res.write(`<div class="col-4">
            <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${x.split(".")[0]}">${x}</button>
          </div>`);
        });
        res.write("</div>");
        filek.forEach(x => {
            res.write(`<div class="modal fade" id="${x.split(".")[0]}" tabindex="-1">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${x}</h5>
                  <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">`);
                res.write(`<table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Lottószámok</th>
                  </tr>
                </thead><tbody>`);

                fs.readFileSync(x)
                .toString()
                .split("\n")
                .forEach((y, i) => {
                    res.write(` <tr>
                    <th scope="row">${i+1}</th>
                    <td>${y}</td>
                  </tr>`);
                });

            res.write(`</tbody></table></div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Bezárás</button>
                </div>
              </div>
            </div>
          </div>`);
        });


        // <---- Fejezd be a kódolást

        res.write("</pre></form>");
        res.write("</body></html>");
        res.end();
    }
}
