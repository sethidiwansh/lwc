import { LightningElement,track } from 'lwc';
import getAllAccounts from '@salesforce/apex/DemoApex.getAllAccounts';
export default class Parentcomponent extends LightningElement {
@track myaccounts;
@track copiedaccounts;
    constructor(){
        super();
       }
    handleClick(event)
    {
        console.log(event.target.label);
        var inp=this.template.querySelectorAll("lightning-input");


        inp.forEach(function(element){
            if(element.name=="name")
                this.search=element.value;

            else if(element.name=="records")
                this.records=element.value;
        },this);
        this.callserver();
    }

    async callserver ()
    {
        console.log('value of search is '+ this.search);
        console.log('value of record is '+ this.records);
        let result= await  getAllAccounts({search:this.search,records:this.records});
        this.myaccounts=result;
        this.copiedaccounts=result;
 
    }
       handleOnChange(event)
       {
           this.filterdata=event.target.value;
       }
       handleClickMe()
       {
             if (this.filterdata!='')
             {
               this.myaccounts = this.copiedaccounts.filter(obj => obj.Name.toLowerCase().includes(this.filterdata.toLowerCase()))     
            }
            else
            {
                this.myaccounts=this.copiedaccounts;
            }

}
}