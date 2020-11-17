import React, { createContext,useReducer} from 'react'
import { TransactionProps,TransactionType } from '../Types/Types'
import CreateReducer  from './Createreducer'
const TransactionContext:TransactionProps={
    Transaction:[{id:0,desc:"sell",amount:200}],
    addTransaction:()=>{},
    deleteTransaction:()=>{}
}
export const CreateTransactionContext=createContext(TransactionContext);

export const TransactionProvider:React.FC=({children})=>{
   
   const [state,dispatch]=useReducer(CreateReducer,TransactionContext);

   function addTransaction(TransactionData:TransactionType){
            dispatch({
                type:"ADD_Transaction",
                payload:TransactionData
            })
   }
   function deleteTransaction(id:number){
       dispatch({
           type:"Deleted",
           payload:id
       })
   }
   
   
   
   
    return(
        <CreateTransactionContext.Provider value={{
             Transaction:state.Transaction,
             addTransaction,
             deleteTransaction
        }}>
          {children}
        </CreateTransactionContext.Provider>
    )
}