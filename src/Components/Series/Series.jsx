import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrendingItem from '../TrendItem/TrendItem';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import GenresCustom from '../GenresCustom/GenresCustom';
import useGenre from '../../CustomHook/useGenre';

const Series = () => {
    const [Genre, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);

    const [trendingAll, setTrendingAll] = useState([]);
    const genreForURL = useGenre(selectedGenres);
    const getTrending = async () => {
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/discover/tv?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US
        &sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}
        `);
        setTrendingAll(data.results);
    };

    useEffect(() => {
        getTrending();
        // eslint-disable-next-line
    }, [page, genreForURL]);

    const pageNum = new Array(10).fill(1).map((e, index) => index+1);

    return (
        <Container>
            <h4 className='trending-header'>Trending TV Shows</h4>
            <GenresCustom 
                type='tv'
                setPage={setPage}
                Genre={Genre}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
            />
            <Row className='gy-4'>
            {trendingAll.map((trending) => (
                    <Col 
                    key={trending.id}
                    lg={3}
                    md={6}
                    sm={1}
                >
                    <TrendingItem trending={trending} media_type='tv' />
                </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-center align-items-center">
            {pageNum.map((pag, index) => (
            
            <PaginationCustom 
                pag={pag} 
                setPage={setPage} 
                key={index} 
            />
            ))}
            </div>
        </Container>
    )
}

export default Series