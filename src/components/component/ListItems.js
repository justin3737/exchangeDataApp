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
        const { id }= this.props;
        return (
            <li className="item-li">{id}
                <button className="chg-btn" onClick={this._onChnage}></button>
            </li>
        );
    };
};

ListItems.propTypes = {
    id   : PropTypes.string.isRequired,
    onChg: PropTypes.func.isRequired
};

export default ListItems;