USE master
GO
PRINT 'Restoring db'
 -------------------------------------------------
--> Restoring friends 
-------------------------------------------------
RESTORE DATABASE AdventureWorksLT2017
FROM DISK =  N'/work/AdventureWorksLT2017.bak'
WITH FILE = 1,
     MOVE N'AdventureWorksLT2012_Data'
     TO  N'/var/opt/mssql/data/AdventureWorksLT2017.mdf',
     MOVE N'AdventureWorksLT2012_Log'
     TO  N'/var/opt/mssql/data/AdventureWorksLT2017_log.ldf',
     NOUNLOAD,
     STATS = 5;
GO

-- -------------------------------------------------
-- --> Adding user AdventureUser 
-- -------------------------------------------------
-- USE master;
-- GO
-- CREATE LOGIN AdventureUser
-- WITH PASSWORD = N'Adventure.@2018',
--      DEFAULT_DATABASE = AdventureWorks2017
-- GO
-- -------------------------------------------------
-- --> Adding permissions to AdventureUser
-- -------------------------------------------------
-- USE AdventureWorks2017
-- GO
-- CREATE USER AdventureUser FOR LOGIN AdventureUser
-- GO
-- USE AdventureWorks2017
-- GO
-- ALTER ROLE db_owner ADD MEMBER AdventureUser
-- GO