'use sctrict';

// Not using aws api gateway sdk js. Too much unused features for me.
var axios = require('axios');

module.exports = function (config) {

    var apiClient = {};
    // TODO validate config
    apiClient.config = {
        baseURL: config.baseURL,
        apiKey: undefined,
    };

    // Define axios instance for all queries
    apiClient.axios = axios.create({
        baseURL: apiClient.config.baseURL
    });

//api.register
//api.login
//api.logout

    // API Calls
    apiClient.login = function() {
        this.axios.defaults.headers.common['Authorization'] = 'TODO';
    }
    
    apiClient.logout = function() {
        this.axios.defaults.headers.common['Authorization'] = undefined;
    }
    
    apiClient.getMessages = function(place) {
        return this.axios.get('/messages', {
            params: {
                place: place
            }
        });
    };

    apiClient.addMessage = function(place, content) {
        return this.axios.post('/messages', {
            place: place,
            content: content
        });
    };

    return apiClient;
};



