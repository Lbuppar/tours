import { useEffect, useState } from "react"
import "./App.css"
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import Error from "./components/Error";

const url = 'https://course-api.com/react-tours-project/'
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [tours, setTours] = useState([]);

    const handleInterest = (id) => {
        const newTours = tours.filter((tour) => {
            return tour.id !== id

        })

        setTours(newTours)

    }

    const fetchTours = async () => {

        try {

            const response = await fetch(url);
            if (!response.ok) {
                setIsLoading(false)
                setIsError(true)
                return;
            }
            const tours = await response.json();
            setIsLoading(false);
            setTours(tours)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
        }


    }

    useEffect(() => {

        fetchTours()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }

    if (tours.length < 1) {
        return <main className="app">
            <header>
                <h1>No Tours Left</h1>
                <div className="underline"></div>

                <button className="reset-btn" type="button" onClick={() => { fetchTours() }}>Reset Tours</button>
            </header>

        </main>
    }

    return (
        <main className="app">
            <header>
                <h1>Our Tours</h1>
                <div className="underline"></div>
            </header>

            <Tours tours={tours} handleInterest={handleInterest} />
        </main>
    )
}
export default App