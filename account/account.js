let account={
    name:'Aman',
    profession:'Software Engineer',
    Age:30,
    expense:[],
    income:[],
    addexpense:function (description, amount) {
     this.expense.push({
         description:description,
         amount: amount})

    },

//show nme check box

    // change name


changename: function (newname) {

return this.name=newname  
},
    // add income
 addincome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount})
        },

    
deleteexpense:function (description) {
     const returnexpense= this.expense.findIndex(function(exp){
                return exp.description==description
              
                   })

const mes= document.createElement('p')
    if (returnexpense>-1)
    {
       // let returned = this.expense[returnexpense].description
        this.expense.splice(returnexpense,1)

        this.listexpense()
        this.getaccountsummary()

        document.querySelector('#delexpmess').innerHTML = ''
        mes.textContent=`${description} has been removed`
        document.querySelector('#delexpmess').appendChild(mes)
}
else{
      document.querySelector('#delexpmess').innerHTML = ''
         mes.textContent="expense not found"
        document.querySelector('#delexpmess').appendChild(mes)
}

},

deleteincome: function (description) {
        const returnedincome= this.income.findIndex(function(inc) {
            return inc.description===description
        })
         

    const deletemess = document.createElement('p')
      if (returnedincome > -1) {
       let   returned = this.income[returnedincome].description
        this.income.splice(returnedincome, 1)

          this.listincome()     
          this.getaccountsummary()

          document.querySelector('#delemessage').innerHTML = ''
          deletemess.textContent =`${returned} has been removed`
          document.querySelector('#delemessage').appendChild(deletemess)

    }
    else {
          document.querySelector('#delemessage').innerHTML = ''
          deletemess.textContent = "Income not found"
          document.querySelector('#delemessage').appendChild(deletemess)
         
    }
    },

    // filter income
filterincome:function (description) {
    if(description==='')
    {
        document.querySelector('#filterincomeid').innerHTML = ''
        this.listincome()

        
    }
  else{
    const filterin= this.income.filter(function(inc, index) {
        return inc.description.toLowerCase().includes(description)
       

    })

    document.querySelector('#filterincomeid').innerHTML=''
    filterin.forEach(function (inc) {
          
       const filincome = document.createElement('h5')
       filincome.textContent = `${inc.description}=    ${inc.amount}  `
       filincome.className += "income-filter"
       document.querySelector('#filterincomeid').appendChild(filincome)

   })}
},




    // filter expense
    filterexpe: function (description) {
        if (description === '') {
            document.querySelector('#filtexpeid').innerHTML = ''
            this.listexpense()
        }
        else {



        const filteritem = this.expense.filter(function (expe, index) {
            return expe.description.toLowerCase().includes(description)
        })

        document.querySelector('#filtexpeid').innerHTML = ''
        filteritem.forEach(function (inc) {

            const filexpense = document.createElement('h5')
            filexpense.textContent = `${inc.description}=    ${inc.amount}  `
            filexpense.className += "expense-filter"
            document.querySelector('#filtexpeid').appendChild(filexpense)

        })}


    },

//modify income
modifyincome:function (description, newamount) {
    const returnedincome = this.income.findIndex(function (inc) {
        return inc.description === description
    })
    
    if(returnedincome>-1){
     this.income[returnedincome].amount= newamount
 //       console.log(`modified to ${this.income[returnedincome].amount} `)
    }
    else{
        //console.log(`income not found`)
    }

},

// modify expense



modifyexpe:function (description, newamount) {
    const ret= this.expense.findIndex(function (expe) {
        return expe.description===description
    })

      if(ret>-1)
    {
  this.expense[ret].amount=newamount
        
        // mesexp.textContent = `modified to ${this.expense[ret].amount} `
        // document.querySelector('#modexmessge').appendChild(mesexp)
      
  //console.log(`modified to ${this.expense[ret].amount} `)
    }
    else{

        // mesexp.textContent = `expense  not found `
        // document.querySelector('#modexmessge').appendChild(mesexp)

    }
},

// find income

findincome: function(description) 
{
const findin= this.income.findIndex(function(inc) {
     return inc.description===description

 })  
 return findin  
},

//find expense
findexp: function (description) {
    const expfind= this.expense.findIndex(function (expe) {
        return expe.description===description
    })
    return expfind
}
,
// list income

