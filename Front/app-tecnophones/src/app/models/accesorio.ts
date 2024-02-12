export class Accesorio {
    _id?:string;
    nombre:string;
    precio:number;
    imagenPrincipal:File;
    imagePaths: File[];

    constructor (nombre:string, precio: number,imagenPrincipal: File, imagePaths: File[]){
        this.nombre = nombre;
        this.precio = precio;
        this.imagenPrincipal = imagenPrincipal;
        this.imagePaths = imagePaths;
    }
}

