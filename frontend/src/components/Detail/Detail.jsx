"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Detail = () => {
  let doctors = [
    { image: "/taylor.svg", name: "Taylor Swift", patient: "Cardiologist" },
    { image: "/rud.jpg", name: "Rud Johnson", patient: "Cardiologist" },
    { image: "/adrian.jpg", name: "Adrian Smith", patient: "Cardiologist" },
    { image: "/robert.jpg", name: "Robert Brown", patient: "Cardiologist" },
    { image: "/newdoctor.jpg", name: "New Doctor", patient: "Therapist" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-black min-h-screen mt-10">
      <div className="relative container top-10">
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-20">
          All
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Therapist
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Pediatrician
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Urologists
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Doctor
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Family doctor
        </button>
        <button className="relative left-2 font-ubuntu bg-[rgb(30,41,59)] focus:font-sans focus:font-bold focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white rounded-full p-2 mr-5 w-40">
          Gynecologist
        </button>
      </div>

      <div className="flex flex-col items-center mt-20 relative">
        <div className="w-full bg-gray-300 absolute top-0 left-0 h-[60%] z-0"></div>
        <h1 className="text-black font-black text-5xl mb-10 relative z-10">
          Know Your Doctors
        </h1>
        <div className="w-full px-8 relative z-10">
          <Slider {...settings}>
            {doctors.map((doctor, index) => (
              <div key={index} className="">
                <div className="flex flex-col items-center w-[300px] h-[394px] border-4 bg-gray-200 rounded-2xl pb-4 mx-auto">
                  <Image
                    className="mt-4"
                    src={doctor.image}
                    width={188}
                    height={162}
                    alt={doctor.name}
                  />
                  <p className="mt-6 font-extrabold">{doctor.name}</p>
                  <p className="mt-2 text-green-900">{doctor.patient}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Detail;
