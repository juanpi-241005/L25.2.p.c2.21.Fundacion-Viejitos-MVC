export default class Cl_mFundacion {
    constructor() {
        this.acTotalDolaresPP = 0;
        this.acTotalBolivaresPP = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
        //modificado 25.09.2025
        this.acDonacionesPrevias = 0;
        this.cntNombre = 0;
    }

    procesarDonante(donante){
        this.acTotalDolaresPP += donante.totalDolaresPP();
        
        this.acTotalBolivaresPP += donante.totalBolivaresPP();
        
        if(donante.totalDolaresPP() > this.mayorAporte){
            this.mayorAporte = donante.totalDolaresPP();
            this.mayorNombre = donante.nombre;
        }

        //modificado 25.09.2025
        this.acDonacionesPrevias += donante.donacionesPreviasPP();

        this.cntNombre++
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

    //modificado 25.09.2025
    promedioDonacionesPrevias(){
        return this.acDonacionesPrevias / this.cntNombre;
    }
}