listincome: function() {
    document.querySelector('#filterincomeid').innerHTML = ''
    const incomehead = document.createElement('p')
    incomehead.textContent = `Income list`
    incomehead.className += "income-list"
    document.querySelector('#filterincomeid').appendChild(incomehead)

      this.income.forEach(function (inc) {
       const liincome= document.createElement('h5')
       liincome.textContent= `${inc.description}=    ${inc.amount}  `
       liincome.className += "income-list"
          document.querySelector('#filterincomeid').appendChild(liincome)
   })
    
},
// list expense
listexpense: function () {


    document.querySelector('#filtexpeid').innerHTML = ''
    const expehead = document.createElement('p')
    expehead.textContent = `Expense list`
    expehead.className+="expense-list"
    document.querySelector('#filtexpeid').appendChild(expehead)

        this.expense.forEach(function (exp) {
            const liexp = document.createElement('h5')
            liexp.textContent = `${exp.description}=    ${exp.amount}  `
            liexp. className += "expense-list"
            document.querySelector('#filtexpeid').appendChild(liexp)
        })
    }
,
   getaccountsummary :function () {
       document.querySelector('#showsummaryid').innerHTML=''
        var totexpense=0;
         this.expense.forEach(function (expense) {
            totexpense=totexpense+expense.amount
         })
        var totalincome=0;
        this.income.forEach(function (income) {
            totalincome = totalincome+income.amount
       
            
        })
        const summary= document.createElement('h3')
        summary.textContent=` ${account.name} has ${totexpense} expense  and ${totalincome} income with balance ${totalincome - totexpense}`
        summary.className+="listsummary"
       document.querySelector('#showsummaryid').appendChild(summary)
        

    }
}



// document.querySelector('#incomefilter-id').addEventListener('input', function (e) {
    
// account.filterincome(e.target.value)
// })

document.querySelector('#expensefilter-id').addEventListener('input', function (e) {
    account.filterexpe(e.target.value)
})

document.querySelector('#addincomeform').addEventListener('submit', function (e) {
    e.preventDefault()
    if (e.target.elements.desincome.value == ''|| e.target.elements.amountincome.value =='')
    {
        document.querySelector('#addmess').innerHTML=''
         const mestoincome=document.createElement('p')
         mestoincome.textContent="add amount and description"
        document.querySelector('#addmess').appendChild(mestoincome)
     }
     else{
    let amou = parseInt(document.getElementById("amountincomeid").value, 10)
    account.addincome(e.target.elements.desincome.value, amou)
    
    account.listincome()
    account.getaccountsummary()
    
    e.target.elements.desincome.value=''
     e.target.elements.amountincome.value=''
}
})


document.querySelector('#addexpenseform').addEventListener('submit', function (e) {
    e.preventDefault()
    if (e.target.elements.desexpense.value == '' || e.target.elements.amountexpense.value == '') {
        document.querySelector('#addmessexp').innerHTML = ''
        const mestoexpe = document.createElement('p')
        mestoexpe.textContent = "add amount and description"
        document.querySelector('#addmessexp').appendChild(mestoexpe)
    }
    else {

    let amo = parseInt(e.target.elements.amountexpense.value, 10)
    account.addexpense(e.target.elements.desexpense.value, amo)

    account.listexpense()
    account.getaccountsummary()

    e.target.elements.desexpense.value = ''
    e.target.elements.amountexpense.value = ''
}})

document.querySelector('#deleteincome').addEventListener('submit',function (e) {
    e.preventDefault()
    account.deleteincome(e.target.elements.delincome.value)

})

document.querySelector('#deleteexpense').addEventListener('submit', function (e) {
    e.preventDefault()
    account.deleteexpense(e.target.elements.delexpen.value)
    
})








document.querySelector('#summaryid').addEventListener('submit', function (lis) {

 
    
    if (lis.target.textContent ==='show summary' && b)
    {
       

       lis.target.textContent='hide summary'
        account.getaccountsummary()

         
        const summary = document.createElement('h3')
        summary.textContent = `profession: ${account.profession} is age:${account.age} `
        summary.className += "listsummary"
        document.querySelector('#showsummaryid').appendChild(summary)


           }
     else if (lis.target.textContent === 'show summary' && !b){
        lis.target.textContent = 'hide summary'
        account.getaccountsummary()



}


    else{
        lis.target.textContent='show summary'
        document.querySelectorAll('.listsummary').forEach(function (lisumary) {
            lisumary.remove()
        })
    }
    
})

