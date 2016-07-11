import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPI } from 'actions/list';

import ListUL from '../component/ListUL';

class Home extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getAPI();
    }
    render() {
        const {
            list,
            isPending
        } = this.props;
        return (
            <div className="container">
                <ListUL pos="left" data={list}/>
                <ListUL pos="right" data={list}/>
            </div>
        );
    };
};

Home.propTypes = {
    list      : PropTypes.array.isRequired,
    isPending : PropTypes.bool.isRequired,
    getAPI    : PropTypes.func.isRequired
};

export default connect(
    state => ({
        list      : state.list.list,
        isPending : state.list.isPending
    }),
    dispatch => bindActionCreators({
        getAPI
    }, dispatch)
)(Home);