import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ListItems from './ListItems';

class ListUL extends Component {
    constructor() {
        super();
    }
    _setClassName = () => {
        const { pos } = this.props;
        return classNames({
            'list-item-wrap': true,
            'left': (pos=='left'),
            'right': (pos=='right')
        });
    }
    render() {
        const { data } = this.props;
        return (
            <div className={this._setClassName()}>
                <div className="list-item-border">
                   <ul className="item-ul">
                        {data.map((post, i) => 
                            <ListItems key={i} isbn={post.isbn} />
                        )}
                    </ul> 
                </div>
            </div>
        );
    };
};

ListUL.propTypes = {
    pos      : PropTypes.string.isRequired,
    data     : PropTypes.array.isRequired
};

export default ListUL;
