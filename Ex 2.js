const ileLiczb = prompt("Z ilu liczb chcesz obliczyć średnią?");

let liczby = [];

for (i = 0; i < ileLiczb; i++) {
  liczby.push(Number(prompt(`Podaj  ${i + 1}. liczbę.`)));
}

const suma = liczby.reduce((a, b) => a + b, 0);

const srednia = suma / ileLiczb;

alert(srednia);
