const inp = document.getElementById("kanal-1");
const res = document.getElementById("wynik-1");

inp.addEventListener("input", () => {
  const val = Number(inp.value);

  if (val < 1 || val > 13) {
    res.innerText = "Niepoprawny kanał (1–13)";
    return;
  }

  const wynik = 2407 + 5 * val;
  res.innerText = wynik + "MHz";
});
