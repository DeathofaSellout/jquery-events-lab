console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    var start;
    var end;
    var keyPresses = 0;
  $(document).on("keypress", function(){
      keyPresses += 1;
      if(keyPresses % 2 === 1){
        start = event.timeStamp;
        $("#total-time").text(start + " Hit the spacebar again!");
      } else {
        keyPresses - 1;
        end = event.timeStamp - start;
          $("#total-time").text("Total time between spacebar hits:" + end);
          start = 0;
          end = 0;
      }
  });
})
