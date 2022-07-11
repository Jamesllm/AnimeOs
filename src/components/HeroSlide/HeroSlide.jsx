import "./hero-slide.scss";
/////
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

/////
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSlide({ items }) {
  SwiperCore.use([Autoplay]);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
      >
        {items.map((item, a) => (
          <SwiperSlide key={a}>
            {({ isActive }) => (
              <div
                className={`hero-slide__item ${isActive ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${item.background})`,
                }}
              >
                <div className="hero-slide__item__content container">
                  <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>

                    <div className="btns">
                      <Link to={`/${item.category}/${item.id}`}>
                        <button className="btn">
                          <FontAwesomeIcon icon="fa-solid fa-play" /> Ver Ahora
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="hero-slide__item__content__poster">
                    <img src={item.poster} alt={item.title} />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
