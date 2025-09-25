import Cl_mFundacion from "./Cl_mFundacion.js";
import Cl_vFundacion from "./Cl_vFundacion.js";

export default class Cl_controlador {
    public modelo: Cl_mFundacion;
    public vista: Cl_vFundacion;

    constructor(modelo: Cl_mFundacion, vista: Cl_vFundacion){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarDonante(){
        this.modelo.procesarDonante(this.vista.procesarDonante());
        this.vista.reporteDonante({
            totalFinalDolares: this.modelo.totalFinalDolares(), 
            totalFinalBolivares: this.modelo.totalFinalBolivares(), 
            mayorDonante: this.modelo.mayorDonante()
        });
    }
}