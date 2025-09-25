export default class Cl_mFundacion {
    constructor() {
        this.acTotalDolaresPP = 0;
        this.acTotalBolivaresPP = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
    }

    procesarDonante(donante){
        this.acTotalDolaresPP += donante.totalDolaresPP();
        
        this.acTotalBolivaresPP += donante.totalBolivaresPP();
        
        if(donante.totalDolaresPP() > this.mayorAporte){
            this.mayorAporte = donante.totalDolaresPP();
            this.mayorNombre = donante.nombre;
        }
    }

    totalFinalDolares(){
        return this.acTotalDolaresPP;
    }

    totalFinalBolivares(){
        return this.acTotalBolivaresPP;
    }

    mayorDonante(){
        return this.mayorNombre;
    }
}