import React from 'react';

const content = (props) => {
    return ( 
        <div id="skills-anchor" className="card-group">
            <div className="card text-center border-light">
                <i className="fab fa-js-square fa-10x"></i>
                <div className="card-body">
                    <h5 className="card-title">Javascript / ES6</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card text-center border-light">
                 <i className="fab fa-react fa-10x"></i>
                <div className="card-body">
                    <h5 className="card-title">React.js</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card text-center border-light">
                <i className="fab fa-java fa-10x"></i>
                <div className="card-body">
                    <h5 className="card-title">Java</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default content;