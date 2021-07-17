import React, { Component }  from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Menu from './Menu';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    leaders:state.leaders
  }
}

class Main extends Component {

  

  render(){
    const MenuItem = ()=>{
      return(
      <Menu dishes={this.props.dishes}/>);
    }
    const AboutUsItem =()=>{
      return(
      <AboutUs leaders={this.props.leaders} />);
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/AboutUs" component={AboutUsItem} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/menu" component={MenuItem} />
          <Redirect to="/" />
        </Switch>
        <Footer/>
         {/* <Menu dishes={this.state.dishes} onClick={(dish)=>this.onDishSelect(dish)}/>
        <DishDetails dishDetail={this.state.selectedDish}/>  */}
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));








// Phase of this code




// Phase 5,6
// class Main extends Component {

//     constructor(props){
//       super(props);
//       this.state={
//         dishes:dish,
//         selectedDish:null
//       };
//     }
    
//     onDishSelect(dish){
//       this.setState({selectedDish:dish});
//     }
  
//     render(){
//       return (
//         <div className="App">
//           <Navbar dark color="primary">
//             <div className="container">
//               <NavbarBrand href="/">Risrorante Con Fusion</NavbarBrand>
//             </div>
//           </Navbar>
//           <Menu dishes={this.state.dishes} onClick={(dish)=>this.onDishSelect(dish)}/>
//           <DishDetails dishDetail={this.state.selectedDish}/>
//         </div>
//       );
//     }
//   }




// Phase 7
// class Main extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       dishes:dish,
//       selectedDish:null
//     };
//   }
  
//   onDishSelect(dish){
//     this.setState({selectedDish:dish});
//   }

//   render(){
//     const HomePage=()=>{
//       return(
//         <Home/>
//       );
//     }
//     return (
//       <div className="App">
//         <Header/>
//         <Switch>
//           <Route path="/home" component={HomePage}/>
//           <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
//           <Redirect to="/home"/>
//         </Switch>
//          {/* <Menu dishes={this.state.dishes} onClick={(dish)=>this.onDishSelect(dish)}/>
//         <DishDetails dishDetail={this.state.selectedDish}/>  */}
//         <Footer/>
//       </div>
//     );
//   }
// }
