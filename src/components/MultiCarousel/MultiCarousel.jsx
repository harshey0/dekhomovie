import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./MultiCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function MultiCarousel({ type }) {
  const [moviesList, setMoviesList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${
      type || "popular"
    }?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWEwMzUwMjFjYWZmNDUwZTZmMTBiZjgxMDM0OWY3MCIsInN1YiI6IjY0ZWQ3NTBmMWZlYWMxMDExYjJmM2Y0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cA26OYeNmvFGxERQypAo5RiIBKsr1NGph8QCsHdLrFo",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMoviesList(data.results);
        // setIsLoading(false)
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 768 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="carousel-container">
      <h2 className="heading">
        {type === "top_rated"
          ? "Top Rated"
          : type === "popular"
          ? "Popular"
          : type === "upcoming"
          ? "Upcoming"
          : type === "now_playing"
          ? "Now Playing"
          : ""}{" "}
        Movies
        <Link to={`/movies/${type}`} className="explore">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </h2>
      <Carousel
        className="multi-carousel"
        responsive={responsive}
        transitionDuration={1000}
      >
        {moviesList.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </Carousel>
    </div>
  );
}
