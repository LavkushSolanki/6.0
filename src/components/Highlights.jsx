import Speaker from "./Speaker"
import Stats from "./Stats"
import Slider from "react-slick"
import Glimpse from "./Glimpse";

const speakers = [
  {
    key: 0,
    name: "Shreeyaan Daga",
    image: "/assets/images/highlights/sp1.png",
    position: "Co-Founder OLL"
  },
  {
    key: 1,
    name: "Dr. Omkar Rai",
    image: "/assets/images/highlights/sp2.jpg",
    position: "Executive Chairman of Startup Odisha"
  },
  {
    key: 2,
    name: "Dipan Sahu",
    image: "/assets/images/highlights/sp3.webp",
    position: "Asst. Innovation Director,Ministry of Education's Innovation Cell & AICTE,Government of India"
  },
  {
    key: 3,
    name: "Bhaskar Majumdar",
    image: "/assets/images/highlights/sp4.jpeg",
    position: "Founder & Managing Partner Unicorn India Ventures"
  }
];
const stats = [
  {
    num: "5",
    title: "Events",
  },
  {
    num: '150+',
    title: "Participants",
  },
  {
    num: "100K",
    title: "Prize Pool"
  },
  {
    num: "15",
    title: "Sponsors"
  }
];
const glim = ['/assets/images/highlights/p1.JPG', '/assets/images/highlights/p2.JPG', '/assets/images/highlights/p3.JPG', '/assets/images/highlights/p4.JPG', '/assets/images/highlights/p16.JPG', '/assets/images/highlights/p26.JPG'];


export default function Highlights() {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 1500,
    slidesToShow: (window.innerWidth < 400) ? 1 : (window.innerWidth < 900) ? 2 : 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 800,
    centerMode: true,
    centerPadding: '1px',
    swipeToSlide: true,
    swipe: true,
  };
  return (
    <div className=" flex justify-start flex-col overflow-x-hidden bg-[#000505]  w-full h-screen p-3">
      <div className="w-screen h-40 flex flex-col justify-center items-center p-2 ">
        <img src="/assets/images/highlights/border.png" className="w-96" />
        <div className="flex gap-2 items-center">
          <h1 className="font-anton text-white text-4xl  mt-3">E FEST 5.0 </h1>
          <h1 className="text-[#db0c26] font-anton text-4xl mt-3 ">HIGHLIGHTS</h1>
        </div>
        <img src="/assets/images/highlights/border.png" className="w-96" />
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="p-3 my-8 md:w-1/2 w-[290px]">
          <p className="font-anton text-white text-lg md:text-xl">E-Fest 5.0 was the 5th edition of annual entrepreneurship festival held at Silicon University(formerly Silicon Institute of Technology) in Bhubaneswar.Participants came from over 40 institutions and the event emerged as a significant gathering in the entrepreneurship landscape,fostering business culture and innovative ideas among students. </p>
          <br></br>
          <p className="font-anton text-white text-lg md:text-xl">Students enthusiastically engaged in various events (namely Biding War,Biz Tank,Pitch Against a Startup,Ad-Mad Show and Prototype Exhibition) that enhanced their skills while connecting with peers,seniors from across Odisha and entrepreneurs across India. </p>
          <br></br>
          <p className="font-anton text-white text-lg md:text-xl">Building on its success and great responses recieved by students,Entrepreneurship Development Cell plans to continue its legacy and come up with new ideas and inititatives.Buckle up for more surprises to come!</p>
        </div>
        <div className="flex flex-col items-center p-2 mt-4">
          <h1 className="font-anton text-white text-2xl bg-red-600 p-3 m-3 mb-5 inline">Stats</h1>
          <div className="grid-cols-2 grid gap-5 ">
            {stats.map((item) => (<Stats num={item.num} title={item.title} />))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-2 ">
        <h1 className="font-anton text-white text-2xl bg-red-600 p-3 m-8">Guest Speakers</h1>
        <div className="grid-cols-2 grid gap-6 md:flex md:gap-12 md:mt-8 ">
          {speakers.map((item) => (<Speaker image={item.image} name={item.name} position={item.position} minus={(item.key % 2 == 0) ? "rotate-3" : "-rotate-3"} />))}
        </div>
      </div>
      <div className="justify-center w-screen items-center md:p-5 flex flex-col gap-2">
        <h1 className="font-anton text-white text-2xl bg-red-600 p-3 m-5 mb-5 inline">Glimpse</h1>
        <Slider {...settings} className="w-[290px] md:w-3/4 items-center flex justify-center relative right-2">
          {glim.map((item) => (<Glimpse image={item}></Glimpse>))}
        </Slider>
      </div>
    </div>
  )
}
