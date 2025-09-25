import Cl_mDonante from "./Cl_mDonante.js"

export default class Cl_mFundacion {
    private acTotalDolaresPP: number = 0;
    private acTotalBolivaresPP: number = 0;
    private mayorAporte: number = 0;
    private mayorNombre: string = "";
    constructor(){
        this.acTotalDolaresPP = 0;
        this.acTotalBolivaresPP = 0;
        this.mayorAporte = 0;
        this.mayorNombre = "";
    }

    public procesarDonante(don: Cl_mDonante): void{
        this.acTotalDolaresPP += don.totalDolaresPP();

        this.acTotalBolivaresPP += don.totalBolivaresPP();

        if(don.totalDolaresPP() > this.mayorAporte){
            this.mayorAporte = don.totalDolaresPP();
            this.mayorNombre = don.nombre;
        }
    }

    public totalFinalDolares(): number{
        return this.acTotalDolaresPP;
    }

    public totalFinalBolivares(): number{
        return this.acTotalBolivaresPP;
    }

    public mayorDonante(): string{
        return this.mayorNombre;
    }
}