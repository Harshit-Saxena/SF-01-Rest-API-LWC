import {
    LightningElement,
    track
} from 'lwc';

export default class APICalloutFETCH extends LightningElement {
    @track imageURL;
    connectedCallback() {
        fetch("https://api.thecatapi.com/v1/images/search", {
                method: "GET"
            })
            .then(result => result.json())
            .then(data => {
                console.log('DATA::>>', data);
                this.imageURL = data[0].url;
            });
    }
}