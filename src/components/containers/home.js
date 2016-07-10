import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPI } from 'actions/list';

class Home extends Component {
    constructor() {
        super();
    }
    _onFetchHandler = () => {
        this.props.getAPI();
    }
    render() {
        const {
            list,
            isPending
        } = this.props;
        return (
            <div>
                <div>
                    <button
                        type="button"
                        onClick={this._onFetchHandler} >
                        getAPI!
                    </button>
                    <ul>
                        {list.map((post, i) =>
                          <li key={i}>{post.isbn}</li>
                        )}
                    </ul>
                </div>
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