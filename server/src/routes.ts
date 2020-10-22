import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();
const upload = multer(uploadConfig)

/*MVC
Model = dados
View = como fica disponível no Front-end
Controllers = logica das rotas

Controllers por padrão tem os metodos index, show, create, update, delete
*/

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControllers.create);

export default routes;