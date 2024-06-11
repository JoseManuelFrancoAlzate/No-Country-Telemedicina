"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [usersTestimonials, setUsersTestimonials] = useState([
        {
            name: "Elliot Anderson",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "Andrea Ramirez",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "Felipe Cortez",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "María López",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "María López",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "María López",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        },
        {
            name: "Elliot.svg",
            photo: "Elliot.svg",
            patient: "Patient of therapy",
            text: "Mr. Robot es una serie de televisión de género tecno-thriller y drama estadounidense creada por Sam Esmail. Está protagonizada por Rami Malek como Elliot Alderson, un ingeniero de seguridad informática y pirata informático que padece un trastorno de identidad disociativo, trastorno de ansiedad social y depresión clínica.",
            stars: [false, false, false, false, false]
        }
    ]);

    const starHandle = (index, testimonialIndex) => {
        setUsersTestimonials(prevState => {
            const newState = prevState.map((testimonial, i) => {
                if (i === testimonialIndex) {
                    return {
                        ...testimonial,
                        stars: testimonial.stars.map((star, j) => j <= index)
                    };
                }
                return testimonial;
            });
            return newState;
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="flex justify-center bg-white text-black min-h-screen mt-32">
            <div className="container mx-auto py-10">
                <center>
                    <div className=" relative bg-blue-300  rounded-lg text-center w-3/5 ">
                        <h1 className="relative top-[-25px] font-black text-5xl">Testimonials</h1>
                    </div>
                </center>
                <Slider {...settings} className="mt-10">
                    {usersTestimonials.map((element, testimonialIndex) => (
                        <div key={testimonialIndex} className="p-4">
                            <div className="relative w-full border-4 border-black rounded-lg h-auto pb-4">
                                <div className="p-4 break-all">
                                    <div className="flex gap-1 mb-4">
                                        {element.stars.map((boolean, index) => (
                                            boolean ? (
                                                <FaStar
                                                    onClick={() => starHandle(index, testimonialIndex)}
                                                    key={index}
                                                    className="text-yellow-400 cursor-pointer"
                                                />
                                            ) : (
                                                <CiStar
                                                    onClick={() => starHandle(index, testimonialIndex)}
                                                    key={index}
                                                    className="text-gray-400 cursor-pointer"
                                                />
                                            )
                                        ))}
                                    </div>
                                    <p className="text-black">
                                        {element.text}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-4 bg-gray-100 rounded-lg p-4">
                                    <div className="text-center">
                                        <Image
                                            alt={element.name}
                                            className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                                            src={element.photo}
                                            width={96}
                                            height={96}
                                        />
                                        <p className="font-extrabold">{element.name}</p>
                                        <p className="text-xs">{element.patient}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
