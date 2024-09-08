"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosgradoRouter = void 0;
const posgrado_controller_1 = require("./controllers/posgrado.controller");
const router_1 = require("../../shared/router/router");
class PosgradoRouter extends router_1.BaseRouter {
    constructor() {
        super(posgrado_controller_1.PosgradoController);
    }
    routes() {
        // todos los usuarios
        this.router.get('/Posgrado', (req, res) => this.controller.getPosgrados(req, res));
        // usuario por id
        this.router.get('/Posgrado/:id', (req, res) => this.controller.getPosgradoById(req, res));
        this.router.get('/Posgrado/getCount', (req, res) => this.controller.getCountByPosgrado(req, res));
        // adicionar usuario
        this.router.post('/Posgrado/createPosgrado', (req, res) => this.controller.createPosgrado(req, res));
        //modificar usuario
        this.router.put('/Posgrado/updatePosgrado/:id', (req, res) => this.controller.updatePosgrado(req, res));
        // eliminar usuario
        this.router.delete('/Posgrado/deletePosgrado/:id', (req, res) => this.controller.deletePosgrado(req, res));
    }
}
exports.PosgradoRouter = PosgradoRouter;
