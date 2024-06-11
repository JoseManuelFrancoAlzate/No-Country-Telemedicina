CREATE TABLE IF NOT EXISTS public.login
(
    id serial NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    role character varying(50) NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT login_pkey PRIMARY KEY (id),
    CONSTRAINT login_email_key UNIQUE (email)
);