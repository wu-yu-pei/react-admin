import React, { Component } from 'react'
import   './index.less';
export default class LinkButton extends Component {
    render() {
        return (
            <>
                <button {...this.props}></button>
            </>
        )
    }
}
