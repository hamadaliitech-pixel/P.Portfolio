import "swiper/css";
import "swiper/css/effect-cards";
import { HerolowerImages } from "../assets/HeaderContent/Image.jsx";
import Masonry from "react-masonry-css"; //Got installed
import { Autoplay,EffectCards  } from "swiper/modules";
import { heroImages } from "../assets/HeaderContent/Image.jsx";
import { Swiper,SwiperSlide } from "swiper/react"; //Got installed
import imges from "../assets/HeaderContent/slider.jpg"
const Heropallete = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="flex flex-col gap-10 py-10 justify-center items-center">
      <div className="thecover bg-cover flex items-center shadow-2xl h-[85vh] w-[97vw] rounded-3xl p-16">
        <div className=" text-white w-1/4 flex flex-col gap-5">
          <div className="text-6xl">Photographer </div>
          <div className="text-5xl">Protfolio</div>
          <div>
            Hi! I'm [Name], a portrait photographer dedicated to helping women
            embrace their unique beauty and strength. I specialize in candid,
            light-filled photography, transforming ordinary moments into
            timeless memories. I believe in capturing true emotion, not perfect
            poses. When I'm not shooting, you'll find me exploring the outdoors.
            Let's make your memories unforgettable contact me today.
          </div>
          <div className="btns flex gap-4 px-3">
            <button className="bg-white text-black text-xl py-2 px-5 rounded-4xl">
              check out
            </button>
            <button className="bg-white text-black text-xl py-2 px-5 rounded-4xl">
              check out
            </button>
          </div>
        </div>
      </div>
      {/* AutoSlider */}
      <div className=" bg-[#C6AC8F] h-96 w-[97vw] rounded-3xl flex justify-center items-center">
        <Swiper
          effect={"cards"}
          lazy={true}
          grabCursor={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" className="w-full h-80 object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* HeroLowerpart */}
      <div className="w-3/4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {HerolowerImages.map((img, i) => (
            <img key={i} src={img} className="rounded-xl" />
          ))}
        </Masonry>
      </div>
      {/* Footer */}
      <img src={imges} alt="photo" />

    </div>
  );
};

export default Heropallete;
