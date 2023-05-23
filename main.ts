console.log("Hola clace de programación visual desde consola");
document.write("Hola clase de programacion visual de la clase de programacion");
document.write("Roberto Huilco");
console.log("Roberto Huilco");
class Cliente{
    public id: number;
    public nombre: string;
    public telefono: number;
    constructor(nombre: string, telefono: number, id?:number){
        this.id=1;
        this.nombre="Roberto";
        this.telefono=132134;
    }


}
class Roberto {
    public nombre: string | undefined;
    public edad: number | undefined;
    public direccion: string | undefined;
  
    constructor(nombre: string, edad: number, direccion: string) {
      this.nombre = nombre;

      this.edad = edad;
      this.direccion = direccion;
    }
  
    saludar() {
      console.log("Mis saludos ingeniera, mi nombre es: " + this.nombre + " mi edad es " + this.edad + " mi dirección es: " + this.direccion);
    }
  
}
let cliente:Cliente = new Cliente("Roberto", 132134);
console.log(cliente.nombre, cliente.telefono);
//Deber 
let roberto:Roberto = new Roberto("Roberto", 132134, "Atucucho");
//console.log(roberto.nombre, roberto.edad, roberto.direccion);
console.log(roberto.saludar());