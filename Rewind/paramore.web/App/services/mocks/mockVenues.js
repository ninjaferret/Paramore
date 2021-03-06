﻿define([], function () {
    
// MOCK: Get the real data from a REST endpoint - this is test data captured from the enpoint by Fiddler
//[{
//    "address": ":{"buildingNumber":"","city":"","postCode":"","streetName":"",
//    "contact": { "emailAddress": "ian@huddle.com", "name": "Ian", "phoneNumber": "123454678" },
//    "links": [{ "HRef": "\/\/localhost:59280\/venue\/8b8c66fc-d541-4051-94ed-1699209d69b0", "Rel": "self" },
//      { "HRef": "http:\/\/www.mysite.com\/maps\/12345", "Rel": "map" }],
//    "name": "Test Venue",
//    "version": 1
//}]

    var data = [
            {
                "address": { "buildingNumber": "100", "streetName": "City Road", "city": "London", "postCode": "EC1Y 2BP" },
                "contact": { "name": "Ian", "emailAddress": "ian@huddle.com", "phoneNumber": "123454678" },
                "links": [
                    { "HRef": "\/\/localhost:59280\/venue\/5557e160-0f5a-472a-8dab-56f4e70ed15f", "Rel": "self" },
                    { "HRef": "http:\/\/goo.gl\/maps\/OX8n0", "Rel": "map" }],
                "name": "Huddle",
                "version": "1"
            },
            {
                "address": { "buildingNumber": "123", "streetName": "Sesame Street", "city": "New York", "postCode": "10128" },
                "contact": { "name": "Elmo", "emailAddress": "elmo@bigbird.com", "phoneNumber": "123454678" },
                "links": [
                    { "HRef": "\/\/localhost:59280\/venue\/5557e160-0f5a-472a-8dab-56f4e70ed15f", "Rel": "self" },
                    { "HRef": "http:\/\/goo.gl\/maps\/vN5Gk", "Rel": "map" }],
                "name": "Hooper's Store",
                "version": "1"
            }
        ];

    var mockVenues = {
        data: data
    };

    return mockVenues;
});