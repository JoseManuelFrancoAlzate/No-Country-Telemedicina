CREATE OR REPLACE FUNCTION insert_into_doctors (
    p_licence_number character varying(50),
    p_dni character varying(50),
    p_name character varying(50),
    p_last_name character varying(50),
    p_phone_number bigint,
    p_email character varying(100),
    p_active boolean,
    p_licence_photo text,
    p_profile_picture text,
    p_birth_date date,
    p_biography text
)
RETURNS VOID AS
$$
BEGIN 
    INSERT INTO doctors (
        licence_number, 
        dni, 
        name, 
        last_name, 
        phone_number, 
        email, 
        active,
        licence_photo,
        profile_picture,
        birth_date,
        biography
    ) VALUES (
        p_licence_number,
        p_dni,
        p_name,
        p_last_name,
        p_phone_number,
        p_email,
        p_active,
        p_licence_photo,
        p_profile_picture,
        p_birth_date,
        p_biography
    );
END;
$$
LANGUAGE plpgsql;