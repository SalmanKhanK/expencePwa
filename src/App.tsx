import React,{useContext,useState} from 'react';
import './App.css';
import {CreateTransactionContext} from './Context/Createcontext';
import {Balance} from './component/Balance'
import swDev from './swDev'
function App() {
       const {Transaction,addTransaction,deleteTransaction}=useContext(CreateTransactionContext)
       console.log(Transaction)
       const [desc,setDesc] = useState("");
  const [newamount,setAmount] = useState(0);
  const handleform=(event:any)=>{
    event.preventDefault();
        // console.log(desc);
        // console.log(amount);
        addTransaction({
          id:Transaction.length,
           desc:desc,
           amount:Number(newamount)
         
        });
        setDesc("");
        setAmount(0);
    
  };
  function Deletetransac(ind:number){
    deleteTransaction(ind);
  }
  function Income(){
    let count=0
     for(var i=0;i< Transaction.length;i++){
       if(Transaction[i].amount>0){
         count=count+Transaction[i].amount;
       }
     }
     return count;
   }
   function Expence(){
     let count=0
      for(var i=0;i< Transaction.length;i++){
        if(Transaction[i].amount<0){
          count=count+Transaction[i].amount;
        }
      }
      return count;
    }
  return (
    <div className="App">
           <Balance amount={Income()} expence={Expence()} />
           <h3>History</h3>
             <hr />
             <ul className="transactionList">
                     {Transaction.map((transObj, ind) => {
                    return (<li key={ind}>
                        <button className="delete-btn" type="button"  onClick={()=>{Deletetransac(transObj.id)}}>X</button>
                        {/* <span ><button onClick={() => { handleDelete(transObj.id) }}>delete</button></span> */}
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}  
             </ul>
             <h3>Add New Transaction</h3>
             <hr />
          <form className="form" onSubmit={handleform}>
             <label>Enter Discription <br />
                <input type="text" 
                placeholder="Enter Text"
                value={desc} 
                onChange={(ev)=>setDesc(ev.target.value)}
                required></input>
            </label>
            <label>Enter Amount <br />
                <input type="number"
                 placeholder="Enter Amount"
                 value={newamount}
                 onChange={(ev:any)=>setAmount(ev.target.value)} 
                 required></input>
            </label>
            <input type="submit"
             value="Add Transaction" />
             </form>

    </div>
  );
}

export default App;
swDev();
