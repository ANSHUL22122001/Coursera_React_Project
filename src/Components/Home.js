import React, { Component }  from 'react';
import {dish} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions'
import {LEADERS} from '../shared/leaders'

class Home extends Component {
    render(){
        const MenuItem = dish.map((dishes) => {
            if(dishes.id === 0){

                return(
                    <div className="col-md-4 " key={dishes.id} style={{marginTop:'30px'}}>
                        <div className="card" style={{height:'510px',margin:'5px'}} >
                            <img src={dishes.image}  class="card-img-top" alt="" height="254px"/>
                            <div class="card-body">
                            <h4>{dishes.name}</h4>
                            <p class="card-text">{dishes.description}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <React.Fragment></React.Fragment>
                );
            }
        });
        const PromotionItem = PROMOTIONS.map((dishes) => {
            if(dishes.id === 0){

                return(
                    <div className="col-md-4 " key={dishes.id} style={{marginTop:'30px'}}>
                        <div className="card" style={{height:'510px',margin:'5px'}} >
                            <img src={dishes.image}  class="card-img-top" alt="" height="254px"/>
                            <div class="card-body">
                            <h4>{dishes.name}</h4>
                            <p class="card-text">{dishes.description}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <React.Fragment></React.Fragment>
                );
            }
        });
        const LeaderItems = LEADERS.map((dishes) => {
            if(dishes.id === 0){

                return(
                    <div className="col-md-4 " key={dishes.id} style={{marginTop:'30px'}}>
                        <div className="card" style={{height:'510px',margin:'5px'}} >
                            <img src={dishes.image}  class="card-img-top" alt="" height="254px"/>
                            <div class="card-body">
                            <h4>{dishes.name}</h4>
                            <h6>{dishes.designation}</h6>
                            <p class="card-text">{dishes.description}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            else{
                return(
                    <React.Fragment></React.Fragment>
                );
            }
        });
        return(
            <React.Fragment> 
                <div className="container" >
                    <div className="row " style={{margin:'40px 0px'}}>
                        {MenuItem}
                        {PromotionItem}
                        {LeaderItems}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;