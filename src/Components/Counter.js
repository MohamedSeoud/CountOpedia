import classes from './Counter.module.css'
import Button from './UI/Button';
import Attack from '../images/sword.gif';
import Defand from '../images/Defand.png';
const { Component, Fragment } = require("react");

class Counter extends Component{

    constructor(props){
        super(props);
        this.AttackHandler = this.AttackHandler.bind(this);
        this.DefendHandler = this.DefendHandler.bind(this);
        this.state ={
            count:0
        }
    }


    AttackHandler(){
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
            }
        })
    }

    DefendHandler(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            }
        })
    }


    render(){
        return(
        <Fragment>
            <div className={classes.container}>
                <p>Win at +20 And Lose at -20</p>
                <h1 className={classes.h1}>Game Score : {this.state.count}</h1>
            </div>
            
                <div className={classes.wrapper}>
            <div className={classes.MyImage} >
                <img src={Attack} alt=''  className={classes.theImage}/>
                <Button label={'+1'}
                onClick={this.AttackHandler}
                className /> 
            </div>
            <div className={classes.MyImage} >
                <img src={Defand} alt=''  className={classes.Defand}/>
                <Button label={'-1'}
                onClick={this.DefendHandler}
                className ={classes.myButton}/> 
            </div>
              </div>
        </Fragment> 
        )
    }
}
export default Counter;