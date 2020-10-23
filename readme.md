# Lotto

## Heroku teszt:

[Heroku][heroku]

2005. május 19.-ei emelt közismereti informatika érettségi programozás feladata

## A. Feladatok:

1. feladat: Kérje be a felhasználótól az 52. hét megadott lottószámait!

2. feladat: A program rendezze a bekért lottószámokat emelkedő sorrendbe! A rendezett számokat írja ki a képernyőre!

3. feladat: Kérjen be a felhasználótól egy egész számot 1-51 között! A bekért adatot nem kell ellen-őrizni!

4. feladat: Írja ki a képernyőre a bekért számnak megfelelő sorszámú hét lottószámait, a _lottosz.dat_ állományban lévő adatok alapján!

5. feladat: A _lottosz.dat_ állományból beolvasott adatok alapján döntse el, hogy volt-e olyan szám, amit egyszer sem húztak ki az 51 hét alatt! A döntés eredményét (Van/Nincs) írja ki a képernyőre!

6. feladat: A _lottosz.dat_ állományban lévő adatok alapján állapítsa meg, hogy hányszor volt pá-ratlan szám a kihúzott lottószámok között! Az eredményt a képernyőre írja ki!

7. feladat: Fűzze hozzá a _lottosz.dat_ állományból beolvasott lottószámok után a felhasználótól bekért, és rendezett 52. hét lottószámait, majd írja ki az összes lottószámot a lotto52.kiszöveges fájlba! A fájlban egy sorba egy hét lottószámai kerüljenek, szóközzel elválasztva egymástól!

8. feladat: Határozza meg a lotto52.ki állomány adatai alapján, hogy az egyes számokat hányszor húzták ki 2003-ban. Az eredményt írja ki a képernyőre a következő formában: az első sor első eleme az a szám legyen ahányszor az egyest kihúzták! Az első sor második eleme az az érték legyen, ahányszor a kettes számot kihúzták stb.!

    - Annyit biztosan tudunk az érté-kekről, hogy mindegyikük egyjegyű.

9. feladat: Adja meg, hogy az 1-90 közötti prímszámokból melyiket nem húzták ki egyszer sem az elmúlt évben.
    - A feladat megoldása során az itt megadott prímszámokat felhasználhatja vagy előállíthatja! (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89.)

## B. Megoldások:

| Feladat | Megoldás                                      |
| ------- | --------------------------------------------- |
| 1.      | Egyszerű input kiírása, benne: 89 24 34 11 64 |
| 2.      | 11 24 34 64 89                                |
| 3.      | Egyszerű input kiírása, benne: 1              |
| 4.      | 37 42 44 61 62                                |
| 5.      | Volt ilyen érték                              |
| 6.      | 132db ilyen szám volt                         |
| 7.      | Kiírva a _lotto52.ki_ fileba                  |
| 8.      | 90 sornyi adat kiírása                        |
| 9.      | 19                                            |

[heroku]: https://csalexlotto.herokuapp.com/
