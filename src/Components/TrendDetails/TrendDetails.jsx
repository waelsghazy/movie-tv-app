import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from "../Carousel/Carousel";

function TrendDetails() {
    let params = useParams();
    console.log(params.id);
    console.log(params.media_type);
    const [itemDetails, setItemDetails] = useState({})
    const [arr, setArr] = useState([])
    async function getItemDetails () {
        let {data} = 
        await axios.get(`
        https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=f1aca93e54807386df3f6972a5c33b50&
        language=en-US
        `)
        setItemDetails(data)
        setArr(data.genres)
    }
    useEffect(() => {
        getItemDetails()
        // eslint-disable-next-line
    }, [])
    return (
        <Container className="text-white">
        <div>
        <Row className="gy-5">
            <Col
                md={4}
            >
            {itemDetails.poster_path ?
            <img className='w-100 h-100'
                src={'https://image.tmdb.org/t/p/w500'+itemDetails.poster_path} 
                alt={itemDetails.id}
            />
            :
            ''}
            {itemDetails.profile_path ?
            <img 
                className='w-100 h-100'
                src={'https://image.tmdb.org/t/p/w500'+itemDetails.profile_path} 
                alt={itemDetails.id}
            />
            :
            ''}
            {!itemDetails.poster_path && 
            !itemDetails.profile_path ?
            <img 
                className='w-100 h-100' 
                src='https://th.bing.com/th/id/OIP.ADL8aPiXLE3RhVyPKYaomAHaFd?w=235&h=180&
                    c=7&r=0&o=5&dpr=1.3&pid=1.7' 
                alt={itemDetails.id}
            />
            :
            ''}
            </Col>
            <Col
                md={8}
                className='pb-5'
            >
                <h3>
                    {itemDetails.title} {itemDetails.name}
                </h3>
                <p 
                    className="text-muted"
                >
                    {itemDetails.tagline}
                </p>
                <div className="d-flex flex-wrap">
                {arr ? 
                arr.map((e) => 
                        <p 
                            className='bg-info me-2 p-2' 
                            key={e.id}
                        >
                            {e.name}
                    </p>
                    
                )
                :
                ''}
                </div>
                {itemDetails.vote_average ? 
                <h5 
                    className='my-4'
                >
                    Vote: {itemDetails.vote_average?.toFixed(1)}
                </h5>
                :
                ''}
                {itemDetails.vote_count ?
                <h5 
                    className='mb-4'
                >
                    Vote Count: {itemDetails.vote_count}</h5>
                :
                ''}
                {itemDetails.popularity ?
                <h5 
                    className='mb-4'
                >
                    Popularity: {itemDetails.popularity}
                </h5>
                :
                ''}
                {itemDetails.release_date ?
                <h5 
                    className='mb-4'
                >
                    Release Date: {itemDetails.release_date}
                </h5>
                :
                ''}
                <p 
                    className="text-muted"
                >
                    {itemDetails.overview} {itemDetails.biography}
                </p>
            </Col>
        </Row>
        </div>
        <div className="my-5">
            <Carousel itemDetails={itemDetails} />
        </div>
        </Container>
    )
}

export default TrendDetails