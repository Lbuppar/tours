import { useState } from "react"

/* eslint-disable react/prop-types */
const Tour = ({ id, name, info, image, price, handleInterest }) => {
    const [readMore, setReadMore] = useState(true);
    return (
        <article className="tour">
            <img src={image} alt={name} className="image" />
            <footer>
                <div>
                    <h4 className="name">{name}</h4>
                    <p className="price">$ {price}</p>
                </div>

                {readMore ? <p className="info">{info.substring(0, 200)}
                    <button className="read" onClick={() => { setReadMore(false) }}>Read More</button>

                </p> : <p className="info">{info}
                    <button className="read" onClick={() => { setReadMore(true) }}>Read Less</button>
                </p>}

                <button type="button" onClick={() => { handleInterest(id) }}>Not Interested</button>
            </footer>
        </article >
    )
}
export default Tour