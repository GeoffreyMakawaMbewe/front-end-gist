import './App.css';
import {useState, useEffect} from 'react'
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import  {v4 as myUuid} from 'uuid'
 
 
 
// const initialExpenses = [
//   {
//     id:myUuid() ,
//     charge: 'rent',
//     amount: 1600
//   },
//   {
//     id: myUuid() ,
//     charge: 'car payment',
//     amount:400
//   },
//   {
//     id: myUuid() ,
//     charge: 'credit card bill',
//     amount:1200
//   }
// ]
const initialExpenses = localStorage.getItem("expenses ") ? 
  JSON.parse(localStorage.getItem("expenses"))
 : [];


const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  // ==================state values ====================
  //---------------single expense----------------
  const [charge, setCharge] = useState('');
   //---------------single amount----------------
  const [amount, setAmount] = useState('');
  //---------------Alert-------------------------
  const [alert , setAlert] = useState({show:false})
  //--------------Edit---------------------------
  const [edit, setEdit] = useState(false)
  //--------------Item To Edit-------------------
  const [id, setId] = useState(0)
   //--------------useEffect-------------------
   useEffect(()=> {

    localStorage.setItem('expenses',JSON.stringify(expenses))

   } , [])
  //-------------------Functionality--------------------
  //-------------handle charge-----------------
  const handleCharge = (e) => {
    console.log(`charge : ${e.target.value}`)
    setCharge(e.target.value)
  }

  //-------------handle amount-----------------
  const handleAmount = (e) => {
    console.log(`amount : ${e.target.value}`)
    setAmount(e.target.value)
  }
  //-------------handle alert-----------------
  const handleAlert = ({type,text}) => {

    setAlert({show:true, type, text});
    setTimeout(()=> {
      setAlert({show:false})
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(charge , amount);
    if (charge !== '' && amount > 0) {
      if (edit) {

        const tempExpense = expenses.map((item) => {
          return item.id === id ? {
            ...item, charge, amount
          } : item;
        })
        setExpenses(tempExpense);
        setEdit(false);
        handleAlert({type:"success",text:"Successifully Edited An Item"})
        
      } else {

        const singleExpense = {id: myUuid(), charge, amount};
        setExpenses([...expenses, singleExpense]);
        handleAlert({type:"success", text: "Item Added To List" })
        
      }
      //Clean Up The Input Fields
      setCharge('')
      setAmount('')
      
    }else{
      //Call Alert Component
      handleAlert({type:"danger", text: `Charge can't be empty and amount should be greater that zero`})
    }
   
  }
  //---------------Clear All Items---------------------------
  const clearItems = () => {
    console.log("Cleared All Items")
    handleAlert({type:"danger",text:"You Have Deleted All Items"})
    setExpenses([]);

  }
   //---------------Delete An Item---------------------------
  const handleDelete =  id => {
     
    const tempExpenses =  expenses.filter(item => id !== item.id)
    setExpenses(tempExpenses)
    handleAlert({type:"danger",text:"Item Deleted Successfully"})
  }
   //---------------Edit An Item---------------------------
  const handleEdit =  (id) => {
    console.log("Item Has Been Edit : " +`${id}`)
    const expense = expenses.find((item) => id === item.id);
    const {charge,amount} = expense;
    setCharge(charge);
    setAmount(amount);
     setEdit(true)
     setId(id)
  }
  return (
    <>
       {alert.show && <Alert type = {alert.type} text = {alert.text}/>}
       <h1>Budget Calculator</h1>
       <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit = {edit}
        />
        <ExpenseList 
        expenses={expenses}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        clearItems = {clearItems}
        />
       </main>
       <h1 >
          total spending : <span className='total'>${expenses.reduce((acc, curr)=> {
           return acc += parseInt( curr.amount )
          } , 0)}</span>
       </h1>
       
      
    </>
  );
}

export default App;
