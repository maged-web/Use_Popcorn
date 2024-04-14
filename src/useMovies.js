import { useEffect, useRef, useState } from "react";

export function useMovie(query) {
    const [movies, setMovies] = useState([]);
    /*   const [watched, setWatched] = useState([]);
     */  const [isLOading, setIsLOading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(function () {
        const controller = new AbortController();
        async function fetchMovies() {
            try {
                setIsLOading(true);
                setError('')
                const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=b9be00b3
          }`, { signal: controller.signal });
                if (!res.ok)
                    throw new Error("Something went wrong with fetching movie")
                const data = await res.json();
                if (data.Response == 'False') throw new Error('movie not found')
                setMovies(data.Search);
                setError("");

            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message)
                }
            } finally {
                setIsLOading(false)
            }
        }
        if (query.length < 3) {
            setMovies([]);
            setError('');
            return;
        }
        fetchMovies()
        return function () {
            controller.abort();
        }
    }, [query])
    return { movies, isLOading, error }

}