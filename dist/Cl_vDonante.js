export default class Cl_vDonante {
    constructor(){
        this.controlador = null;
        this.inNombre = document.getElementById("donanteForm_inNombre");
        this.inDolares = document.getElementById("donanteForm_inDolares");
        this.inBolivares = document.getElementById("donanteForm_inBolivares");
        //modificado 25.09.2025
        this.inDonacionesPrevias = document.getElementById("donanteForm_inDonacionesPrevias");
        this.btProcesar = document.getElementById("donanteForm_btProcesar");
        //validar que los elementos existen
        //modificado 25.09.2025
        if(!this.inBolivares || !this.inDolares || !this.inNombre || !this.inDonacionesPrevias)
            throw new Error("Error en la inicialización de la vista Donante");

        this.btProcesar.onclick = () => {
            if(!this.controlador)
                throw new Error("No hay Controlador en la vista Donante");
            this.controlador.procesarDonante();
        };
    }

    get nombre(){
        if(!this.inNombre)
            throw new Error("Elemento inNombre no está inicializado");
        return this.inNombre.value;
    }

    get dolares(){
        if(!this.inDolares)
            throw new Error("Elemento inDolares no está inicializado");
        return this.inDolares.value;
    }

    get bolivares(){
        if(!this.inBolivares)
            throw new Error("Elemento inBolivares no está inicializado");
        return this.inBolivares.value;
    }
    
    //modificado 25.09.2025
    get donacionesPrevias(){
        if(!this.inDonacionesPrevias)
            throw new Error("Elemento inDonacionesPrevias no está inicializado");
        return this.inDonacionesPrevias.value;
    }

}