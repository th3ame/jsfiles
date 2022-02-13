		$(document).ready(function(){

               function imgSize() {
        let img = params.get(&#39;gif&#39;);
        //or however you get a handle to the IMG
        let width = img.clientWidth;
        let height = img.clientHeight;
       // alert(&quot;Original width=&quot; + width + &quot;, &quot; + &quot;Original height=&quot; + height);
          
          $(&#39;meta[property=&quot;og:image:width&quot;]&#39;).attr(&#39;content&#39;, width);
          $(&#39;meta[property=&quot;og:image:height&quot;]&#39;).attr(&#39;content&#39;, height);
      } 
          
		 const params = new URLSearchParams(window.location.search);
		
		if (params.get(&#39;r&#39;) &amp;&amp; params.get(&#39;gif&#39;) &amp;&amp; params.get(&#39;t&#39;)) {
			$(&#39;meta[property=&quot;og:image&quot;]&#39;).attr(&#39;content&#39;, params.get(&#39;gif&#39;));
			$(&#39;meta[property=&quot;og:url&quot;]&#39;).attr(&#39;content&#39;, params.get(&#39;gif&#39;));
			$(&#39;meta[property=&quot;og:url&quot;]&#39;).attr(&#39;content&#39;, params.get(&#39;gif&#39;));
         
			$(&#39;#myform&#39;).css(&#39;display&#39;, &#39;none&#39;);
  			$(&#39;#gfimg&#39;).attr(&#39;src&#39;, params.get(&#39;gif&#39;));

			var delay = timeOut ; 
		setTimeout(function(){ window.location = params.get(&#39;r&#39;); }, params.get(&#39;t&#39;));
		
		}

    });
