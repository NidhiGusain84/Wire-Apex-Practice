import { LightningElement, wire } from 'lwc';
import getAccountData from "@salesforce/apex/AccountHelper.getAccountData"

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' },
];

export default class WireDecoratorProperty extends LightningElement {
    columns = COLUMNS;

    @wire(getAccountData)
    accounts;

   
}