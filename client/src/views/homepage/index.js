import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../../assets/newlogo.png";
import about from "../../assets/about.svg";
import hero from "../../assets/hero.svg";
import contact from "../../assets/contact.svg";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import p1 from "../../assets/images/undraw_resume_folder_re_e0bi.svg";
import p2 from "../../assets/images/undraw_resume_re_hkth.svg";
import p3 from "../../assets/images/undraw_online_resume_re_ru7s.svg";
import p4 from "../../assets/images/undraw_updated_resume_re_7r9j.svg";

const images = [
  { src: p1, alt: "Image 1" },
  { src: p2, alt: "Image 2" },
  { src: p3, alt: "Image 3" },
  { src: p4, alt: "Image 4" },
];

const testimonials = [
  {
    name: "Emily W. - Marketing Professional",
    feedback:
      "SmartFolio transformed my job search! The resume builder made creating a standout CV a breeze. Thanks to SmartFolio, I landed my dream job in no time.",
    img: pic1,
  },
  {
    name: "John M. - Graphic Designer",
    feedback:
      "I'm blown away by SmartFolio's portfolio feature. It allowed me to showcase my design projects beautifully. My clients love it, and I've seen an increase in new business opportunities.",
    img: pic2,
  },
  {
    name: "Sarah T. - Recent Graduate",
    feedback:
      "As a recent graduate, I was struggling with my first job applications. SmartFolio's cover letter creator gave me the confidence I needed. I got interviews and offers right away. Thank you, SmartFolio!",
    img: pic3,
  },
];

const Home = () => {
  let navigator = useNavigate();
  let location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {/* NavBar Section */}
      <div className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="flex justify-between items-center p-1 md:px-12">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="font-semibold text-2xl text-lime-500 p-1 mt-1.5 cursor-pointer"
            >
              SmartFolio
            </Link>
          </div>
          <div className="hidden md:flex gap-5 font-medium p-2.5">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                localStorage.clear();
                navigator(`/login`);
              }}
              className="hover:text-brightGreen transition-all cursor-pointer"
            >
              Login / SignUp
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white p-2.5 flex flex-col items-center shadow-md">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightGreen transition-all cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                localStorage.clear();
                navigator(`/login`);
                setMenuOpen(false);
              }}
              className="hover:text-brightGreen transition-all cursor-pointer py-2"
            >
              Login / SignUp
            </button>
          </div>
        )}
      </div>

      {/* Home Section */}
      <div id="home" className="min-h-[80vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-16">
        <div className="md:w-2/4 text-center">
          <h2 className="text-5xl font-semibold leading-tight">Welcome to</h2>
          <span className="text-5xl font-semibold text-lime-500">SmartFolio</span>
          <p className="text-lightText mt-5 text-start">
            Are you ready to take your career to the next level? Look no
            further! SmartFolio is here to empower you on your journey towards
            professional excellence.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <button className="bg-teal-500 text-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[] hover:bg-emerald-700 hover:text-white transition-all">
              Learn More
            </button>
          </Link>
        </div>
        <div className="w-full md:w-2/4 p-8">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
        <div className={`w-full md:w-2/4 transition-transform duration-1000 ${loaded ? 'translate-x-0' : '-translate-x-full'}`}>
          <img src={about} alt="img" className="w-full" />
        </div>
        <div className={`w-full md:w-2/4 text-center space-y-2 transition-transform duration-1000 ${loaded ? 'translate-x-0' : 'translate-x-full'}`}>
          <h1 className="text-4xl font-semibold">
            About
            <span className="text-green-300"> Us?</span>
          </h1>
          <p>
            At SmartFolio, we're passionate about helping individuals reach
            their career aspirations. Our mission is to simplify the path to
            professional success by providing intuitive tools for crafting
            compelling cover letters, building standout resumes, and creating
            stunning portfolios. With a focus on user-friendliness,
            customization, and data security, we empower you to make a lasting
            impression on employers and clients alike. Join us on your journey
            to career excellence and let SmartFolio be your trusted partner in
            achieving your goals.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 mt-10">
        <h1 className="text-4xl font-semibold">Testimonials</h1>
        <div className="hidden md:flex flex-col md:flex-row gap-5 mt-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              <div>
                <p className="text-lightText">
                  <b>{testimonial.name}</b>
                  <br />
                  {testimonial.feedback}
                </p>
              </div>
              <div className="flex flex-row justify-center">
                <img className="rounded-full w-1/4 pt-5" src={testimonial.img} alt="img" />
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden w-full mt-5">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-5">
                <div className="bg-white border-2 border-lightText p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  <div>
                    <p className="text-lightText">
                      <b>{testimonial.name}</b>
                      <br />
                      {testimonial.feedback}
                    </p>
                  </div>
                  <div className="flex flex-row justify-center">
                    <img className="rounded-full w-1/4 pt-5" src={testimonial.img} alt="img" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
