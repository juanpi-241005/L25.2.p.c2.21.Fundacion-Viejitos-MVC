export default class Cl_mDonante {
    constructor({nombre = "", dolares = 0, bolivares = 0, donacionesPrevias = 0}){
        this._nombre = "";
        this._dolares = 0;
        this._bolivares = 0;
        //modificado 25.09.2025
        this._donacionesPrevias = 0;
        this.nombre = nombre;
        this.dolares = dolares; 
        this.bolivares = bolivares;
        //modificado 25.09.2025
        this.donacionesPrevias = donacionesPrevias;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set dolares(dolares){
        this._dolares = +dolares;
    }
    get dolares(){
        return this._dolares;
    }

    set bolivares(bolivares){
        this._bolivares = +bolivares;
    }
    get bolivares(){
        return this._bolivares;
    }

    //modificado 25.09.2025
    set donacionesPrevias(donacionesPrevias){
        this._donacionesPrevias = +donacionesPrevias;
    }
    get donacionesPrevias(){
        return this._donacionesPrevias;
    }

    convertirDolares(){
        return this.dolares * 40;
    }

    convertirBolivares(){
        return this.bolivares / 40;
    }

    totalDolaresPP(){
        return this.dolares + this.convertirBolivares();
    }

    totalBolivaresPP(){
        return this.bolivares + this.convertirDolares();
    }

    donacionesPreviasPP(){
        return this.donacionesPrevias;
    }
}