import { LightningElement,api,track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api accountData ='the';
    
    constructor()
    {
        super();

    }

}