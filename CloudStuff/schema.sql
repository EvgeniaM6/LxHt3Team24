create table Users(Id int NOT NULL, Age int, Location varchar(39), UserType varchar(39), PhoneNumber varchar(15), GovId varchar(15), Email varchar(39), AppealsCount int, PRIMARY KEY(Id));

create table AppealHouse(AppealID int, UserID int, PRIMARY KEY(AppealID, UserID));

create table Appeals(Id int, RegistrationTime datetime, Conversation ntext, AdminID int, AppealType char(19), Status tinyint, PRIMARY KEY(Id));


