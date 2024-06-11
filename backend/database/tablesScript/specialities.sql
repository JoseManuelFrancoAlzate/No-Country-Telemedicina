CREATE TABLE IF NOT EXISTS public.specialty
(
    id serial NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    is_mental_care boolean NOT NULL,
    CONSTRAINT specialty_pkey PRIMARY KEY (id),
    CONSTRAINT specialty_name_key UNIQUE (name)
    

);

--SPECIALTY inserts
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Dermatology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Cardiology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Neurology', true);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Anesthesiology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Geriatric medicine', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Oncology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Gastroenterology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Ophthalmology', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ('Dentist', false);
INSERT INTO "specialty" ("name", "is_mental_care") VALUES ( 'Psychiatry', true);