import React, { Component } from 'react';
import styles from './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {scrolledTop: true}

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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
            <nav className={"navbar navbar-expand-lg fixed-top " + (this.state.scrolledTop ? "transparent navbar-dark" : "bg-light navbar-light")}>
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>

        </div>
      );
    }
}

export default Header;