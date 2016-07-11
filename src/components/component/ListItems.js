import React, { Component, PropTypes } from 'react';

class ListItems extends Component {
    constructor() {
        super();
    }
    render() {
        const {isbn}= this.props;
        return (
            <li className="item-li">{isbn}
                <button className="chg-btn"></button>
            </li>
        );
    };
};

ListItems.propTypes = {
    isbn: PropTypes.string.isRequired
};

export default ListItems;
