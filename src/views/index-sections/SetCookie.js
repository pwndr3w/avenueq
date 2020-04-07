// JavaScript source code
import React, { Component, useState } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import NoticeModal from "./NoticeModal.js";

class SetCookie extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            name: cookies.get('name') || 'Ben'
        };
    }

    handleNameChange(name) {
        const { cookies } = this.props;

        cookies.set('name', name, { path: '/' });
        this.setState({ name });
    }

    render() {
        const { name } = this.state;
        return (
      <div>
        <NoticeModal name={name} onChange={this.handleNameChange.bind(this)} />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </div>
    );
  }
}
 
export default withCookies(SetCookie);