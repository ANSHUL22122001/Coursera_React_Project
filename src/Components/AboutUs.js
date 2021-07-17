import React from 'react';

function RenderLeader({leader}) {
    return (
        <React.Fragment> 
        <div className="col-md-3">
            <img src={leader.image} alt={leader.name} style={{display: 'block',marginLeft: 'auto',marginRight: 'auto',marginBottom:'20px'}}/>
        </div>
        <div className="col-md-9">
            <h3>{leader.name}</h3>
            <h5>{leader.designation}</h5>
            <p>{leader.description}</p>
        </div>
        </React.Fragment>
    );
}

function AboutUs(props) {
        const LeaderItems = props.leaders.map((leaders) => {
                return(
                    <div className="row"  key={leaders.id} style={{margin:'60px 0px'}}>
                        <RenderLeader leader={leaders}/>
                    </div>
                );
        });
        return(
            <React.Fragment> 
            <div className="container" style={{padding:'40px 0px'}}>
                <h1 style={{fontSize:'30px'}}>About Us</h1><hr/>
                <div className="row" style={{margin:'40px 0px'}}>
                    <div className="col-md-6">
                        <h2 style={{fontSize:'40px'}}>Our History</h2>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-md-6" style={{padding:'0px 40px'}}>
                        <div className="card" style={{height:'300px'}}>
                            <div style={{height:'60px',fontSize:'20px',padding:'15px 20px',backgroundColor:'#0275d8',color:'white'}}>Fact At a Glance</div>
                           <div style={{padding:'20px 40px'}}>
                            <table>
                                <tbody>
                                <tr>
                                        <td><p style={{fontSize:'20px',width:'200px'}}><b>Started</b></p></td>
                                        <td><p style={{fontSize:'20px'}}>3 Feb. 2013</p></td>
                                    </tr>
                                    <tr>
                                        <td><p style={{fontSize:'20px',width:'200px'}}><b>Major Stack Holder</b></p></td>
                                        <td><p style={{fontSize:'20px',}}>HK Fine Food Inc.</p></td>
                                    </tr>
                                    <tr>
                                        <td><p style={{fontSize:'20px',width:'200px'}}><b>Last Year's Turnover</b></p></td>
                                        <td><p style={{fontSize:'20px'}}>$1,2503,75</p></td>
                                    </tr>
                                    <tr>
                                        <td><p style={{fontSize:'20px',width:'200px'}}><b>Employees</b></p></td>
                                        <td><p style={{fontSize:'20px'}}>40</p></td>
                                    </tr>
                                </tbody>
                                
                            </table>
                           </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row card" style={{padding:'20px 10px',margin:'20px 10px'}}>
                    <h4>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h4>
                    <h5 style={{color:'grey'}}>-- Yogi Berra,<i> The Wit and Wisdom of Yogi Berra,P. Pepe, Diversion Books, 2014</i></h5>
                </div>
                <br/><hr/>
                <br/>
                <h1 style={{fontSize:'40px'}}>Corporate Leadership</h1>
                {LeaderItems}
            </div>
            </React.Fragment>
        );
    
}

export default AboutUs;