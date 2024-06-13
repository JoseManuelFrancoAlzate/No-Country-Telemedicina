CREATE TABLE IF NOT EXISTS public.doctors
(
    id bigint NOT NULL,
    licence_number character varying(50) COLLATE pg_catalog."default",
    identification_number character varying(50) COLLATE pg_catalog."default" ,
    name character varying(50) COLLATE pg_catalog."default" ,
    last_name character varying(50) COLLATE pg_catalog."default" ,
    phone_number bigint ,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    active boolean NOT NULL DEFAULT false,
    licence_photo text COLLATE pg_catalog."default",
    profile_picture text COLLATE pg_catalog."default",
    genre character varying(50),
    birth_date date,
    biography text COLLATE pg_catalog."default",
    speciality_id bigint,
    CONSTRAINT doctors_pkey PRIMARY KEY (id),
    CONSTRAINT doctors_email_key UNIQUE (email),
    UNIQUE (licence_number, identification_number),
    CONSTRAINT doctors_login_email_fkey FOREIGN KEY (id)
    REFERENCES public.login (id),
    CONSTRAINT doctor_specialty_specialty_fk FOREIGN KEY (speciality_id) REFERENCES public.speciality (id)
);