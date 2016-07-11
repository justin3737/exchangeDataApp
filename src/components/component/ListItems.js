import React, { Component, PropTypes } from 'react';

class ListItems extends Component {
    constructor() {
        super();
    }
    _onChnage = () => {
        const { id, onChg } = this.props;
        onChg(id);
    }
    render() {
        const { isbn }= this.props;
        return (
            <li className="item-li">{isbn}
                <button className="chg-btn" onClick={this._onChnage}></button>
            </li>
        );
    };
};

ListItems.propTypes = {
    id   : PropTypes.number.isRequired,
    isbn : PropTypes.number.isRequired,
    onChg: PropTypes.func.isRequired
};

export default ListItems;