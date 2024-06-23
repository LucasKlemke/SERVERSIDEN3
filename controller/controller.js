import db from "../config/db.js";
import {
  getPetByTutor,
  itGo,
  adicionarTutor,
  pegarIDNovoTutor,
  pegarIDNovoPet,
  getPetByAltura,
  adicionarPet,
  adicionarPetAltura,
  excluirPet,
  excluirAltura,
  excluirTutor,
  excluirAlturaTutor,
  excluirPetTutor,
  attPet,
  attTutor,
  getPets,
  getTutor,
  getAltura,
} from "./queries.js";

//view geral
export const pegarView = (req, res) => {
  try {
    db.query(itGo, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

//pegar pets por tutor
export const getPetTutor = (req, res) => {
  try {
    const { tutor } = req.params;

    db.query(getPetByTutor, [`${tutor}%`], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getPet = (req, res) => {
  try {
    db.query(getPets, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getTutorEP = (req, res) => {
  try {
    db.query(getTutor, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getAlturaEP = (req, res) => {
  try {
    db.query(getAltura, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// Pegar pets por altura
export const getPetAltura = (req, res) => {
  try {
    const { altura } = req.params;

    db.query(getPetByAltura, [`${altura}%`], (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const addTutor = (req, res) => {
  try {
    const { email, cpf, nome } = req.body;

    db.query(adicionarTutor, [email, cpf, nome], (error, results) => {
      if (error) {
        throw error;
      } else {
        try {
          db.query(pegarIDNovoTutor, (error, results) => {
            if (error) {
              throw error;
            } else {
              res.status(200).json({ id: results[0].id, email, cpf, nome });
            }
          });
        } catch (error) {
          console.error("Erro na inserção ao banco de dados:", error);
          res.status(500).json({ error: "Erro interno no servidor" });
        }
      }
    });
  } catch (error) {
    console.error("Erro na inserção ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const addPet = (req, res) => {
  try {
    let { nome, genero, tutor, tamanho } = req.body;

    db.query(adicionarPet, [nome, genero, tutor], (error, results) => {
      if (error) {
        throw error;
      } else {
        try {
          db.query(pegarIDNovoPet, (error, results) => {
            if (error) {
              throw error;
            } else {
              try {
                const id = results[0].id;
                if (tamanho < 15) {
                  tamanho = "p";
                } else if (tamanho > 15 && tamanho < 45) {
                  tamanho = "m";
                } else {
                  tamanho = "g";
                }
                db.query(
                  adicionarPetAltura,
                  [id, tamanho],
                  (error, results) => {
                    if (error) {
                      throw error;
                    } else {
                      res
                        .status(200)
                        .json({ id, nome, genero, tutor, tamanho });
                    }
                  }
                );
              } catch (error) {
                console.error("Erro na inserção ao banco de dados:", error);
                res.status(500).json({ error: "Erro interno no servidor" });
              }
            }
          });
        } catch (error) {
          console.error("Erro na inserção ao banco de dados:", error);
          res.status(500).json({ error: "Erro interno no servidor" });
        }
      }
    });
  } catch (error) {
    console.error("Erro na inserção ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteTutor = (req, res) => {
  try {
    const { id } = req.params;

    db.query(excluirAlturaTutor, [id], (error, results) => {
      if (error) {
        throw error;
      } else {
        try {
          db.query(excluirPetTutor, [id], (error, results) => {
            if (error) {
              throw error;
            } else {
              try {
                db.query(excluirTutor, [id], (error, results) => {
                  if (error) {
                    throw error;
                  } else {
                    res.status(200).json(`Tutor excluido com sucesso`);
                  }
                });
              } catch (error) {
                console.error("Erro na consulta ao banco de dados:", error);
                res.status(500).json({ error: "Erro interno no servidor" });
              }
            }
          });
        } catch (error) {
          console.error("Erro na consulta ao banco de dados:", error);
          res.status(500).json({ error: "Erro interno no servidor" });
        }
      }
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deletePet = (req, res) => {
  try {
    const { id } = req.params;

    db.query(excluirAltura, [id], (error, results) => {
      if (error) {
        throw error;
      } else {
        try {
          db.query(excluirPet, [id], (error, results) => {
            if (error) {
              throw error;
            } else {
              res.status(200).send(`Pet excluido com sucesso`);
            }
          });
        } catch (error) {
          console.error("Erro na consulta ao banco de dados:", error);
          res.status(500).json({ error: "Erro interno no servidor" });
        }
      }
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updatePet = (req, res) => {
  try {
    const { id } = req.params;
    const { nome, genero } = req.body;

    db.query(attPet, [nome, genero, id], (error, results) => {
      if (error) throw error;
      res.status(200).json(`Atualizado com sucesso`);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateTutor = (req, res) => {
  try {
    const { id } = req.params;
    const { nome, cpf, email } = req.body;

    db.query(attTutor, [email, cpf, nome, id], (error, results) => {
      if (error) throw error;
      res.status(200).json(`Atualizado com sucesso`);
    });
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

//CRUD

//getall
//getbyid
//update
//insert
//delete
