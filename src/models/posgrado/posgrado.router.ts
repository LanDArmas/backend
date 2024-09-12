import { PosgradoController } from './controllers/posgrado.controller';
import { BaseRouter } from "../../shared/router/router";

export class PosgradoRouter extends BaseRouter<PosgradoController>{
    constructor(){
        super(PosgradoController);
    }
    routes(): void {
        // todos los usuarios
        this.router.get('/Posgrado', (req, res) => this.controller.getPosgrados(req, res));
        
        // usuario por id
        this.router.get('/Posgrado/:id', (req, res) => this.controller.getPosgradoById(req, res));

        this.router.get('/Posgrados/Anexos', (req, res) => this.controller.findCountByPosgrado(req, res));

        // adicionar usuariosx
        this.router.post('/Posgrado/createPosgrado', (req, res) => this.controller.createPosgrado(req, res));
        
        //modificar usuario
        this.router.put('/Posgrado/updatePosgrado/:id', (req, res) => this.controller.updatePosgrado(req, res));

        // eliminar usuario
        this.router.delete('/Posgrado/deletePosgrado/:id', (req, res) => this.controller.deletePosgrado(req, res));

        this.router.get('/Posgrado/actividadesPosgrado/:id', (req, res) => this.controller.findPosgradoWithActividades(req, res));
       

    }
}