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

<<<<<<< HEAD
const cat = new Gato("Azazel", "calico", "miaw");


console.log("Nombre= " + cat.getNombre());
console.log("Raza= " + cat.getRaza());
console.log("Sonido= " + cat.hacerSonido());
=======
const cat = new Gato("calico", "Azazel", "miaw");
console.log("Nombre= " + cat.getNombre()); // parentesis
console.log("Raza= " + cat.getRaza());
console.log("Sonido= " + cat.hacerSonido()); // parentesis
>>>>>>> 7eb78f2cb3dd571b47a94df38ed148590c9afad3
