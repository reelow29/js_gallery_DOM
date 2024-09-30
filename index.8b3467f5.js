var t=document.getElementById("thumbs");t.addEventListener("click",function(e){e.preventDefault();var n=e.target.closest("a");if(n&&t.contains(n)){var r=n.getAttribute("href"),a=n.getAttribute("title"),c=document.getElementById("largeImg");c.src=r,c.alt=a}});
//# sourceMappingURL=index.8b3467f5.js.map