document.querySelector('#modifyexpense').addEventListener('submit', function (e) {
    e.preventDefault()
    const desc = e.target.elements.modexp.value
    const restexp= account.findexp(desc)
    const mesexp=document.createElement('p')
    if(restexp>-1)
    {   mesexp.textContent="Item is availeble to modify"
        document.querySelector('#modexmessge').appendChild(mesexp)

        document.querySelector('#modexmessge').innerHTML=''
        document.querySelector('#modexmess').innerHTML = ''
        
        const formexp= document.createElement('form')
        formexp.id='saveexpid'

        const textexp= document.createElement('input')
        textexp.type="text"
        textexp.id="modifyexptext"
        textexp.value=account.expense[restexp].amount

      const saveexpbtn= document.createElement('input')
        saveexpbtn.id="saveexpbtn"
        saveexpbtn.setAttribute("type","submit")
        saveexpbtn.setAttribute("value", "Save Expense")

        mesexp.textContent = "Item is availeble to modify"
        document.querySelector('#modexmessge').appendChild(mesexp)

        formexp.appendChild(textexp)
        formexp.appendChild(saveexpbtn)
        document.querySelector('#modexmess').appendChild(formexp)
        
        
        
 document.querySelector('#saveexpid').addEventListener('submit', function (e) {
            e.preventDefault()
            const modamt = parseInt( e.target.elements.modifyexptext.value)
           account.modifyexpe(desc,modamt)

          account.listexpense()   
          account.getaccountsummary()
     document.querySelector('#modexmessge').innerHTML = ''
     mesexp.textContent = "Item is modified successfully" 
     document.querySelector('#modexmessge').appendChild(mesexp)
        })
    }
    else{
        document.querySelector('#modexmessge').innerHTML = ''
        mesexp.textContent = "Item is not availeble to modify"
        document.querySelector('#modexmessge').appendChild(mesexp)



    }
})


document.querySelector('#modifyincome').addEventListener('submit', function (e) {
    e.preventDefault()
    const desc = e.target.elements.modinc.value
   const result= account.findincome(desc)
    const mes = document.createElement('p')
if(result>-1)
{
    
    
    document.querySelector('#modmessge').innerHTML = ''
    document.querySelector('#modincmess').innerHTML = ''
    const form= document.createElement('form')
    form.id='savincomeid'
    const textmount= document.createElement('input')
     textmount.type="text"
     textmount.id="modifyamt"
     textmount.value=account.income[result].amount

    const savebtn = document.createElement('input')
    //savebtn.innerText = 'save income'
    savebtn.id = "savebtn"
    savebtn.setAttribute("type", "submit");
    savebtn.setAttribute("value", "save Income");


    mes.textContent="item is available modify amount"
    document.querySelector('#modmessge').appendChild(mes)
  
    
    form.appendChild(textmount)
    form.appendChild(savebtn)
    document.querySelector('#modincmess').appendChild(form)
   
    document.querySelector('#savincomeid').addEventListener('submit', function (e) {
       e.preventDefault()
        const val=parseInt(e.target.elements.modifyamt.value)
        account.modifyincome(desc,val)

        document.querySelector('#modmessge').innerHTML = ''
        mes.textContent = "itemis modified successfully"
        document.querySelector('#modmessge').appendChild(mes)

        account.listincome()
        account.getaccountsummary()
    })

   
}
else{
    document.querySelector('#modmessge').innerHTML = ''
    mes.textContent = "item is not available"
    document.querySelector('#modmessge').appendChild(mes)
}
})


// account.modifyincome('sal',1000)
// account.modifyexpe('drink',20)

// console.log(account.findincome('sal'))
// console.log(account.findexp('drink'))

account.listexpense()
account.listincome()











// document.querySelector('#incomeid').addEventListener('click',function (e) {
//     if(e.target.textContent==='show income')
//     { e.target.textContent='hide income'
//         account.listincome()
//     }
//     else{
//     e.target.textContent='show income'
//     document.querySelectorAll('.income-list').forEach(function (li) {
//       li.remove()  
//     })


// }

// })
// document.querySelector('#expenseid').addEventListener('click',function (e) {
//     if(e.target.textContent==='show expense')
//     {
// e.target.textContent='hide expense'
// account.listexpense()
//     }
//     else{
//   e.target.textContent='show expense'
//         document.querySelectorAll('.expense-list').forEach(function (ex) {
//             ex.remove()
//         })

//     }

// })


// let isvalidpass= function (pass) {
// return pass.length>8 && !pass.includes('password') 
     
// }
// console.log(isvalidpass('aaaaaaaaaaaaaaa'))
// console.log(isvalidpass('pass'))
// console.log(isvalidpass('aaaaaaaaaaaaaaa'))
// let min=10
// let max=20
// let randomnum= Math.floor(Math.random()*(max-min))+min
// console.log(randomnum)

