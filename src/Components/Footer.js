import React, { Component }  from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
    <footer style={{backgroundColor:'#D1C4E9',color:'black',fontSize:'18px',padding:'40px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul style={{listStyle:'none'}}>
                        <li><h3>Links</h3></li>
                        <li><Link to="/" style={{textDecoration:'none',color:'black'}}>Home</Link></li>
                        <li><Link to="/AboutUs" style={{textDecoration:'none',color:'black'}}>About</Link></li>
                        <li><Link to="/menu" style={{textDecoration:'none',color:'black'}}>Menu</Link></li>
                        <li> <Link to="/ContactUs" style={{textDecoration:'none',color:'black'}}>Contact</Link></li>
                    </ul> 
                </div>
                <div className="col-md-4">
                    <ul style={{listStyle:'none',fontSize:'15px'}}>
                        <li><h3>Our Address</h3></li>
                        <li>121, Clear Water Bay Road</li>
                        <li>Clear Water Bay, Kowloon</li>
                        <li>121, Clear Water Bay, Kowloon</li>
                        <li>HONG KONG</li>
                        <li><i className="fa fa-phone fa-lg"></i> : +852 1234 5678</li>
                        <li><i className="fa fa-fax fa-lg"></i> : +852 8765 4321</li>
                        <li><i className="fa fa-envelope fa-lg"></i> : confusion@food.net</li>
                    </ul> 
                </div>
                <div className="col-md-4 text-center">
                    <ul style={{listStyle:'none',fontSize:'18px',display:'flex',justifyContent:'center',marginTop:'60px'}}>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-google fa-lg"></i></li>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-facebook fa-lg"></i></li>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-linkedin fa-lg"></i></li>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-twitter fa-lg"></i></li>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-youtube fa-lg"></i></li>
                        <li style={{color:'#9575CD',padding:'10px',border:'3px solid black',borderRadius:'10px',margin:'2px'}}><i className="fa fa-envelope fa-lg"></i></li>
                    </ul> 
                </div>
            </div>
        </div>
        <hr/>
        <p class="text-center" style={{backgroundColor:'#D1C4E9',color:'black',fontSize:'15px'}}><b>Copyright &copy LifestyleStore. All Rights Reserved | Contact Us: +91 90000 00000</b></p>
    </footer>
            </React.Fragment>
        );
    }
}

export default Footer;