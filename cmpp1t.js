    var timeout,interval
    var threshold = 10000;
    var secondsleft=threshold;

    window.onload = function()
    {
        startschedule();
    }

     function startChecking()
     {
        secondsleft-=1000;
        document.querySelector("#popupTimer").innerHTML = "Skip AD After " + Math.abs((secondsleft/1000))+" secs";  
        if(secondsleft == 0)
        {
            //document.getElementById("clickme").style.display="";
            clearInterval(interval);
            document.querySelector("#popupTimer").style.display="none";
           // document.querySelector(".div2").style.display="";
            $(".close").removeClass("hide");
        }
    }
    function startschedule()
    {
          clearInterval(interval);
          secondsleft=threshold;
          document.querySelector("#popupTimer").innerHTML = "Skip AD After " + Math.abs((secondsleft/1000))+" secs";  
           interval = setInterval(function()
           {
               startChecking();
           },1000)              
   }

   function resetTimer()
   {
        startschedule();
   }
