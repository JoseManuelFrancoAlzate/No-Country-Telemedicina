CREATE TABLE IF NOT EXISTS public.users
(
    id serial NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" ,
    last_name character varying(50) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    identification_number character varying(50) COLLATE pg_catalog."default" ,
    birth_date date ,
    profile_picture text COLLATE pg_catalog."default" DEFAULT 'https://i.postimg.cc/HnCdk2YS/profile-user-pngrepo-com.png',
    genre character varying(50),
    country_id integer,
    identification_type integer ,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    UNIQUE (identification_number)
);