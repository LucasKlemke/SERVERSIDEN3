export let itGo = "select * from pet_altura_tutor_view;";



export const getPetByTutor = `SELECT p.nome, t.email from tutor t inner join pet p on t.id = p.tutor where t.email like ?; `;
export const getPetByAltura = `SELECT p.nome, a.altura from altura_pet a inner join pet p on a.pet = p.id where a.altura like ?; 
`;

export const getPets = "SELECT * FROM pet"
export const getAltura = `SELECT * FROM altura_pet`
export const getTutor = `SELECT * FROM tutor`

export const deleteTask = "DELETE FROM tasks WHERE taskid = $1";

export const takeMaxID = "SELECT MAX(taskID) from tasks";

export const checkTaskExistance = "SELECT s FROM tasks s WHERE s.taskID = $1";

export const adicionarPet =
  "INSERT INTO pet (nome, genero, tutor) VALUES (?, ?, ?)";

export const pegarIDNovoPet = "select max(id) as id from pet";

export const adicionarPetAltura =
  "INSERT INTO altura_pet (pet, altura) VALUES (?, ?)";

export const adicionarTutor =
  "INSERT INTO tutor (email, cpf, nome) VALUES (?, ?, ?)";

export const excluirPet = `DELETE FROM pet WHERE id = ?`;

export const excluirAltura = `DELETE FROM altura_pet WHERE pet = ?`;

export const excluirAlturaTutor = `DELETE FROM altura_pet WHERE tutor = ?`;
export const excluirPetTutor = `DELETE FROM pet WHERE tutor = ?`;
export const excluirTutor = `DELETE FROM tutor WHERE id = ?`;

export const pegarIDNovoTutor = "select max(id) as id from tutor";

export const attPet = `UPDATE pet SET nome = ?, genero= ? where id = ?`;

export const attTutor = `UPDATE tutor SET email = ?, cpf= ?,nome= ? where id = ?`;

export const superSelect = ` select t.id as idTutor, p.id as idPet from tutor t inner join pet p on p.tutor = t.id inner join altura_pet a on a.pet = p.id where t.id = ?;`;
