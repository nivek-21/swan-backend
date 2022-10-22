-- drop database swan_db;
create database swan_db;
use swan_db;

create table roles(
	id int primary key auto_increment not null,
    name varchar(50) not null,
    slug varchar(50) not null,
    description text
);

insert into roles(name, slug, description) values ('Entrenador', 'coach', 'Usuario que puede crear rutinas');


create table users(
	id int(11) primary key auto_increment not null,
    name varchar(50) not null,
    first_last_name varchar(50) not null,
    second_last_name varchar(50),
    mail varchar(50) unique not null,
    password varchar(50) not null,
    address text,
    phone varchar(50),
    role_id int(11) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key(role_id) references roles(id) 
);

create table tokens(
	id int(11) primary key auto_increment not null,
    user_id int(11)not null,
    expires_at timestamp,
    token varchar(50) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table exercises(
	id int(11) primary key auto_increment not null,
    name varchar(50) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

insert into exercises(name) values ('Lagartijas'), ('Press de banca'), ('Sentadillas');


create table routines(
	id int(11) primary key auto_increment not null,
    user_id int(11) not null,
    created_by int(11) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key(user_id) references users(id),
    foreign key(created_by) references users(id)
);

create table exercise_routine(
	exercise_id int(11)not null,
    routine_id int(11)not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    foreign key(exercise_id) references exercises(id),
    foreign key(routine_id) references routines(id)
)
