import React,{Component} from 'react';
import {LocalForm,Errors,Control} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(values){
    alert("current state is:" + JSON.stringify(values));
  }

  render(){
    return(
      <React.Fragment>
      <button type="button" style={{color:'grey',fontSize:'20px'}} class="btn btn-outline-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        <i class="fa fa-pencil" style={{color:'grey',fontSize:'23px'}}></i> Submit Comment
      </button>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor:'#512DA8',color:'white'}}>
                    <h5 className="modal-title" id="exampleModalLabel">You review</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <div className="modal-body" style={{color:'white',backgroundColor:'#9575CD',padding:'40px 40px'}}>
                        
                        <div className="form-group">
                            <label htmlFor="rateUs">Rating:</label>
                            <Control.select model=".rateUs" className="form-control" id="rateUs" name="rateUs">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Name">Name:</label>
                            <Control.text model=".Name" className="form-control" 
                                id="Name" name="Name" 
                                validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                                />
                                <Errors className="text-danger" model=".Name" show="touched"
                                  messages={{
                                      required:'Required',
                                      minLength:'Must be greater then 2 characters',
                                      maxLength:'Must be 15 characters or less'
                                  }}
                                />
                        </div>
                        <div class="form-group">
                            <label htmlFor="check">
                                <Control.checkbox model=".remember" name="remember" ref={this.remember}  />Remember me
                            </label>
                        </div>
                        <div class="form-group">
                            <label htmlFor="Feedback">Feedback:</label>
                            <Control.textarea className="form-control" model=".Feedback" name="Feedback" id="Feedback" rows="8"/>
                        </div>
                    </div>
                    <div class="modal-footer" style={{backgroundColor:'#512DA8',color:'#9575CD'}}>
                        <button type="button" style={{color:'white',fontSize:'20px'}} className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" value="submit" style={{color:'white',fontSize:'20px'}} className="btn btn-secondary">Login</button>
                    </div>
                </LocalForm>
              </div>
            </div>
      </div>
      </React.Fragment>
      
    );
  }
}
class DishDetails extends Component {

    constructor(props){
      super(props);
    }
    render(){
        const dish = this.props.selectedDish;
        const comments = dish.comments.map((com)=>{
            return(
              <div key={com.id} className="mt-4">
                <p>{com.comment}</p>
                <p>--{com.author}, {com.date}</p>
              </div>
            );
          }
        );
        return(
            <div className="row" style={{margin:'40px 0px'}} key={dish.id}>
                <div className="col-lg-6">
                <img src={dish.image} alt={dish.name} height="300px" width="350px" style={{margin:'50px 20px 10px 0px'}}/>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <p><span style={{fontSize:'22px',fontFamily:'bold'}}>Price: </span>{dish.price}</p>
                </div>
                <div className="col-lg-6" style={{marginTop:'50px'}}>
                <h2>Comments:</h2>
                    {comments}
                    
                <CommentForm/>
                </div>
            </div>
        );
    }
}

export default DishDetails;





// Phases of this code



// Phase 4,5
// class DishDetails extends Component {
// 
//     constructor(props){
//         super(props);
//     }
// 
//     render(){
//         const dish = this.props.selectedDish;
//         const comments = dish.comments.map((com)=>{
//             return(
//               <div key={com.id} className="mt-4">
//                 <p>{com.comment}</p>
//                 <p>--{com.author}, {com.date}</p>
//               </div>
//             );
//           }
//         );
//         return(
//             <div className="row" style={{marginTop:'100px'}} key={dish.id}>
//                 <div className="col-lg-6">
//                 <img src={dish.image} alt={dish.name} height="300px" width="350px" style={{margin:'50px 20px 10px 0px'}}/>
//                 <h2>{dish.name}</h2>
//                 <p>{dish.description}</p>
//                 <p><span style={{fontSize:'22px',fontFamily:'bold'}}>Price: </span>{dish.price}</p>
//                 </div>
//                 <div className="col-lg-6" style={{marginTop:'50px'}}>
//                 <h2>Comments:</h2>
//                     {comments}
//                 </div>
//             </div>
//         );
//     }
// }





// Phase 6
// function DishDetails(props) {
//     const dish = props.dishDetail;
//     if(dish != null){
//         const comments = dish.comments.map((com)=>{
//                 return(
//                 <div key={com.id} className="mt-4">
//                     <p>{com.comment}</p>
//                     <p>--{com.author}, {com.date}</p>
//                 </div>
//                 );
//             }
//         );
//         return(
//             <div className="container">
//                 <div className="row" style={{marginTop:'100px'}} key={dish.id}>
//                     <div className="col-lg-6">
//                     <img src={dish.image} alt={dish.name} height="300px" width="350px" style={{margin:'50px 20px 10px 0px'}}/>
//                     <h2>{dish.name}</h2>
//                     <p>{dish.description}</p>
//                     <p><span style={{fontSize:'22px',fontFamily:'bold'}}>Price: </span>{dish.price}</p>
//                     </div>
//                     <div className="col-lg-6" style={{marginTop:'50px'}}>
//                     <h2>Comments:</h2>
//                         {comments}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
//     else{
//         return(
//             <div></div>
//         );
//     }
// }