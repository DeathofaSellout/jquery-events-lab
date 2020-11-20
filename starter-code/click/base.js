console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on("click", function(){
      let time = event.timeStamp;
      let listItem = $(this).text();
      $('ul').append("<li>" + listItem +"</li>" + time);
  })
})
