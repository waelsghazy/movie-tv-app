import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import TrendingItem from '../TrendItem/TrendItem'

const TrendAll = () => {
    const [trendingAll, setTrendingAll] = useState([]);
    const [page, setPage] = useState(1);
    const getTrending = async () => {
        const {data} = await axios.get(`
            https://api.themoviedb.org/3/trending/all/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${page}
        `);
        setTrendingAll(data.results);
    };

    useEffect(() => {
        getTrending();
        // eslint-disable-next-line
    }, [page]);

    const pageNum = new Array(10).fill(1).map((e, index) => index+1);

    return (
        <Container>
            <h4 className='trending-header'>Trending</h4>
            <Row className='gy-4'>
            {trendingAll.map((trending) => (
                    <Col 
                    key={trending.id}
                    lg={3}
                    md={6}
                    sm={6}
                >
                    <TrendingItem trending={trending} media_type={trending.media_type} />
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

export default TrendAll