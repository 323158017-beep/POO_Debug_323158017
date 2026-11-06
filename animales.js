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
  constructor(raza, nombre, sonido) {
    super(raza, nombre, sonido);
  }
}

const cat = new Gato("calico", "Azazel", "miaw");
console.log("Nombre= " + cat.getNombre()); // parentesis
console.log("Raza= " + cat.getRaza());
console.log("Sonido= " + cat.hacerSonido()); // parentesis