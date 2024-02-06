export class Accesorio {
    _id?:string;
    nombre:string;
    precio:number;
    imagePath: File;

    constructor (nombre:string, precio: number, imagePath: File){
        this.nombre = nombre;
        this.precio = precio;
        this.imagePath = imagePath;
    }
}

