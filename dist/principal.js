/*20. FUNDACIÓN VIEJITOS
La Fundación Viejitos tiene cierta cantidad de dólares y bolívares, y también se sabe la tasa
de cambio. Los donantes traen dólares y bolívares. Se desea saber cuánto total aporta cada
uno, en dólares y bolívares, y también cuánto es el total final en dólares y bolívares, y quién fue
el mejor donador.
Si tomamos una tasa de cambio de $40 por dólar, y los donantes fuesen Sofía con $10 y
Bs.80, Mateo con Bs.600, Elena con $50, y David con $20 y Bs.100, entonces tendríamos el
siguiente resultado:
Sofía aporta $12.00 (Bs.480)
Mateo aporta $15.00 (Bs.600)
Elena aporta $50.00 (Bs.2000)
David aporta $22.50 (Bs.900)
En total se recaudaron $99.50 (Bs.3980)
El mejor donador fue Elena
*/

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
