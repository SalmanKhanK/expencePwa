import { type } from 'os';
import React from 'react'
import {TransactionType} from '../Types/Types'
type Action=|{type:"ADD_Transaction",payload:TransactionType}
             |{type:"Deleted",payload:number}
const CreateReducer=((state:{Transaction:TransactionType[]},action:Action)=>{
      switch(action.type){
          case "ADD_Transaction":
            return  {
             Transaction:[action.payload,...state.Transaction]
        };
        case "Deleted":{
            return{
                ...state,
                 Transaction:state.Transaction.filter((ev)=>ev.id!=action.payload)
            }
        }
          
       
    }
});
export default CreateReducer;