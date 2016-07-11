import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { movePool, getAPI } from 'actions/list';

import ListUL from '../component/ListUL';

class Home extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getAPI();
    }
    _onChgEvt = (pos, id) => {
        this.props.movePool(pos, id);
    }
    render() {
        const {
            list,
            listOut,
            isPending
        } = this.props;
        return (
            <div className="container">
                <ListUL pos="left" data={list} onChgEvt={this._onChgEvt}/>
                <ListUL pos="right" data={listOut} onChgEvt={this._onChgEvt}/>
            </div>
        );
    };
};

Home.propTypes = {
    list      : PropTypes.array.isRequired,
    listOut   : PropTypes.array.isRequired,
    isPending : PropTypes.bool.isRequired,
    getAPI    : PropTypes.func.isRequired,
    movePool  : PropTypes.func.isRequired
};

export default connect(
    state => ({
        list      : state.list.list,
        listOut   : state.list.listOut,
        isPending : state.list.isPending
    }),
    dispatch => bindActionCreators({
        getAPI,
        movePool
    }, dispatch)
)(Home);