class Animal {
  #raza;
  #nombre;
  #sonido;

  constructor(raza, nombre, sonido) {
    this.#nombre = nombre;
    this.#raza = raza;
    this.#sonido = sonido;
  }

  getNombre(nombre) {
    return this.#nombre;
  }

  getRaza(raza) {
    return this.#raza;
  }

  hacerSonido(sonido) {
    return this.#sonido;
  }
}

class Gato extends Animal {
  constructor(nombre, raza, sonido) {
    super(raza, nombre, sonido);
  }
}

const cat = new Gato("Azazel", "calico", "miaw");
console.log("Nombre= " + cat.getNombre);
console.log("Raza= " + cat.getRaza());
console.log("Sonido= " + cat.hacerSonido);
