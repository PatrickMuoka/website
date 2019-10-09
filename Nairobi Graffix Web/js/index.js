var serviceList = document.getElementById('cover');
var bgImage = ['www.jpg','largeformat.jpg','heatpress.jpg','graphicdesign.jpg','ignage.jpeg','Graphic design.jpg'];
var count = 0;

function serviceSlide(){
 if(count > bgImage.length-1){
   count = 0;	
 }  
 else{
 	serviceList.style.backgroundImage = `url(res/services/${bgImage[count]})`;
  count++;

 }
 setTimeout(serviceSlide,5000);
}
document.getElementById('gmail').onclick = ()=>{
	alert('nairobigraffix@gmail.com');
}
window.onload = serviceSlide();