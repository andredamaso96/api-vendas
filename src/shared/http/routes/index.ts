import { Router } from "express";
import { request } from "http";

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ mesage: 'Teste' });
});

export default routes;
