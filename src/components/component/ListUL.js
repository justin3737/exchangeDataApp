import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ListItems from '../component/ListItems';

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
    _onChg = (id) => {
        const { pos, onChgEvt } = this.props;
        onChgEvt(pos, id);
    }
    render() {
        let _this = this;
        const { data, on } = this.props;
        return (
            <div className={this._setClassName()}>
                <div className="list-item-border">
                   <ul className="item-ul">
                        {Object.keys(data).map(function(item, key) {
                            return <ListItems key={key} id={item} onChg={_this._onChg}/>;
                        })}
                    </ul> 
                </div>
            </div>
        );
    };
};

ListUL.propTypes = {
    pos      : PropTypes.string.isRequired,
    data     : PropTypes.object.isRequired,
    onChgEvt : PropTypes.func.isRequired
};

export default ListUL;
