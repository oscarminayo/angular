const IMAGEN_DEFAULT = 'https://hemeroteca.vozlibre.com/userfiles/2a_decada/image/FOTOS%202014/05%20MAYO%202014/12%20MAYO%202014/sandro-rey.jpg';

export class Persona {

    // atributos privados y comienzan por guion bajo "_"
    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _imagen: string;
   

    constructor(nombre:string, apellido:string, email:string, imagen?:string){
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._imagen = (imagen) ? imagen : IMAGEN_DEFAULT;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }





}