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
        });
    }
}