import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.state={
            count:props.quantity
        }
    }

    // componentDidMount(){
    //     const json=localStorage.getItem('count');
    //     const count=parseInt(json,10)
    //     if(!isNaN(count)){
    //     this.setState(()=>({count}))
    //     }

        
    // }

    // componentDidUpdate(prevState,prevProps){
    //     if (prevState.count !== this.state.count) {
    //     localStorage.setItem('count',this.state.count)
    //     }

    // }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                    count:prevState.count+1
                   }
           }
      
       )
    }
    handleMinusOne(){
        if(this.state.count>1){
            this.setState((prevState)=>{
                return {
                        count:prevState.count-1
                       }
               })
        }
    }
          
        
    render(){

    return(
        <div>
        <div>Quantity :{this.state.count}</div>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne }>-1</button>
        </div>

    );

    }
}

export default Counter