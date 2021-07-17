// import logo from './logo.svg';
import React, { Component }  from 'react';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
const store = ConfigureStore();
// import {dish} from './shared/dishes';


class App extends Component {
  render(){

    return ( 
      <Provider store={store}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </Provider>
    );
  }

}


export default App;








// Phase of this code




// Phase 1
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Risrorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//           <Menu/>
//       </div>
//     );
//   }
// }


// Phase 2,3,4
// class App extends Component {
// 
//   constructor(props){
//     super(props);
//     this.state={
//       dishes:dish
//     };
//   }
// 
//   render(){
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Risrorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes}/>
//       </div>
//     );
//   }
// }




// Phase 5
// class App extends Component {

//   render(){
//     return (
//       <Main/>
//     );
//   }
  
// }