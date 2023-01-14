import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useParams } from 'react-router-dom';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({itemDetails}) => {

    const [credits, setCredits] = useState([]);

    let params = useParams();
    console.log(params.id);
    console.log(params.media_type);

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        767: {
            items: 3,
        },
        991: {
            items: 4,
        },
        1024: {
            items: 5,
        },
    };

    const fetchCredits = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${params.media_type}/${params.id}/credits?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`
        );
        setCredits(data.cast);
    };
    
    useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
    }, []);

    const items = credits.map((credit) => (
        <div className=" mb-5 pb-5 text-center w-100 h-100 mx-2">
            <div className="carouselItem mx-2 ">
            {credit.profile_path ?
            <img 
                className='w-100 h-100' 
                src={'https://image.tmdb.org/t/p/w500'+credit.profile_path} 
                alt={credit.id}
                onDragStart={handleDragStart}
            />
            :
            ''}
            {!credit.profile_path ?
            <img 
                className='w-100 h-100' 
                src='https://th.bing.com/th/id/OIP.ADL8aPiXLE3RhVyPKYaomAHaFd?w=235&h=180&
                    c=7&r=0&o=5&dpr=1.3&pid=1.7' 
                alt={credit.id}
                onDragStart={handleDragStart}
            />
            :
            ''}
            <b className="carouselItem__txt">{credit?.name}</b>
        </div>
        </div>
        ));

    return (
        <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        />
    );
}

export default Carousel