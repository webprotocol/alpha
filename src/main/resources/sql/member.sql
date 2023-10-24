USE world;

drop table if exists member;

create table member ( 
     id         char(100) PRIMARY KEY,
     password   char(100) NOT NULL,
     roles      char(100)
);

insert into member values ('java', '1234', 'USER');
insert into member values ('python', '1234', 'USER');

commit;

select * from member;
