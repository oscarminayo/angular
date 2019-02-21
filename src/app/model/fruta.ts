const IMAGEN_DEFAULT = 'https://i.pinimg.com/originals/2f/5e/31/2f5e31b8aabd355c2e80b97a4521904e.jpg';

export class Fruta {

    //atributos privados y comienzan por guion bajo _atributo
    private _id: number;
    private _nombre: string;   
    private _precio: number;  
    private _oferta: boolean; 
    private _descuento: number; 
    private _imagen: string;
    private _cantidad: number;
    
    

    //constructor solo puede haber uno, no existe sobrecarga como en Java
    //usaremos parametros con ? para opcionales
    //en el constructor tanto poner ? en las variables como asignarles un valor por defecto es lo mismo.
    //SON VARIABLES OPCIONALES

    /**
     * Obligatorio nombre y precio, los demas opcionales (?)
     * @param nombre 
     * @param precio 
     * @param id? -1
     * @param oferta false 
     * @param descuento? 0 
     * @param imagen? 
     */
    constructor(nombre:string, precio:number, id?:number, oferta=false,descuento?:number, imagen?:string, cantidad = 1){
        this._nombre = nombre;
        this._precio = precio;
        this._id = (id) ? id : -1;    //si viene un id se lo asigna, sino -1
        this._oferta = oferta; //aqui no hace falta preguntar porque su valor por defecto es false
        this._descuento = (descuento) ? descuento : 0;
        this._imagen = (imagen) ? imagen : IMAGEN_DEFAULT;
        this._cantidad = cantidad;
     }

     //getters y setters
    
     public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get oferta(): boolean {
        return this._oferta;
    }
    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }

    //TODO
    jsonMapper(jsonData: any){

    }


}
