import axios from 'axios';
import React, { useEffect } from 'react';

const GenresCustom = ({type, setPage, selectedGenres, setSelectedGenres, Genre, setGenres}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(Genre.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...Genre, genre]);
        setPage(1);
    };

    const getGenres = async () => {
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/genre/${type}/list?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US
        `);
        setGenres(data.genres);
    };

    useEffect(() => {
        getGenres();
        return () => {
            setGenres([]); // unmounting
        };
        // eslint-disable-next-line
    }, []);


    return (
        <div style={{margin: '0 0 2rem'}}>
            <div className='d-flex flex-wrap'>
            {selectedGenres && 
            selectedGenres.map((genre) => (
                    <p
                    className='span text-danger mx-2 my-2 px-2 bg-dark'
                    key={genre.id}
                    onClick={() => handleRemove(genre)}
                >
                    {genre.name}
                </p>
            ))}
                </div>
                <div className='d-flex flex-wrap'>
            {Genre && 
            Genre.map((genre) => (
                <span
                    key={genre.id}
                    className='text-primary span mx-2 my-2 bg-white rounded px-2'
                    onClick={() => handleAdd(genre)}
                >
                    {genre.name}
                </span>
            ))}
                </div>
        </div>
    )
}

export default GenresCustom