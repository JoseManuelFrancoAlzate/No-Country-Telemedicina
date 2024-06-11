-- View: public.vw_users_info

-- DROP VIEW public.vw_users_info;

CREATE OR REPLACE VIEW public.vw_users_info
 AS
 SELECT users.id,
    (users.name::text || ' '::text) || users.last_name::text AS full_name,
    users.email,
    users.identification_number,
    to_char(users.birth_date::timestamp with time zone, 'DD-MM-YYYY'::text) AS birth_date,
    users.profile_picture,
    users.genre,
    country.country_name,
    ide.identification_name
   FROM users
     JOIN country ON country.id = users.country_id
     JOIN identification_type ide ON ide.id = users.identification_type;

ALTER TABLE public.vw_users_info
    OWNER TO postgres;

