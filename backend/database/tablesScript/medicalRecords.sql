CREATE TABLE IF NOT EXISTS public.medical_records
(
    id serial NOT NULL,
    date date NOT NULL,
    doctor_id integer NOT NULL,
    consultation_reason text COLLATE pg_catalog."default" NOT NULL,
    recomendations text COLLATE pg_catalog."default" NOT NULL,
    diagnosis text COLLATE pg_catalog."default" NOT NULL,
    users_id integer NOT NULL,
    CONSTRAINT medical_records_pkey PRIMARY KEY (id),
    CONSTRAINT medical_records_doctors_id FOREIGN KEY (doctor_id) REFERENCES public.doctors (id),
    CONSTRAINT medical_records_users_id FOREIGN KEY (users_id) REFERENCES public.users (id),
);