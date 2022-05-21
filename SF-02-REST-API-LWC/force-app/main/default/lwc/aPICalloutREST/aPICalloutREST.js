import {
    LightningElement,
    track
} from 'lwc';
import getRandomCat from '@salesforce/apex/APICalloutREST.getRandomCat';
export default class APICalloutREST extends LightningElement {

    @track imageURL;
    connectedCallback() {
        getRandomCat({})
            .then(result => {
            var resParsed = JSON.parse(result);
            this.imageURL = resParsed[0].url;
            })
            .catch(result => {
            console.log('catch is running '+result);
        })
    }
}