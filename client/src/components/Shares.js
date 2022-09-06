import React, { useState } from "react";
import { deleteShare, updateShare } from "../SharesService";
import { render } from 'react-dom'
import Highcharts, { color } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'




const Shares = ({ share, removeShare, updateInput}) => {

    const [inputText, setInputText] = useState(
        {   
            shareName: share.shareName,
            heldAmount: "",
            sharePurchasePrice:""
        }
    )

    const options = {
        title: {
            text: share.shareName
        },
        series: [{
            data: [share.sharePurchasePrice, share.currentPrice]
        }]
    }

    const handleDelete = () =>{
        deleteShare(share._id).then(()=>{
            removeShare(share._id);
        })
    }

    const handleChange = (e) =>{

        const editInput = Object.assign({}, inputText);
        editInput[e.target.name] = e.target.value;
        setInputText(editInput);
    }

    const handleSave = (e) =>{
        e.preventDefault();
        updateShare(inputText, share._id)
        .then((data) =>{
            updateInput(data, share._id)
        })
    }

    const totalValue = share.currentPrice * share.heldAmount
    const percentage = (((share.currentPrice - share.sharePurchasePrice)/share.sharePurchasePrice)*100).toFixed(2)
    const investedAmount = share.sharePurchasePrice * share.heldAmount
    const profitLoss = totalValue - investedAmount

 


    return (



        <div className="individualshare">

       
<div className="handleshare">
    <p><b>Name:</b> {share.shareName} </p>
    <p><b>Amount:</b> {share.heldAmount}</p>
    <input placeholder="Edit Amount Purchased" onChange={handleChange} name="heldAmount"></input>
     <p><b>Purchase Price:</b> {share.sharePurchasePrice}</p>
     <input placeholder="Edit Purchase Price" onChange={handleChange} name="sharePurchasePrice"></input>
    <p><b>Current Price: </b> {share.currentPrice}$</p>
    <p><b>24h/Change: </b>{percentage}% </p>
    <p><b>Total Value: </b>{totalValue}$</p>
                            <p><b>Profit/Loss: </b>{profitLoss}$</p>
    <button onClick={handleSave}>Save</button>
    <button onClick={handleDelete} className="btn">🗑</button>
    
</div>
<br></br>
     <div className="shares-display">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </div>


        </div>


    )
}

export default Shares;