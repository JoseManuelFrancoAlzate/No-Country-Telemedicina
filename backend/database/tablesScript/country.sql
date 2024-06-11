CREATE TABLE IF NOT EXISTS public.country
(
    id serial NOT NULL,
    country_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT country_pkey PRIMARY KEY (id),
    CONSTRAINT country_country_name_key UNIQUE (country_name)
);


-- Country Inserts
INSERT INTO country ("country_name") VALUES ('Argentina');
INSERT INTO country ("country_name") VALUES ('Colombia');
INSERT INTO country ("country_name") VALUES ('Venezuela');
INSERT INTO country ("country_name") VALUES ('Chile');