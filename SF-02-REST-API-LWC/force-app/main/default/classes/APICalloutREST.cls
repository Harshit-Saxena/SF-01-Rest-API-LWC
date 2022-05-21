public with sharing class APICalloutREST {

    @AuraEnabled
    public static string getRandomCat(){
        http http  = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.thecatapi.com/v1/images/search');
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
}
