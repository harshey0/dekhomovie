import { useState } from "react"
import './MovieListHeading.css'
const sortIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sort-alpha-down" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
<path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
</svg>

const downIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
export default function MovieListHeading({ type, sortByDate, sortByPopularity, sortByRating }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    

    let content;
    return (
        <div className="heading" style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ display: 'inline' }}>{type === 'top_rated' ? 'Top Rated'
                : type === 'popular' ? 'Popular'
                    : type === 'upcoming' ? 'Upcoming'
                        : type === 'now_playing' ? 'Now Playing'
                            : ''} Movies</h1>


            <span className="sort-menu" onMouseLeave={() => setIsMenuVisible(false)}>

                <button id="main-button" onMouseEnter={() => setIsMenuVisible(true)}>
                    {sortIcon} <span>Sort</span> {downIcon}
                </button>

                <span className="menu-buttons" style={{ display: isMenuVisible ? "flex" : "none" }}>
                    {/* <button disabled>
                        Sort By
                    </button> */}
                    <button onClick={sortByDate}>
                        Date released
                    </button>

                    <button onClick={sortByPopularity}>
                        Popularity
                    </button>

                    <button onClick={sortByRating}>
                        Rating
                    </button>
                </span>

            </span>
        </div>
    )
}