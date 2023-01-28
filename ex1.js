// 1. Napisz program, który losuje liczbę od 1 do 100. Następnie aplikacja będzie prosić użytkownika o zgadnięcie tej liczby tak długo, dopóki nie poda prawidłowej odpowiedzi. Za każdym razem, gdy użytkownik nie poda prawidłowej odpowiedzi, powinna się pojawić wiadomość czy szukana liczba jest większa czy mniejsza od podanej przez użytkownika. Wykorzystać: alert(), prompt(), while

function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const int = rndInt(1, 100);

console.log(int);

let zgaduj = -1;

while (zgaduj !== int) {
  zgaduj = prompt("Zgadnij liczbe!");
  if (zgaduj < int) {
    alert("Podaj wyzsza liczbe.");
  } else if (zgaduj > int) {
    alert("Podaj mniejsza liczbe.");
  } else {
    alert("Brawo!");
    break;
  }
}
