function reveal(){console.log("Reveal Up is loaded."),gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".revealUp").forEach(function(n){ScrollTrigger.create({trigger:n,start:"top 80%",end:"bottom 20%",markers:!0,onEnter:function(){gsap.fromTo(n,{y:100,autoAlpha:0},{duration:1.25,y:0,autoAlpha:1,ease:"back",overwrite:"auto"})},onLeave:function(){gsap.fromTo(n,{autoAlpha:1},{autoAlpha:0,overwrite:"auto"})},onEnterBack:function(){gsap.fromTo(n,{y:-100,autoAlpha:0},{duration:1.25,y:0,autoAlpha:1,ease:"back",overwrite:"auto"})},onLeaveBack:function(){gsap.fromTo(n,{autoAlpha:1},{autoAlpha:0,overwrite:"auto"})}})})}function stop(){console.log("Stop Up is loaded."),document.querySelectorAll(".revealUp").forEach(function(n){n.classList.replace("revealUp","stopRevealUp"),gsap.fromTo(n,{y:100,autoAlpha:0},{duration:1.25,y:0,autoAlpha:1,ease:"back",overwrite:"auto"}),ScrollTrigger.disable(),gsap.registerPlugin(ScrollTrigger),console.log(n)})}function particlesJS(){console.log("particles.js loaded"),document.addEventListener("DOMContentLoaded",function(){particleground(document.getElementById("particles"),{dotColor:"#fff",lineColor:"#fff"})},!1),function(n,p){"use strict";var s="particleground",c=n.jQuery;function u(a,e){var t,f,x,g,y,w,d=!!p.createElement("canvas").getContext,l=[],O=0,M=0,A=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),P=!!n.DeviceOrientationEvent,k=0,T=0,S=!1;function b(){t.width=a.offsetWidth,t.height=a.offsetHeight,f.fillStyle=e.dotColor,f.strokeStyle=e.lineColor,f.lineWidth=e.lineWidth}function Y(){if(d){x=n.innerWidth,g=n.innerHeight,f.clearRect(0,0,t.width,t.height);for(var i=0;i<l.length;i++)l[i].updatePosition();for(i=0;i<l.length;i++)l[i].draw();S||requestAnimationFrame(Y)}}function v(){switch(this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*t.width),y:Math.ceil(Math.random()*t.height)},this.speed={},e.directionX){case"left":this.speed.x=+(-e.maxSpeedX+Math.random()*e.maxSpeedX-e.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*e.maxSpeedX+e.minSpeedX).toFixed(2);break;default:this.speed.x=+(-e.maxSpeedX/2+Math.random()*e.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?e.minSpeedX:-e.minSpeedX}switch(e.directionY){case"up":this.speed.y=+(-e.maxSpeedY+Math.random()*e.maxSpeedY-e.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*e.maxSpeedY+e.minSpeedY).toFixed(2);break;default:this.speed.y=+(-e.maxSpeedY/2+Math.random()*e.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?e.minSpeedY:-e.minSpeedY}}function F(i){void 0!==e[i]&&e[i].call(a)}return e=function m(a){a=a||{};for(var e=1;e<arguments.length;e++){var d=arguments[e];if(d)for(var t in d)d.hasOwnProperty(t)&&("object"==typeof d[t]?deepExtend(a[t],d[t]):a[t]=d[t])}return a}({},n[s].defaults,e),v.prototype.draw=function(){f.beginPath(),f.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,e.particleRadius/2,0,2*Math.PI,!0),f.closePath(),f.fill(),f.beginPath();for(var i=l.length-1;i>this.stackPos;i--){var r=l[i],o=this.position.x-r.position.x,h=this.position.y-r.position.y;Math.sqrt(o*o+h*h).toFixed(2)<e.proximity&&(f.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),e.curvedLines?f.quadraticCurveTo(Math.max(r.position.x,r.position.x),Math.min(r.position.y,r.position.y),r.position.x+r.parallaxOffsetX,r.position.y+r.parallaxOffsetY):f.lineTo(r.position.x+r.parallaxOffsetX,r.position.y+r.parallaxOffsetY))}f.stroke(),f.closePath()},v.prototype.updatePosition=function(){e.parallax&&(P&&!A?(y=(x-0)/60*(k- -30)+0,w=(g-0)/60*(T- -30)+0):(y=O,w=M),this.parallaxTargX=(y-x/2)/(e.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(w-g/2)/(e.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10);var o=a.offsetWidth,h=a.offsetHeight;switch(e.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=o-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>o&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>o||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(e.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=h-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>h&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>h||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},v.prototype.setStackPos=function(i){this.stackPos=i},function E(){if(d){(t=p.createElement("canvas")).className="pg-canvas",t.style.display="block",a.insertBefore(t,a.firstChild),f=t.getContext("2d"),b();for(var i=Math.round(t.width*t.height/e.density),r=0;r<i;r++){var o=new v;o.setStackPos(r),l.push(o)}n.addEventListener("resize",function(){!function H(){b();for(var i=a.offsetWidth,r=a.offsetHeight,o=l.length-1;o>=0;o--)(l[o].position.x>i||l[o].position.y>r)&&l.splice(o,1);var h=Math.round(t.width*t.height/e.density);if(h>l.length)for(;h>l.length;){var X=new v;l.push(X)}else h<l.length&&l.splice(h);for(o=l.length-1;o>=0;o--)l[o].setStackPos(o)}()},!1),p.addEventListener("mousemove",function(h){O=h.pageX,M=h.pageY},!1),P&&!A&&n.addEventListener("deviceorientation",function(){T=Math.min(Math.max(-event.beta,-30),30),k=Math.min(Math.max(-event.gamma,-30),30)},!0),Y(),F("onInit")}}(),{option:function B(i,r){if(!r)return e[i];e[i]=r},destroy:function W(){console.log("destroy"),t.parentNode.removeChild(t),F("onDestroy"),c&&c(a).removeData("plugin_"+s)},start:function q(){S=!1,Y()},pause:function L(){S=!0}}}n[s]=function(a,e){return new u(a,e)},n[s].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},c&&(c.fn[s]=function(a){if("string"==typeof arguments[0]){var t,e=arguments[0],d=Array.prototype.slice.call(arguments,1);return this.each(function(){c.data(this,"plugin_"+s)&&"function"==typeof c.data(this,"plugin_"+s)[e]&&(t=c.data(this,"plugin_"+s)[e].apply(this,d))}),void 0!==t?t:this}if("object"==typeof a||!a)return this.each(function(){c.data(this,"plugin_"+s)||c.data(this,"plugin_"+s,new u(this,a))})})}(window,document),function(){for(var n=0,p=["ms","moz","webkit","o"],s=0;s<p.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[p[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[s]+"CancelAnimationFrame"]||window[p[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(m,c){var u=(new Date).getTime(),a=Math.max(0,16-(u-n)),e=window.setTimeout(function(){m(u+a)},a);return n=u+a,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(m){clearTimeout(m)})}()}function animateOnView(n,p){var s=document.getElementById(n),m=s.clientHeight;document.addEventListener("scroll",function u(){(function c(){var a=window.innerHeight,e=window.scrollY||window.pageYOffset;return e+a>s.getBoundingClientRect().top+e+m})()&&s.classList.add(p)})}