import Cl_mDonante from "./Cl_mDonante.js";
import Cl_vDonante from "./Cl_vDonante.js";

export default class Cl_vFundacion {
    constructor(){
        this._controlador = null;
        this.mDonante = null;
        this.salida = document.getElementById("mainForm_salida");
        if(!this.salida)
            throw new Error("Elemento salida no está definido");
        this.vDonante = new Cl_vDonante();
    }

    set controlador(controlador){
        this._controlador = controlador;
        this.vDonante.controlador = controlador;
    }
    get controlador(){
        return this._controlador;
    }

    procesarDonante(){
        this.mDonante = new Cl_mDonante({
            nombre: this.vDonante.nombre,
            dolares: this.vDonante.dolares,
            bolivares: this.vDonante.bolivares,
            //modificado 25.09.2025
            donacionesPrevias: this.vDonante.donacionesPrevias,
        });
        return this.mDonante;
    }

    reportarDonante({totalFinalDolares = 0, totalFinalBolivares = 0, mayorDonante = "", promedioDonacionesPrevias = 0}){
        if(!this.mDonante)
            throw new Error("No hay Donante procesado");

        this.salida.innerHTML += `<br><br>
        ${this.mDonante.nombre} aporta $${this.mDonante.totalDolaresPP().toFixed(2)} (Bs.${this.mDonante.totalBolivaresPP()})
        <br><br>En total se recaudaron $${totalFinalDolares.toFixed(2)} (Bs.${totalFinalBolivares})
        <br>El mejor donador fue ${mayorDonante}
        <br>El promedio de Donaciones Previas de los donantes es ${promedioDonacionesPrevias}`;
    }   //modificado 25.09.2025
}