"use strict";
// import { PosgradoController } from './../src/models/posgrado/controllers/posgrado.controller';
// import { PosgradoService } from '../src/models/posgrado/services/posgrado.services';
// import { PosgradoDTO } from '../src/models/posgrado/dto/posgrado.dto';
// import { PosgradoEntity } from '../src/models/posgrado/entities/posgrado.entity';
// import { Request, Response } from 'express';
// import { mock, MockProxy } from 'jest-mock-extended';
// describe('PosgradoController', () => {
//     let posgradoController: PosgradoController;
//     let posgradoService: MockProxy<PosgradoService>;
//     let req: MockProxy<Request>;
//     let res: MockProxy<Response>;
//     beforeEach(() => {
//         posgradoService = mock<PosgradoService>();
//         posgradoController = new PosgradoController(posgradoService);
//         req = mock<Request>();
//         res = mock<Response>();
//         res.status.mockReturnThis();
//         res.json.mockReturnThis();
//     });
//     const mockPosgrados: PosgradoEntity[] = [
//         {
//             id_posgrado: 1,
//             facultad: 'Facultad de Ingenierías',
//             nombre: 'Doctorado en Ingeniería Electrónica',
//             fecha_inicio: new Date('2024-07-31'),
//             fecha_culminacion: new Date('2028-06-30'),
//             matricula_inicial: 20,
//             matricula_final: 15,
//             categoria_cientifica: 'Alta',
//             tipo_posgrado: 'Doctorado',
//             id_profe: 16,
//             id: 1,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//             estudiante: null,
//             profesor: null,
//             hasId: jest.fn(),
//             save: jest.fn(),
//         }
//     ];
//    // posgradoService.findAllPosgrados.mockResolvedValue(mockPosgrados); // Ajustar el tipo
//     //posgradoService.findPosgradoById.mockResolvedValue(mockPosgrados[0]); // Ajustar el tipo
//     it('should return all posgrados', async () => {
//         const mockPosgrados = [{ id_posgrado: 1, facultad: 'Ingenierías' }];
//         posgradoService.findAllPosgrados.mockResolvedValue(mockPosgrados);
//         await posgradoController.getPosgrados(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith(mockPosgrados);
//     });
//     it('should return a posgrado by id', async () => {
//         req.params.id = '1';
//         const mockPosgrado = { id_posgrado: 1, facultad: 'Ingenierías' };
//         posgradoService.findPosgradoById.mockResolvedValue(mockPosgrado);
//         await posgradoController.getPosgradoById(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.json).toHaveBeenCalledWith(mockPosgrado);
//     });
//     it('should create a posgrado', async () => {
//         const newPosgrado: PosgradoDTO = {
//             id_posgrado: 2,
//             facultad: 'Humanidades',
//             nombre: 'Doctorado en Filosofía',
//             fecha_inicio: new Date(),
//             fecha_culminacion: new Date(),
//             matricula_inicial: 25,
//             matricula_final: 22,
//             categoria_cientifica: 'Media',
//             tipo_posgrado: 'Doctorado',
//             id_profe: 14,
//         };
//         req.body = newPosgrado;
//         posgradoService.createPosgrado.mockResolvedValue(newPosgrado as any);
//         await posgradoController.createPosgrado(req, res);
//         expect(res.status).toHaveBeenCalledWith(201);
//         expect(res.json).toHaveBeenCalledWith(newPosgrado);
//     });
// });
