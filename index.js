var LoanArray = [];
var Person1 = { 
Id : 01,
customerName : 'John Smith',
phoneNumber : '454-451-0303', 
address : 'Pheonix-AZ',
loanAmount : 25000,
interest : 4.5,
loanTermYears : 5,
loanType : 'persona loan',
description : 'John has take a personal loan',
calculatedLoanAmount : function(){

                const amount = this.loanAmount;    
                const rate = this.interest;  
                const months = this.loanTermYears*12;
        // Calculating interest per month
        const interest = (amount * (rate * 0.01)) / months;
        
        // Calculating total payment
        const total = ((amount / months) + interest).toFixed(2);
        return total   
}
    

}

var Person2 = { 
    Id : 01,
    customerName : 'Allan Mills',
    phoneNumber : '454-480-4510', 
    address : 'Pheonix-AZ',
    loanAmount : 450000,
    interest : 9,
    loanTermYears : 5,
    loanType : 'car loan',
    description : 'Allan has taken a car loan',
    calculatedLoanAmount : function(){
    
                    const amount = this.loanAmount;    
                    const rate = this.interest;  
                    const months = this.loanTermYears*12;
            // Calculating interest per month
            const interest = (amount * (rate * 0.01)) / months;
            
            // Calculating total payment
            const total = ((amount / months) + interest).toFixed(2);
            return total
    }
}
var Person3 = { 
    Id : 03,
    customerName : 'Smita More',
    phoneNumber : '320-480-4510', 
    address : 'Pheonix-AZ',
    loanAmount : 4550000,
    interest : 7,
    loanTermYears : 6,
    loanType : 'Education loan',
    description : 'Smita has taken a Education loan',
    calculatedLoanAmount : function(){
    
                    const amount = this.loanAmount;    
                    const rate = this.interest;  
                    const months = this.loanTermYears*12;
            // Calculating interest per month
            const interest = (amount * (rate * 0.01)) / months;
            
            // Calculating total payment
            const total = ((amount / months) + interest).toFixed(2);
            return total
    }
}
var Person4 = { 
    Id : 04,
    customerName : 'Zyan Mallik',
    phoneNumber : '320-480-0070', 
    address : 'New York',
    loanAmount : 7550000,
    interest : 9,
    loanTermYears : 15,
    loanType : 'Businness loan',
    description : 'Zyan has taken an Businness loan',
    calculatedLoanAmount : function(){
    
                    const amount = this.loanAmount;    
                    const rate = this.interest;  
                    const months = this.loanTermYears*12;
            // Calculating interest per month
            const interest = (amount * (rate * 0.01)) / months;
                        // Calculating total payment
            const total = ((amount / months) + interest).toFixed(2);
            return total
    }
}
var Person5 = { 
    Id : 05,
    customerName : 'Sachin Mallik',
    phoneNumber : '721-007-0070', 
    address : 'New York',
    loanAmount : 620000,
    interest : 10,
    loanTermYears : 8.5,
    loanType : 'Businness loan',
    description : 'Sachin has taken an Businness loan',
    calculatedLoanAmount : function(){
                    const amount = this.loanAmount;    
                    const rate = this.interest;  
                    const months = this.loanTermYears*12;
            // Calculating interest per month
            const interest = (amount * (rate * 0.01)) / months;
            // Calculating total payment
            const total = ((amount / months) + interest).toFixed(2);
            return total
    }
}

LoanArray.push(Person1)
LoanArray.push(Person2)
LoanArray.push(Person3)
LoanArray.push(Person4)
LoanArray.push(Person5)
console.log(LoanArray)
//const total = 0;
//let sum = 0;
let Gtotal =0

LoanArray.forEach((item)=> console.log(item.calculatedLoanAmount()));
//LoanArray.forEach(item=>{
  //  sum += item.calculatedLoanAmount();
//})
// LoanArray.forEach((item) =>total = item.calculatedLoanAmount()

const sum = LoanArray.reduce((accumulator, item)=>{
     return item.calculatedLoanAmount() +accumulator;
    
     
},0)

// );

console.log(`The Grand total is ${sum}`);