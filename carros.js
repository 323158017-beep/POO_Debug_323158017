class Carro {
  #marca;
  #modelo;
  #color;

  constructor(marca, modelo, color) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
  }

  getMarca(marca) {
    return this.#marca;
  }

  getModelo(modelo) {
    return this.#modelo;
  }

  getColor(color) {
    return this.#color;
  }
}

class Deportivo extends Carro {
  constructor(modelo, marca, color) {
    (marca, modelo, color)
  }
}

const auto = new Deportivo("Mustang", "Ford", "Rojo");

console.log("Marca= " + auto.getMarca());
console.log("Modelo= " + auto.getModelo());
console.log("Color= " + auto.getColor());