CREATE TABLE IF NOT EXISTS public.speciality
(
    id serial NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    is_mental_care boolean NOT NULL,
    CONSTRAINT specialty_pkey PRIMARY KEY (id),
    CONSTRAINT specialty_name_key UNIQUE (name)
    

);

--SPECIALTY inserts
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Dermatology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Cardiology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Neurology', true);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Anesthesiology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Geriatric medicine', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Oncology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Gastroenterology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Ophthalmology', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ('Dentist', false);
INSERT INTO "speciality" ("name", "is_mental_care") VALUES ( 'Psychiatry', true);