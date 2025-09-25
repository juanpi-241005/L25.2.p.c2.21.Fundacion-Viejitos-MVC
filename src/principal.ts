import Cl_vFundacion from "./Cl_vFundacion.js";
import Cl_mFundacion from "./Cl_mFundacion.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor(){
      let vista = new Cl_vFundacion();
      let modelo = new Cl_mFundacion();
      let controlador = new Cl_controlador(modelo,vista);
      vista.controlador = controlador;
    }
}