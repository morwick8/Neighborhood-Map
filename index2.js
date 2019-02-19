var request = require('request');
request ({url:'https://api.unsplash.com/collections/4297159/photos?&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203&per_page=29'}, function (error,result) {
    if (error) console.log (error.message);
    else if (result) {
        var unsplashJSON = JSON.parse(result.body);
        var unsplashArr  = [],
            keys = Object.keys(unsplashJSON);
        
        for(var i=0,n=keys.length;i<n;i++){
          var key  = keys[i];
          unsplashArr[key] = unsplashJSON[key];
          console.log(unsplashArr[key].user.name);
          console.log(unsplashArr[key].urls.small);
          console.log(key)
        }
    
        
        
    /*    var contents = unsplashArr.cover_photo.map(function (item) {
            console.log(item.user.name)
        });
       unsplashJSON.cover_photo.forEach((e) => {
            console.log(e.user.name);
            console.log(e.urls.small);
                    })
*/

    }
})