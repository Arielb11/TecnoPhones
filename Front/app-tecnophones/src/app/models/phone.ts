export class Phone {
    _id?:string;
    modelo:string;
    estado:string;
    bateria:number;
    capacidad:number;
    observaciones:string;
    valor:number;

    constructor (modelo:string, estado:string, bateria:number, capacidad:number, observaciones:string, valor:number) {
        this.modelo = modelo;
        this.estado = estado;
        this.bateria = bateria;
        this.capacidad = capacidad;
        this.observaciones = observaciones;
        this.valor = valor;
    }
}