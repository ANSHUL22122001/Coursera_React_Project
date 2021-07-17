import React,{Component} from 'react';
import DishDetails from './DishDetails';


class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedDish:null
    }
  }

  onDishSelect(dish){
    this.setState({selectedDish:dish});
  }

  dishRendered(dish){
    if(dish != null){
      return(
        <DishDetails selectedDish={dish}/>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }
  render(){
    const MenuItem = this.props.dishes.map((dish) => {
      return(
          <div className="col-lg-3 col-md-6 col-sm-9" key={dish.id}style={{marginTop:'30px'}}>
            <div className="card" style={{height:'250px',margin:'5px'}} onClick={()=>this.onDishSelect(dish)}>
              <img src={dish.image}  class="card-img-top" alt={dish.name} height="154px" width="154px"/>
              <div class="card-body">
                <h4 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h4>
              </div>
            </div>
          </div>
      );
    });
    return (
      <div className="container">
        <div className="row" style={{margin:'40px 0px'}}>
            {MenuItem}
        </div>
            {this.dishRendered(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;






// Phases of this code 





// Phase 1
// class Menu extends Component {
//   render(){
//     const dishes = [
//             {
//               id: 0,
//               name:'Uthappizza',
//               image: 'assets/images/uthappizza.png',
//               category: 'mains',
//               label:'Hot',
//               price:'4.99',
//               description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
//             },
//             {
//               id: 1,
//               name:'Zucchipakoda',
//               image: 'assets/images/zucchipakoda.png',
//               category: 'appetizer',
//               label:'',
//               price:'1.99',
//               description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
//             },
//             {
//               id: 2,
//               name:'Vadonut',
//               image: 'assets/images/vadonut.png',
//               category: 'appetizer',
//               label:'New',
//               price:'1.99',
//               description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
//             },
//             {
//               id: 3,
//               name:'ElaiCheese Cake',
//               image: 'assets/images/elaicheesecake.png',
//               category: 'dessert',
//               label:'',
//               price:'2.99',
//               description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
//             }
//           ]
    
//     const MenuItem = dishes.map((dish) => {
//       return(
        
//           <div className="col-12 seak">
//             <img src={dish.image} alt={dish.name} className="m-5"/>
//             <div className="hide">
//               <h2>{dish.name}</h2>
//               <p>{dish.description}</p>
//             </div>
//           </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row">
//           {MenuItem}
//         </div>
//       </div>
//     );
//   }
// }





// Phase 2
// class Menu extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       selectedDish:null
//     }
//   }

//   onDishSelect(dish){
//     this.setState({selectedDish:dish});
//   }

//   dishRendered(dish){
//     if(dish != null){
//       return(
//         <div style={{border:'1px solid black',display:'flex'}}>
//           <img src={dish.image} alt={dish.name} height="200px" width="250px" className="rounded m-3"/>
//           <div className="m-3">
//             <h2 >{dish.name}</h2>
//             <p>{dish.description}</p>
//             <p><span style={{fontSize:'22px',fontFamily:'bold'}}>Price: </span>{dish.price}</p>
//           </div>
//         </div>
//       );
//     }
//     else{
//       return(
//         <div></div>
//       );
//     }
//   }
//   render(){
//     const MenuItem = this.props.dishes.map((dish) => {
//       return(
//           <div className="col-lg-2 col-md-3 col-sm-4 m-3" >
//             <div className="card" style={{width:'15rem',height:'20rem'}} onClick={()=>this.onDishSelect(dish)}>
//               <img src={dish.image}  class="card-img-top" alt={dish.name} height="250rem" style={{borderBottom: '1px solid black'}}/>
//               <div class="card-body">
//                 <h3 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h3>
//               </div>
//             </div>
//           </div>
//       );
//     });
//     return (
//       <div className="container-fluid">
//         <div className="row ">
//             {MenuItem}
//         </div>
//         <div className="row ">
//             {this.dishRendered(this.state.selectedDish)}
//         </div>
//       </div>
//     );
//   }
// }





// Phase 3
// class Menu extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       selectedDish:null
//     }
//   }

//   onDishSelect(dish){
//     this.setState({selectedDish:dish});
//   }

//   dishRendered(dish){
//     if(dish != null){
//       const comments = dish.comments.map((com)=>{
//         return(
//           <div className="mt-4">
//             <p>{com.comment}</p>
//             <p>--{com.author}, {com.date}</p>
//           </div>
//         );
//       })
//       return(
//         <div className="row" style={{marginTop:'100px'}}>
//           <div className="col-lg-6">
//             <img src={dish.image} alt={dish.name} height="300px" width="350px" style={{margin:'50px 20px 10px 0px'}}/>
//             <h2>{dish.name}</h2>
//             <p>{dish.description}</p>
//             <p><span style={{fontSize:'22px',fontFamily:'bold'}}>Price: </span>{dish.price}</p>
//           </div>
//           <div className="col-lg-6" style={{marginTop:'50px'}}>
//           <h2>Comments:</h2>
//               {comments}
//           </div>
//         </div>
//       );
//     }
//     else{
//       return(
//         <div></div>
//       );
//     }
//   }
//   render(){
//     const MenuItem = this.props.dishes.map((dish) => {
//       return(
//           <div className="col-lg-3 col-md-6 col-sm-9" style={{marginTop:'30px'}}>
//             <div className="card" style={{height:'250px',margin:'5px'}}onClick={()=>this.onDishSelect(dish)}>
//               <img src={dish.image}  class="card-img-top" alt={dish.name} height="154px" width="154px"/>
//               <div class="card-body">
//                 <h4 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h4>
//               </div>
//             </div>
//           </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row ">
//             {MenuItem}
//         </div>
//             {this.dishRendered(this.state.selectedDish)}
        
//       </div>
//     );
//   }
// }




// Phase 4
// class Menu extends Component {
// 
//   constructor(props){
//     super(props);
//     this.state = {
//       selectedDish:null
//     }
//   }
// 
//   onDishSelect(dish){
//     this.setState({selectedDish:dish});
//   }
// 
//   dishRendered(dish){
//     if(dish != null){
//       return(
//         <DishDetails selectedDish={dish}/>
//       );
//     }
//     else{
//       return(
//         <div></div>
//       );
//     }
//   }
//   render(){
//     const MenuItem = this.props.dishes.map((dish) => {
//       return(
//           <div className="col-lg-3 col-md-6 col-sm-9" style={{marginTop:'30px'}}>
//             <div className="card" style={{height:'250px',margin:'5px'}}onClick={()=>this.onDishSelect(dish)}>
//               <img src={dish.image}  class="card-img-top" alt={dish.name} height="154px" width="154px"/>
//               <div class="card-body">
//                 <h4 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h4>
//               </div>
//             </div>
//           </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row ">
//             {MenuItem}
//         </div>
//             {this.dishRendered(this.state.selectedDish)}
//       </div>
//     );
//   }
// }





// Phase 5
// class Menu extends Component {

//   render(){
//     const MenuItem = this.props.dishes.map((dish) => {
//       return(
//           <div className="col-lg-3 col-md-6 col-sm-9" style={{marginTop:'30px'}}>
//             <div className="card" style={{height:'250px',margin:'5px'}} onClick={()=>this.props.onClick(dish)}>
//               <img src={dish.image}  class="card-img-top" alt={dish.name} height="154px" width="154px"/>
//               <div class="card-body">
//                 <h4 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h4>
//               </div>
//             </div>
//           </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row ">
//             {MenuItem}
//         </div>
//       </div>
//     );
//   }
// }




// Phase 6
// const Menu=(props)=>{
//   const MenuItem = props.dishes.map((dish) => {
//     return(
//         <div className="col-lg-3 col-md-6 col-sm-9" style={{marginTop:'30px'}}>
//           <div className="card" style={{height:'250px',margin:'5px'}} onClick={()=>props.onClick(dish)}>
//             <img src={dish.image}  class="card-img-top" alt={dish.name} height="154px" width="154px"/>
//             <div class="card-body">
//               <h4 class="card-text"style={{textAlign: 'center'}}>{dish.name}</h4>
//             </div>
//           </div>
//         </div>
//     );
//   });
//   return (
//     <div className="container">
//       <div className="row ">
//           {MenuItem}
//       </div>
//     </div>
//   );
// }

