import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vDonante {
    public controlador: Cl_controlador | null = null;
    private inNombre: HTMLInputElement;
    private inDolares: HTMLInputElement;
    private inBolivares: HTMLInputElement;
    public btProcesar: HTMLElement;

    constructor(){
        this.inNombre = document.getElementById("donanteForm_inNombre") as HTMLInputElement;
        this.inDolares = document.getElementById("donanteForm_inDolares") as HTMLInputElement;
        this.inBolivares = document.getElementById("donanteForm_inBolivares") as HTMLInputElement;
        this.btProcesar = document.getElementById("donanteForm_btProcesar") as HTMLElement;

        if(!this.inNombre || !this.inDolares || !this.inBolivares || !this.btProcesar)
            throw new Error("Error en la inicialización de la vista Donante");

        this.btProcesar.onclick = () => {
            if(!this.controlador)
                throw new Error("Error: No hay controlador en la vista Donante");
            this.controlador.procesarDonante();
        };
    }

    get nombre(): string {
        if(!this.inNombre) 
            throw new Error("Error: No hay campo nombre en la vista Donante");
            return this.inNombre.value;
    }

    get dolares(): number {
        if(!this.inDolares)
            throw new Error("Error: No hay campo dolares en la vista Donante");
            return Number(this.inDolares.value);
    }

    get bolivares(): number {
        if(!this.inBolivares)
            throw new Error("Error: No hay campo bolivares en la vista Donante");
            return Number(this.inBolivares.value);
    }

}