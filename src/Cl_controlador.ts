import Cl_mFundacion from "./Cl_mFundacion.js";
import Cl_vFundacion from "./Cl_vFundacion.js";

export default class Cl_controlador {
    public modelo: Cl_mFundacion;
    public vista: Cl_vFundacion;

    constructor(modelo: Cl_mFundacion, vista: Cl_vFundacion){ // Inyección de dependencias
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarDonante(){
        // Procesamiento del donante y actualización del reporte en la vista
        this.modelo.procesarDonante(this.vista.procesarDonante()); // Llamada al método de la vista para obtener el donante
        this.vista.reporteDonante({
            // Parámetros con valores por defecto
            totalFinalDolares: this.modelo.totalFinalDolares(), 
            totalFinalBolivares: this.modelo.totalFinalBolivares(), 
            mayorDonante: this.modelo.mayorDonante()
        });
    }
}