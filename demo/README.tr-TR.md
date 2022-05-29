[![en-EN](https://img.shields.io/badge/EN-%C4%B0ngilizce-blue)](README.md)
[![tr-TR](https://img.shields.io/badge/*TR-T%C3%BCrk%C3%A7e-red?style=plastic)](README.tr-TR.md)

# Özet

```js
// Paketi Dahil Et
const cronti = require("cronti")

/* İki tarih arasında düzenli aralıklarla çalışacak bir crontime ifadesi oluşturur. */
cronti.intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - VEYA - */
cronti.intervalTime(new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* çıktısı "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Geçerli crontime ifadesi girin crontime ifadesi alın. */
cronti.onCrontime("0 2 * * *")
/* çıktısı "0 2 * * *" */
/* ************************************************************************ */

/* Belirli bir tarihin crontime ifadesini oluşturun. */
cronti.onDate("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onDate(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 * *" */
/* ************************************************************************ */

/* Belirli bir tarihteki güne ait crontime ifadesi oluşturun. */
cronti.onDay("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onDay(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 26 5 *" */
/* ************************************************************************ */

/* month, week, weekDays, time ve tick parametrelerinin çeşitli kombinasyonlarla crontime ifadesi oluşturun. 
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
cronti.onTime({month: 4, week: 2})
/* çıktısı "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 4, week: 2, weekDays: 3})
/* çıktısı "30 12 18 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 3, weekDays: 1})
/* çıktısı "30 12 * 4 1" */
/* ************************************************************************ */

/* Tarihindeki hafta için crontime ifadesi oluşturur.
 * Dikkat! Crontime ifadesi oluşturuldukları zamana göre değişir. Test edilme zamanı 27.05.2022'dir.
*/
cronti.onWeek("2022-05-26T09:30:00.000Z")
/* - VEYA - */
cronti.onWeek(new Date("2022-05-26 12:30"))
/* çıktısı "30 12 22-28 5-5 *" */
/* ************************************************************************ */
```
