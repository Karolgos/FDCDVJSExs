const all = [1, "pięć", null, -3, "-9", 14];

const liczby = [];

function czyNumer(element) {
  return typeof element === "number";
}

const wynik = all.filter(czyNumer);

// for (i = 0; i < all.length; i++)
//   if (typeof all[i] === "number") {
//     liczby.push(all[i]);
//   }

console.log(typeof all[0]);

console.log(all);

console.log(wynik);
