import React from 'react';
import ReactDOM from 'react-dom'


class Dash extends React.Component {
    constructor(props){
        super(props)
        this.state={
            active:1,
            count:0
        }
    }
    handleadd=(e)=>{
        console.log(this.state.count);
        const value=this.state.count
        e.preventDefault();
        this.setState(()=>{
            return{
                count: value+1
            }
        });
    }
    
    handleactive=(e)=>{
        e.preventDefault();
        const avalue =e.target.value
        this.setState(()=>{
            return{
                active: avalue
            }
        });
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><button>blablaCart</button></td>
                        <td></td>
                        <td><button variant="primary">
                        {this.state.count}cart
                        </button></td>
                        <td><button>username</button></td>
                    </tr>
                    <tr>
                        <td>
                            <tr><div><button onClick={this.handleactive} value="1">cat1</button ></div></tr>
                            <tr><div><button onClick={this.handleactive} value="2">cat2</button></div></tr>
                            <tr><div><button onClick={this.handleactive} value="3">cat3</button></div></tr>
                        </td>
                        <td>
                            Products under cat{this.state.active}
                            <tr><td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product1    price:300</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product2    price:1500</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product3    price:150</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product4    price:300</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td></tr>
                            <tr><td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product5    price:20</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product6    price:100</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product7    price:500</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td>
                            <td><div><button ><img src="./laptop" height="250px" width="300px" /><div> product8    price:800</div></button ><button onClick={this.handleadd}>Add to Cart</button></div></td></tr>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Dash

ReactDOM.render(<Dash/>,document.getElementById('app'));