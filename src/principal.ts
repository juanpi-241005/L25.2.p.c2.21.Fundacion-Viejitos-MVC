import Cl_vFundacion from "./Cl_vFundacion.js";
import Cl_mFundacion from "./Cl_mFundacion.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor(){
      // Inicialización de la aplicación
      let vista = new Cl_vFundacion();
      let modelo = new Cl_mFundacion();
      let controlador = new Cl_controlador(modelo,vista);
      // Asignación del controlador a la vista
      vista.controlador = controlador;
    }
}