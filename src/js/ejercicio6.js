const temporizadorValorActual = document.getElementById(
  "temporizadorValorActual"
);
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");

class Temporalizador {
  valorActual = 0;
  temporizador = null;
  activo = false;
  constructor(valorActual) {
    this.valorActual = valorActual;
  }
  iniciar() {
    if (this.activo) {
      return;
    }
    btnPausar.disabled = false;
    btnReiniciar.disabled = false;
    this.activo = true;
    this.temporizador = setInterval(() => {
      this.valorActual++;
      temporizadorValorActual.innerHTML = this.valorActual;
    }, 1000);
  }
  reiniciar() {
    this.valorActual = 0;
    temporizadorValorActual.innerHTML = this.valorActual;
  }
  pausar() {
    if (this.activo) {
      this.activo = false;
      btnIniciar.disabled = false;
      btnPausar.disabled = true;
      clearInterval(this.temporizador);
      temporizadorValorActual.innerHTML = this.valorActual;
    }
  }
}

const temporizador = new Temporalizador(0);

btnIniciar.addEventListener("click", () => {
  btnIniciar.disabled = true;
  temporizador.iniciar();
});
btnPausar.addEventListener("click", () => {
  temporizador.pausar();
});
btnReiniciar.addEventListener("click", () => {
  temporizador.reiniciar();
});
