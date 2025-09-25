import Cl_vDonante from "./Cl_vDonante.js";
import Cl_mDonante from "./Cl_mDonante.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vFundacion {
    private _controlador: Cl_controlador | null = null;
    private salida: HTMLElement;
    private vDonante: Cl_vDonante;
    private mDonante: Cl_mDonante | null = null;

    constructor(){
        this.salida = document.getElementById("mainForm_salida") as HTMLElement;
        if(!this.salida)
            throw new Error("Error: No se encontró el elemento 'mainForm_salida'");
        this.vDonante = new Cl_vDonante();
    }

    set controlador(controlador: Cl_controlador | null){
        this._controlador = controlador;
        this.vDonante.controlador = controlador;
    }
    get controlador(): Cl_controlador | null {
        return this._controlador;
    }

    procesarDonante(): Cl_mDonante{
        this.mDonante = new Cl_mDonante({nombre: this.vDonante.nombre, dolares: this.vDonante.dolares, bolivares: this.vDonante.bolivares});
        return this.mDonante;
    }

    reporteDonante({totalFinalDolares = 0, totalFinalBolivares = 0, mayorDonante = ""}): void{
        if(!this.mDonante)
            throw new Error("Error: No hay donante para mostrar reporte");

        this.salida.innerHTML += `<br><br>
        ${this.mDonante.nombre} aporta $${this.mDonante.totalDolaresPP().toFixed(2)} (Bs.${this.mDonante.totalBolivaresPP()}) 
        <br><br> En total de recaudaron $${totalFinalDolares.toFixed(2)} (Bs.${totalFinalBolivares})
        <br>El mejor donador fue ${mayorDonante}`;
    }
}