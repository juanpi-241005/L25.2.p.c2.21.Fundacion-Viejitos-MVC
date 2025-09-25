export default class Cl_mDonante {
    private _nombre: string = "";
    private _dolares: number = 0;
    private _bolivares: number = 0;
    constructor({nombre = "", dolares = 0, bolivares = 0}) {
        this._nombre = nombre;
        this._dolares = dolares;
        this._bolivares = bolivares;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }
    public get nombre(): string {
        return this._nombre;
    }

    public set dolares(dolares:number) {
        this._dolares = dolares;
    }
    public get dolares(): number {
        return this._dolares;
    }

    public set bolivares(bolivares:number) {
        this._bolivares = bolivares;
    }
    public get bolivares(): number {
        return this._bolivares;
    }

    public convertirDolares(): number {
        return this.dolares * 40;
    }
    
    public convertirBolivares(): number {
        return this.bolivares / 40;
    }

    public totalDolaresPP(): number {
        return this.dolares + this.convertirBolivares();
    }

    public totalBolivaresPP(): number {
        return this.bolivares + this.convertirDolares();
    }
}