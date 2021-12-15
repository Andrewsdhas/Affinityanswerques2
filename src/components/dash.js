import React from 'react';
import ReactDOM from 'react-dom';
import JsonData from '../server/cart.json';
import CartModal from './cartmodal';

class Dash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartitems: [],
            selectedOption: undefined,
            active: 1,
            count: 0
        }
    }
    handelCart = () => {
        this.setState({ selectedOption: this.state.cartitems })
    }
    handleModal = () => {
        this.setState({ selectedOption: undefined })
    }
    handleadd = (e) => {
        e.preventDefault(); 
        const itemv = e.target.value;
        // var i=-1,qtyvalue=0;
        // const itemv = e.target.value;
        // console.log(itemv);
        // // this.state.cartitems.map((item)=>{
        // //     if(item.id===itemv)
        // //         i
        // //     else 
        // //         i=i+1
        // // })
        // this.state.cartitems.forEach((item)=>{
        //     console.log(item.id)
        //     if(item.id!=itemv) 
        //     {
        //         return i
        //     }
        //     else{
        //         i=i+1
        //     }
        // })
        // console.log(i)
        // var index=i
        // console.log(index)
        // if(index<0)
        //     this.state.cartitems.push({ id: itemv, quantity: 1 }) 
        // else{
            // qtyvalue=this.state.cartitems[index].quantity
            // this.state.cartitems[index].quantity= qtyvalue+1
        // }
        const exist= this.state.cartitems.find(x=>x.id===itemv);
        const index=this.state.cartitems.indexOf(exist)
        console.log(index);
        // var qtyvalue=this.state.cartitems[index].quantity
        // qtyvalue= qtyvalue+1

        console.log(exist);
        if (exist){
            this.state.cartitems.map((x)=>x.id===itemv?this.state.cartitems[index].quantity+1:x)
        }
        else{
            this.state.cartitems.push({ id: itemv, quantity: 1 })
        }
        console.log(this.state.cartitems);
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleremove=(e)=>{
        e.preventDefault()
        const index=e.target.value
        this.state.cartitems.splice(index,1)
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
        console.log(this.state.cartitems)
    }
    handleactive = (e) => {
        e.preventDefault();
        const avalue = e.target.value
        this.setState(() => {
            return {
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
                        <td><button variant="primary" onClick={this.handelCart}>
                            {this.state.count}cart
                        </button></td>
                        <td><button>username</button></td>
                    </tr>
                    <tr>
                        <td>
                            <tr><div><button onClick={this.handleactive} value={1}>cat1</button ></div></tr>
                            <tr><div><button onClick={this.handleactive} value={2}>cat2</button></div></tr>
                            <tr><div><button onClick={this.handleactive} value={3}>cat3</button></div></tr>
                        </td>
                        <td>
                            Products under cat{this.state.active}
                            {JsonData.map((info) => <td key={info.id}><div><button><img src="./laptop" height="250px" width="300px" /><div> {info.product}    price:{info.price}</div></button ><button value={info.id} onClick={this.handleadd}>Add to Cart</button></div></td>)}
                        </td>
                    </tr>
                </table >
                <CartModal handleModal={this.handleModal} selectedOption={this.state.selectedOption} items={this.state.cartitems} handleremove={this.handleremove} />
            </div >
        );
    }
}

export default Dash

ReactDOM.render(<Dash />, document.getElementById('app'));