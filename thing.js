let lista = [""];
let gwiazdki = document.getElementById("paragraf");

const dlugosc = prompt("Podaj dlugosc choinki.");

function gwiazdka() {
  for (i = 0; i < dlugosc - 1; i++) {
    lista.push((lista[i] = lista[i] + "*"));
  }
  lista[dlugosc - 1] = lista[dlugosc - 2] + "*";
  let final = lista.join("\n");
  gwiazdki.innerText = final;
  return final;
}

gwiazdka();
