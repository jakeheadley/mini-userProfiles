angular.module('userProfiles').service('mainService', function(){

  this.helloService = 'Hello this is the Service';

  var data = [{
        "id": 0,
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 1,
        "first_name": "Lucille",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "Oscar",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }];

  this.getUsers = function(){
    return data;
  };

  this.toggleFavorite = function(index){
    data[index].isFavorite = !data[index].isFavorite;
  }


});
