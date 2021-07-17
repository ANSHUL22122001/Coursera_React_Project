import React, { Component }  from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Button } from 'reactstrap'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values){
        alert("current state is:" + JSON.stringify(values));
    }

    render(){
        return(
            <React.Fragment> 
                <div className="container">
                    <div className="row" style={{margin:'40px 0px'}}>
                        <h1 style={{fontSize:'60px'}}>Contact Us</h1><hr/>
                        <h2 style={{margin:'15px',marginTop:'20px',fontSize:'40px'}}>Location Information</h2>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <ul style={{listStyle:'none',fontSize:'15px'}}>
                                <li><h4>Our Address</h4></li>
                                <li>121, Clear Water Bay Road</li>
                                <li>Clear Water Bay, Kowloon</li>
                                <li>121, Clear Water Bay, Kowloon</li>
                                <li>HONG KONG</li>
                                <li><i className="fa fa-phone fa-lg"></i> : +852 1234 5678</li>
                                <li><i className="fa fa-fax fa-lg"></i> : +852 8765 4321</li>
                                <li><i className="fa fa-envelope fa-lg"></i> : confusion@food.net</li>
                            </ul> 
                        </div>
                        <div className="col-md-7">
                            <h4>Map of our Location</h4> 
                        </div>
                    </div>
                </div>
                    <hr/>
                <div className="container">
                    <h1 className="mt-4 mb-3">Send us Your Feedback</h1>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <div className="form-group row mb-2" >
                            <label htmlFor="FirstName" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-6">
                                <Control.text model='.FirstName' className="form-control"
                                 name="FirstName" id="FirstName" placeholder="First Name" 
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                 />
                                 <Errors className="text-danger" model=".FirstName" show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be greater then 2 characters',
                                        maxLength:'Must be 15 characters or less'
                                    }}
                                 />
                            </div>
                        </div>
                        <div className="form-group row mb-2" >
                            <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-6">
                                <Control.text model='.LastName' className="form-control" 
                                name="LastName" id="LastName" placeholder="Last Name" 
                                    validators={{
                                            required,minLength:minLength(3),maxLength:maxLength(15)
                                    }}
                                />
                                <Errors className="text-danger" model=".LastName" show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be greater then 2 characters',
                                        maxLength:'Must be 15 characters or less'
                                    }}
                                 />
                            </div>
                        </div>
                        <div className="form-group row mb-2" >
                            <label htmlFor="ContactNumber" className="col-sm-2 col-form-label">Contact Number</label>
                            <div className="col-sm-6">
                                <Control.text model=".ContactNumber" className="form-control" 
                                name="ContactNumber" id="ContactNumber" placeholder="Contact Number" 
                                    validators={{
                                        required,minLength:minLength(10),maxLength:maxLength(10),isNumber
                                    }}
                                />
                                <Errors className="text-danger" model=".ContactNumber" show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be of 10 number',
                                        maxLength:'Must be of 10 number',
                                        isNumber:'Only Numbers'
                                    }}
                                 />
                            </div>
                        </div>
                        <div className="form-group row mb-2" >
                            <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-6">
                                <Control.text model=".Email" className="form-control"
                                 name="Email" id="Email" placeholder="Email"
                                    validators={{
                                        required,validEmail
                                    }}
                                />
                                <Errors className="text-danger" model=".Email" show="touched"
                                    messages={{
                                        required:'Required',
                                        validEmail: 'Invalid Email'
                                    }}
                                 />
                            </div>
                        </div>
                        <div className="form-group row mb-2 mt-3" >
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6 form-group">
                                <Control.checkbox model=".agree" name="agree" className="form-check-input mt-2"/>{' '}
                                <strong>May we contact you?</strong>
                            </div>
                        </div>
                        <div className="form-group row mb-2" >
                            <label htmlFor="Feedback" className="col-sm-2 col-form-label">Your Feedback</label>
                            <div className="col-sm-6">
                                <Control.textarea className="form-control" name="Feedback" id="Feedback" rows="8" model=".Feedback"/>
                            </div>
                        </div>
                        <div className="form-group row mb-5" >
                            <div className="col-sm-2"></div>
                            <div className="col-sm-6">
                                <Button type="submit" className="btn btn-lg btn-block btn-primary mt-2">Send Feedback</Button>
                            </div>
                        </div>
                    </LocalForm >
                </div>

            </React.Fragment>
        );
    }
}

export default ContactUs;