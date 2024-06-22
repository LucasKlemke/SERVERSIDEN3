create table tutor (id int auto_increment primary key, cpf varchar(20), email varchar(20), nome varchar(20));

create table pet (id int auto_increment primary key, nome varchar(20), genero varchar(20), tutor int, foreign key (tutor) references tutor(id));

create table altura_pet (id int auto_increment primary key, pet int,tutor int, altura varchar(20), foreign key (pet) references pet(id), foreign key (tutor) references pet(tutor));

CREATE VIEW pet_altura_tutor_view AS
SELECT 
    pet.nome AS nome_pet,
    altura_pet.altura AS altura_pet,
    tutor.nome AS nome_tutor,
    pet.genero AS genero_pet
FROM 
    pet
JOIN 
    altura_pet ON pet.id = altura_pet.pet
JOIN 
    tutor ON pet.tutor = tutor.id;