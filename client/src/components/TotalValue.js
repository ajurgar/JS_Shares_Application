import React from "react";
import Shares from "./Shares";
// import Portfolio from "../containers/Portfolio";

const TotalValue = ({portfolio}) => {


    
    const totalAmount = portfolio.reduce((runningTotal, share) => {
        return runningTotal + (share.currentPrice * share.heldAmount)

    }, 0)
    



    return(
        <>
<h2>Total Portfolio Value: {totalAmount}</h2>
        </>
    )


}



export default TotalValue;