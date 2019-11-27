import React from 'react'

const Header: React.FC<{
    query: string;
    total: number;
    currPage: number;
    pages: number;
}> = (props) => {
    return (
        <div>
            query: {props.query}
            total: {props.total}
            currPage: {props.currPage}
            pages: {props.pages}
        </div>
    )
};

export default Header;
