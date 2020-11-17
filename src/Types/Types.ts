export type TransactionType={
  id:number,
  desc:string,
  amount:number
}

export type TransactionProps={
      Transaction:TransactionType[],
      addTransaction:(TransactionData:TransactionType)=>void
      deleteTransaction:(id:number)=>void
}
export type Balancetyp={
  amount:number,
  expence:number
}

