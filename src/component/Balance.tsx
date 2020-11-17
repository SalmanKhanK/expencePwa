import React from 'react'
import {Balancetyp} from '../Types/Types'
export const Balance = ({amount,expence}:Balancetyp) => {
    return (
        <div>
            <h1>Expence Tracker</h1>
            <h3 >Your Balance</h3>
            <h1 className="money">${amount+expence}</h1>
            <div className="IncomeExpence">
               <h3>Income <br /> <span className="money_plus"> ${amount}</span></h3>
                <h3>Expence <br /><span className="money_minus"> ${expence}</span></h3>
            </div>
        </div>
    )
}
