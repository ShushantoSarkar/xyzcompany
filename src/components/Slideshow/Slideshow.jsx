import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slideshow.css";

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img
//     src="../Data/Group 107.svg"
//     onDragStart={handleDragStart}
//     role="presentation"
//   />,
//   <img
//     src="../Data/Group 107.svg"
//     onDragStart={handleDragStart}
//     role="presentation"
//   />,
//   <img
//     src="../Data/Group 107.svg"
//     onDragStart={handleDragStart}
//     role="presentation"
//   />,
//   <img
//     src="../Data/Group 107.svg"
//     onDragStart={handleDragStart}
//     role="presentation"
//   />,
// ];

// export const Slideshow = () => {
//   return (
//     <>
//       <AliceCarousel mouseTracking items={items} />
//     </>
//   );
// };

// export default Slideshow;

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 30;

const _items = [
  {
    player: {
      title: "LOREM IPSUM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
      image: "../Data/Group 107.svg",
    },
  },
  {
    player: {
      title: "LOREM IPSUM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
      image: "../Data/Group 107.svg",
    },
  },
  {
    player: {
      title: "LOREM IPSUM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
      image: "../Data/Group 107.svg",
    },
  },
  {
    player: {
      title: "LOREM IPSUM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
      image: "../Data/Group 107.svg",
    },
  },
  {
    player: {
      title: "LOREM IPSUM",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
      image: "../Data/Group 107.svg",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <div className="divForUL">
      <ul className="carousel__ul">
        <li className="carousel__slide-item" style={item.styles}>
          <div className="carousel__slide-item-img-link">
            <img src={item.player.image} alt={item.player.title} />
          </div>
          <div className="carousel-slide-item__body">
            <h4>{item.player.title}</h4>
            <p>{item.player.desc}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

const keys = Array.from(Array(_items.length).keys());

export const Slideshow = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <h2>
            SIMPLY <span>LOREM IPSUM</span> IS DUMMY TEXT OF THE{" "}
            <span>PRINTING</span>
          </h2>
          <h1>SERVICES</h1>
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
