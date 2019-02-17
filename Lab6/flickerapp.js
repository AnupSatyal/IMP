$("#button").click(function() {
  var keyword;
  element = document.getElementById('tagName');
  if (element != null) {
    keyword = element.value;
  }
  else {
    keyword = null;
  }
  console.log(keyword);

  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
    dataType: 'jsonp',
    data: { "tags": keyword, "format": "json", "api_key": "8797630bc2f403954faa909157ec770a" },
    success: function(response) {
// console.log(response);
var name = response.title;
$("#searchName").text(name);

for(var i=0; i<response.items.length; i++) {  
  var imageTitle = response.items[i].title;   
  var image = response.items[i].media.m;
//shorting the length of title if it is long
if(!imageTitle){
  imageTitle="Anonymous.."
}
else if(imageTitle.length > 25){
  imageTitle = imageTitle.substring(0,25)+"...";
}
$("#result").prepend("<figure><img src='"+image+"'><figcaption>"+imageTitle+"</figcaption></figure>"
  );
}
}
});
});
