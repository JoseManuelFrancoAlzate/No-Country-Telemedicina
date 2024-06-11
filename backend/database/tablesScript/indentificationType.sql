CREATE TABLE IF NOT EXISTS public.identification_type
(
    id serial NOT NULL,
    identification_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT identification_type_pkey PRIMARY KEY (id),
    CONSTRAINT identification_type_identification_name_key UNIQUE (identification_name)
);

-- IDENTIFICATION_TYPE inserts
INSERT INTO "identification_type" ("identification_name") VALUES ('Passport');
INSERT INTO "identification_type" ("identification_name") VALUES ('Local Identification Number');
INSERT INTO "identification_type" ("identification_name") VALUES ('DNI');