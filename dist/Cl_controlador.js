export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarDonante(){
        this.modelo.procesarDonante(this.vista.procesarDonante());
        this.vista.reportarDonante({
            totalFinalDolares: this.modelo.totalFinalDolares(),
            totalFinalBolivares: this.modelo.totalFinalBolivares(),
            mayorDonante: this.modelo.mayorDonante(),
            //modificado 25.09.2025
            promedioDonacionesPrevias: this.modelo.promedioDonacionesPrevias(),
        });
    }
}