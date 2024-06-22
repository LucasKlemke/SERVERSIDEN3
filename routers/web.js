import express from 'express';
import {pegarViewDeTodosOsPetsDoBancoDeDadosMySQLCriadoParaAN3DeServerSideComOProfessorCamargoReiDoJajava, getPetTutor,getPetAltura,addTutor,addPet, deletePet, deleteTutor, updateTutor, updatePet} from '../controller/controller.js';

const { Router } = express;

const router = Router();

//view detalhada de tudo
router.get(`/pets`, pegarViewDeTodosOsPetsDoBancoDeDadosMySQLCriadoParaAN3DeServerSideComOProfessorCamargoReiDoJajava)

//pegar os pets pelo email do tutor
router.get('/tutor/:tutor/pet',getPetTutor)

//pegar os pets filtrando pela altura
router.get('/altura/:altura/pet', getPetAltura)

//adicionar novo tutor
router.post('/tutor',addTutor)

//adicionar novo pet (adicionando juntamente sua altura a tabela)
router.post('/pets', addPet)

//deletar pet por id

//pets
router.delete(`/pets/:id`,deletePet)

//tutor
router.delete(`/tutor/:id`,deleteTutor)

//alterar tutor
router.put(`/tutor/:id`,updateTutor)

//alterar pet
router.put(`/pets/:id`, updatePet)


// router.delete('/:id', deleteTaskByID)

export default router;

//5chamadas
//(USAR ENDPOINTS)
