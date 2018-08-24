import React, { Component } from 'react';
import styles from './Header.css'
import logo from '../logo.svg';
import ScrollReveal from 'scrollreveal';
;

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {scrolledTop: true, loaded: false, currentScrollHeight: 0}

    }
    componentDidMount() {0
        window.addEventListener('scroll', this.handleScroll);
        this.setState({loading: true});
        window.onscroll =()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (this.state.currentScrollHeight != newScrollHeight){
                this.setState({currentScrollHeight: newScrollHeight})
            }
          }
          ScrollReveal().reveal('.bg');
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {
        if(window.scrollY > 0){
            this.setState({scrolledTop: false});
        }
        else {
            this.setState({scrolledTop: true});
        }

    }
    render() {
     const opacity = 1 - Math.min(200 / this.state.currentScrollHeight  , 1);

      return ( 
          
        <div>
            <nav  className={"navbar navbar-expand-lg fixed-top navbar-dark" + (this.state.scrolledTop ? "" : "scrolled navbar-light bg-light")}>
                <img src={logo} className={"navbar-brand slide-in logo "} alt="logo" />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#skills-anchor">Skills <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfoilio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Career</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
      );
    }
}

export default Header;