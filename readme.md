# Lotto

## TypeScript-ben megvalósítva

    2005. május 19.-ei emelt közismereti informatika érettségi programozás feladata

## Heroku teszt:

[Heroku][heroku]

## A. Feladatok: [PDF][feladat]

1. feladat: Kérje be a felhasználótól az 52. hét megadott lottószámait!

2. feladat: A program rendezze a bekért lottószámokat emelkedő sorrendbe! A rendezett számokat írja ki a képernyőre!

3. feladat: Kérjen be a felhasználótól egy egész számot 1-51 között! A bekért adatot nem kell ellen-őrizni!

4. feladat: Írja ki a képernyőre a bekért számnak megfelelő sorszámú hét lottószámait, a _lottosz.dat_ állományban lévő adatok alapján!

5. feladat: A _lottosz.dat_ állományból beolvasott adatok alapján döntse el, hogy volt-e olyan szám, amit egyszer sem húztak ki az 51 hét alatt! A döntés eredményét (Van/Nincs) írja ki a képernyőre!

6. feladat: A _lottosz.dat_ állományban lévő adatok alapján állapítsa meg, hogy hányszor volt pá-ratlan szám a kihúzott lottószámok között! Az eredményt a képernyőre írja ki!

7. feladat: Fűzze hozzá a _lottosz.dat_ állományból beolvasott lottószámok után a felhasználótól bekért, és rendezett 52. hét lottószámait, majd írja ki az összes lottószámot a lotto52.kiszöveges fájlba! A fájlban egy sorba egy hét lottószámai kerüljenek, szóközzel elválasztva egymástól!

8. feladat: Határozza meg a lotto52.ki állomány adatai alapján, hogy az egyes számokat hányszor húzták ki 2003-ban. Az eredményt írja ki a képernyőre a következő formában: az első sor első eleme az a szám legyen ahányszor az egyest kihúzták! Az első sor második eleme az az érték legyen, ahányszor a kettes számot kihúzták stb.!

    - Annyit biztosan tudunk az érté-kekről, hogy mindegyikük egyjegyű.

9. feladat: Adja meg, hogy az 1-90 közötti prímszámokból melyiket nem húzták ki egyszer sem az elmúlt évben. - A feladat megoldása során az itt megadott prímszámokat felhasználhatja vagy előállíthatja!
   -2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89

## B. Javítási útmutató: [PDF][pontozas]

| Feladat | Pont | Leírás                                                                                |
| ------- | ---- | ------------------------------------------------------------------------------------- |
| 1       | 1    | Legalább egy lottószámot bekért a felhasználótól                                      |
|         | 1    | Mind az 5 lottószámot bekérte, a számokat változókban tárola                          |
| 2       | 1    | A rendezés után a legkisebb szám áll az első helyen                                   |
|         | 2    | A további számsorrend is jó                                                           |
|         | 1    | Legalább egy 52. heti lottószámot kiírt a képernyőre                                  |
|         | 1    | Mind az 5 számot kiírta a képernyőre                                                  |
| 3       | 1    | A hét számának bekérése                                                               |
| 4       | 1    | Meg tudta nyitni a fájlt                                                              |
|         | 1    | Kiolvasta az első sorban lévő 5 lottószámot                                           |
|         | 1    | Ezt tárolta egy változóban                                                            |
|         | 1    | Kiolvasta a fájl 51 sorából a lottószámokat                                           |
|         | 1    | Eltárolta az 51 hét lottószámait egy változóban                                       |
|         | 1    | Meg tudta határozni a megadott hét számait                                            |
|         | 1    | Kiírta a képernyőre a megadott hét 5 lottószámát                                      |
| 5       | 2    | Egy számnál megszámolta, hányszor húzták ki                                           |
|         | 2    | Mindegyik számra elvégezte a megszámolást, vagy az első nem előforduló számig számolt |
|         | 1    | Kiírta a képernyőre, hogy volt-e vagy sem olyan szám, amit egyszer sem húztak ki      |
| 6       | 1    | Egy számnál megszámolta, hányszor húzták ki                                           |
|         | 2    | Minden (vagy csak a páratlan) számnál megszámolta az elő-fordulások számát            |
|         | 1    | A páratlan számokra kapott értékeket összegezte                                       |
|         | 1    | Kiírta a képernyőre, hogy hány darab páratlan szám volt                               |
| 7       | 1    | Létrehozta a _lotto52.ki_ fájlt                                                       |
|         | 1    | A fájlban legalább egy hét lottószáma szerepel                                        |
|         | 1    | A fájlban legalább az első 51 hét lottószámai szerepeln                               |
|         | 1    | Az 52. hét lottószámai is benne vannak a fájlban                                      |
|         | 1    | Az 52. hét lottószámai az 51. hét után szerepelnek                                    |
|         | 1    | A fájlban egy sorban egy hét lottószámai vannak                                       |
|         | 1    | Ezek szóközzel vannak elválasztva                                                     |
| 8       | 1    | Legalább egy számnál megadta, hogy hányszor húzták ki                                 |
|         | 1    | Minden számra ad eredményt                                                            |
|         | 1    | Minden kiszámított érték helyes                                                       |
|         | 1    | Kiírta a gyakoriságokat a képernyőre                                                  |
|         | 1    | A számokat tizenötösével tagolta                                                      |
|         | 1    | A számok kiíratása a mintának megfelel                                                |
| 9       | 2    | Rögzítette vagy kiszámolta valamilyen formában a prím-számokat                        |
|         | 2    | El tudta dönteni egy számról, hogy egyszer sem húzták ki                              |
|         | 1    | El tudta dönteni egy számról, hogy a megadott prímek egyike-                          |
|         | 1    | Az összes prímet megvizsgálta                                                         |
|         | 1    | Kiírta az eredményt a képernyőre                                                      |

## C. Értékelőlap: [PDF][ertekelo]

| Feladat       | Öszpontszám |
| ------------- | ----------- |
| 1             | 2           |
| 2             | 5           |
| 3             | 1           |
| 4             | 7           |
| 5             | 5           |
| 6             | 5           |
| 7             | 7           |
| 8             | 6           |
| 9             | 7           |
| **Össszesen** | **45**      |

## D. Megoldások:

| Feladat | Megoldás                                       |
| ------- | ---------------------------------------------- |
| 1.      | Egyszerű input kiírása, benne: 89 24 34 11 64  |
| 2.      | 11 24 34 64 89                                 |
| 3.      | Egyszerű input kiírása, benne: 1               |
| 4.      | 37 42 44 61 62                                 |
| 5.      | Volt ilyen érték                               |
| 6.      | 128db ilyen szám volt                          |
| 7.      | Kiírva a _lotto52.ki_ fileba                   |
| 8.      | Darab számok kíírása a feladat mintája alapján |
| 9.      | 19                                             |

## E. Tesztek:

-   Minden teszt a \_\_tests\_\_ mappában van file.test.ts néven.
-   Az összes teszt sikeresen lefut.

[heroku]: https://csalexlotto.herokuapp.com/
[feladat]: http://dload.oktatas.educatio.hu/erettsegi/feladatok2005tavasz/emelt/e_info_fl.pdf
[pontozas]: http://dload.oktatas.educatio.hu/erettsegi/feladatok2005tavasz/emelt/e_info_ut.pdf
[ertekelo]: http://dload.oktatas.educatio.hu/erettsegi/feladatok2005tavasz/emelt/e_infoertekelolap_ut.pdf
