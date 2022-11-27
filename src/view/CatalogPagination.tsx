import {useState} from "react";
import ReactPaginate from "react-paginate";

interface CatalogPaginationProps {
    offset: number;
    limit: number;
    products: number;
    changeOffset: (offset: number) => void;
}

export function CatalogPagination(props: CatalogPaginationProps) {
    const [offset, setOffset] = useState(props.offset)
    const pageCount = Math.ceil(props.products / props.limit);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * props.limit) % props.products;
        setOffset(newOffset);
        props.changeOffset(newOffset);
    };

    return (
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={undefined}
        />
    )
}