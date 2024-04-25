import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHelper.getAccountData';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' },
];

export default class WireDecoratorWithFunction extends LightningElement {

    accounts;
    error;
    columns = COLUMNS;

    @wire(getAccountData)
    accounts({data, error}){
        if(data){
            console.log("data", data);
            let updatedAccounts = data.map((currentItem) => {
                let updatedObj = {};
                if(!currentItem.hasOwnProperty('Rating')){
                    //cloning the data and adding a "Rating" property with value "Warm"
                    updatedObj = {...currentItem, Rating: "Warm"};
                }else{
                    updatedObj = {...currentItem};
                }
                return updatedObj;
            });
            console.log("updatedAccounts : ", updatedAccounts);
            this.accounts = [...updatedAccounts];
            this.error = null;

        }else if(error){
            console.log("error", error);
            this.accounts = null;
            this.error = error;
        }
    }
}