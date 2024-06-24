import express from "express";
import {
  pegarView,
  getPetTutor,
  getPetAltura,
  addTutor,
  addPet,
  deletePet,
  deleteTutor,
  updateTutor,
  updatePet,
  getPet,
  getTutorEP,
  getAlturaEP,
  login,
  verifyJWT,
} from "../controller/controller.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const { Router } = express;

const router = Router();

// router.post('/login', (req, res, next) => {
//     const { user, password } = req.body
//     if (user === 'admin' && password == 'senha') {
//         const id = 1
//         const token = jwt.sign({ id }, process.env.KEY, {
//             expiresIn:300
//         })
//        return res.json(`Usuário logado !`)
//     }
//     res.status(500).json({message:" Login Inválido!"})
// })

router.post("/login", login);

//view detalhada de tudo
router.get("/pet", getPet);
router.get("/tutor", getTutorEP);
router.get("/altura", getAlturaEP);

router.get(`/pets`, verifyJWT, pegarView);

//pegar os pets pelo email do tutor
router.get("/tutor/:tutor/pet", getPetTutor);

//pegar os pets filtrando pela altura
router.get("/altura/:altura/pet", getPetAltura);

//adicionar novo tutor
router.post("/tutor", addTutor);

//adicionar novo pet (adicionando juntamente sua altura a tabela)
router.post("/pets", addPet);

//deletar pet por id

//pets
router.delete(`/pets/:id`, deletePet);

//tutor
router.delete(`/tutor/:id`, deleteTutor);

//alterar tutor
router.put(`/tutor/:id`, updateTutor);

//alterar pet
router.put(`/pets/:id`, updatePet);

// router.delete('/:id', deleteTaskByID)

export default router;

//5chamadas
//(USAR ENDPOINTS)
