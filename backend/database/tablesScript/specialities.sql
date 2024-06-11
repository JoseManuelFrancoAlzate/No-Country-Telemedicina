CREATE TABLE IF NOT EXISTS public.specialty
(
    id serial NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    is_mental_care boolean NOT NULL,
    CONSTRAINT specialty_pkey PRIMARY KEY (id),
    CONSTRAINT specialty_name_key UNIQUE (name)
);