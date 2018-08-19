import React, { Component } from 'react';
import styles from './Header.css'
import logo from '../logo.svg';


class Header extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {scrolledTop: true, loaded: false}

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({loading: true});

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {
        if(window.scrollY != 0){
            this.setState({scrolledTop: false});
        }
        else {
            this.setState({scrolledTop: true});
        }

    }
    render() {
      return ( 
        <div>
            <nav className={"navbar navbar-expand-lg fixed-top " + (this.state.scrolledTop ? "transparent top" : "bg-light  navbar-light scroll")}>
                {/* <a class="navbar-brand" href="#">BHL</a> */}
                <img src={logo} className={"navbar-brand swing slide-in "} alt="logo" />

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Skills <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfoilio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Career</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
      );
    }
}

export default Header;