/* eslint-disable react/prop-types */
import Tour from "./Tour"
const Tours = (props) => {
    const { tours, handleInterest } = props;
    return (
        <section className="tours">
            {
                tours.map((tour) => {

                    return (
                        <Tour key={tour.id} {...tour} handleInterest={handleInterest} />
                    )

                })
            }
        </section>
    )
}
export default Tours