$(document).ready(function(){

      function imgSize() {
        let img = document.getElementById(&#39;imgId&#39;);
        //or however you get a handle to the IMG
        let width = img.clientWidth;
        let height = img.clientHeight;
        alert(&quot;Original width=&quot; + width + &quot;, &quot; + &quot;Original height=&quot; + height);
      }

	$(&#39;#myform&#39;).on(&#39;submit&#39;, function(e){
  e.preventDefault();

  var reURL = $(&#39;#reURL&#39;).val();
  var gifUrl = $(&#39;#gifUrl&#39;).val();
  var timeOut = $(&#39;#timeOut&#39;).val();
  var shareUrl = location.href + &quot;?r=&quot; + reURL + &quot;&amp;gif=&quot; + gifUrl + &quot;&amp;t=&quot; + timeOut;

  $(&#39;#shareUrl&#39;).val(shareUrl);
  $(&#39;#shareUrl&#39;).css(&#39;background&#39;, &#39;#9dffc0&#39;);
	console.log(location.href + &quot;?r=&quot; + reURL + &quot;&amp;gif=&quot; + gifUrl)


/*
	const params = new URLSearchParams(window.location.search);
	console.log(params);
	for (const param of params) {

}
*/


 });


/*

 const params = new URLSearchParams(window.location.search);

if (params.get(&#39;r&#39;) &amp;&amp; params.get(&#39;gif&#39;) &amp;&amp; params.get(&#39;t&#39;)) {
	$(&#39;meta[name=image]&#39;).attr(&#39;content&#39;, params.get(&#39;gif&#39;));
	$(&#39;#myform&#39;).css(&#39;display&#39;, &#39;none&#39;);
	var delay = timeOut ; 
setTimeout(function(){ window.location = params.get(&#39;r&#39;); }, params.get(&#39;t&#39;));

}

*/


    });
