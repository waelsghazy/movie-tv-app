import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import TrendingItem from '../TrendItem/TrendItem';
import PaginationCustom from '../PaginationCustom/PaginationCustom';

const Search = () => {
    const [type, setType] = useState('movie');
    const [searchText, setSearchText] = useState({})
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchSearch = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US
            &query=${searchText}&page=${page}&include_adult=false`
        );
        setContent(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        fetchSearch();
        setPage(1)
      // eslint-disable-next-line
    }, [type, page]);

    const pageNum = new Array(10).fill(1).map((e, index) => index+1);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container style={{marginTop: '2rem', color: 'white'}}>
            <div style={{display: 'flex', marginY: '2rem'}}>
            <Form onSubmit={handleSubmit} className='w-100 d-flex'>
            <input
                className="searchBox form-control"
                // label="Search"
                // variant="filled"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
                onClick={fetchSearch}
                variant="contained"
                style={{ marginLeft: 10}}
                className='bg-primary'
                type='submit'
            >
                Search
            </Button>
            </Form>
            </div>
            <div className="my-4">
            <Button
                onClick={() => setType('movie')}
                className={type === 'movie' ? 'active' : 'button'}
            >
                Movie
            </Button>
            <Button
                onClick={() => setType('tv')}
                className={type === 'tv' ? 'active' : 'button'}
            >
                TV
            </Button>
            </div>
            <div>
            <Row className='row'>
            {content.map((trending) => (
                <Col
                    key={trending.id}
                    lg={3}
                    md={6}
                    sm={1}
                >
                <TrendingItem
                trending={trending}
                media_type={type ? "tv" : "movie"}
                />
                </Col>
            ))}
            </Row>
            </div>
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
    );
};

export default Search;