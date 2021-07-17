import React, { Component } from 'react';
// import  { useRef }  from 'react';

import '../App.css'
import {NavLink} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props)
        this.username = React.createRef();
        this.password = React.createRef();
        this.remember = React.createRef();
    }
    handleLogin(event){
        alert("Username:"+this.username.current.value+"  Password:"+this.password.current.value+" Remember me:"+this.remember.current.value)
        event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top" style={{backgroundColor:'#512DA8',color:'#9575CD'}}>
                    <div className="container">
                        <NavLink to="/" className="navbar-brand" style={{color:'#9575CD'}}><img src="assets\images\logo.png" height="40px" width="60px" alt="logo"/></NavLink>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon" style={{color:'#9575CD'}}></span>
                        </button>
                        <div id="navmenu" className="navbar-collapse collapse">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item"><NavLink to="/" className="nav-link space" style={{color:'#9575CD',fontSize:'20px'}}><i
                                            className="fa fa-home fa-lg"></i> Home</NavLink></li>
                                <li className="nav-item"><NavLink to="/AboutUs" className="nav-link space" style={{color:'#9575CD',fontSize:'20px'}}><i
                                            className="fa fa-info fa-lg"></i> About us</NavLink></li>

                                <li className="nav-item"><NavLink to="/menu" className="nav-link space" style={{color:'#9575CD',fontSize:'20px'}}><i
                                            className="fa fa-list fa-lg"></i> Menu</NavLink></li>
                                            
                                <li className="nav-item"><NavLink to="/ContactUs" className="nav-link space" style={{color:'#9575CD',fontSize:'20px'}}><i
                                            className="fa fa-address-card fa-lg"></i> Contact</NavLink></li>
                            </ul>
                            
                            <button type="button" style={{color:'#9575CD',fontSize:'20px'}} class="btn btn-outline-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa fa-sign-in fa-lg"></i> Login
                            </button>
                        </div>

                    </div>
                </nav>
                <div className="container-fluid" style={{color:'white',backgroundColor:'#9575CD',padding:'40px 0px'}}>
                    <div className="container" >
                        <div style={{width:'600px'}}>
                            <h1 style={{width:'600px'}}>Ristorante Con Fusion</h1>
                            <p style={{width:'400px'}}>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{backgroundColor:'#512DA8',color:'white'}}>
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={this.handleLogin.bind(this)}>
                                <div className="modal-body" style={{color:'white',backgroundColor:'#9575CD',padding:'40px 40px'}}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" name="username" ref={this.username}/>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="password">password</label>
                                        <input type="password" className="form-control" id="password" name="password" ref={this.password}/>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="check">
                                            <input type="checkbox" name="remember" ref={this.remember}  />Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="modal-footer" style={{backgroundColor:'#512DA8',color:'#9575CD'}}>
                                    <button type="button" style={{color:'white',fontSize:'20px'}} className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" value="submit" style={{color:'white',fontSize:'20px'}} className="btn btn-secondary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <div className="container">
                        <a href="index.html" className="navbar-brand" style={{color:'grey'}}>Lifestyle Store</a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navmenu">
                            <span className="navbar-toggler-icon" style={{color:'grey'}}></span>
                        </button>
                        <div id="navmenu" className="navbar-collapse collapse">
                            <ul className="me-auto d-none d-lg-block" style={{color:'black'}}>.</ul>
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink to="/" className="nav-link space" style={{color:'grey'}}><i
                                            className="fas fa-shopping-cart"></i> Home</NavLink></li>
                                <li className="nav-item"><NavLink to="/AboutUs" className="nav-link space" style={{color:'grey'}}><i
                                            className="fas fa-user"></i> About us</NavLink></li>

                                <li className="nav-item"><NavLink to="/menu" className="nav-link space" style={{color:'grey'}}><i
                                            className="fas fa-sign-in-alt"></i> Menu</NavLink></li>
                                            
                                <li className="nav-item"><NavLink to="/ContactUs" className="nav-link space" style={{color:'grey'}}><i
                                            className="fas fa-sign-in-alt"></i> Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </React.Fragment>
        );
    }
}

export default Header;