import React, { Component } from 'react';
import Home from 'components/containers/home';
import '../../assets/styles/styles.scss';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    };
};
