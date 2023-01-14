import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationCustom = ({pag, setPage}) => {
    const handlePageChange = (page) => {
        setPage(page);
    };
    return (
        <Pagination>
            <Pagination.Item 
                onClick={(e) => handlePageChange(e.target.textContent)}
                style={{margin: '4rem 0'}}
            >
                {pag}
                
            </Pagination.Item>
        </Pagination>
    )
}

export default PaginationCustom