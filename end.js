// // $(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if  (scroll > 810) {
        $(".scroll").css("background" , "white");
        $(".text").css("color" , "black");
        $(".scroll").css("transition" , "background 100ms ease");
      }
        if  (scroll > 700){
        $(".second").css("color" , "black");
        }
        if  (scroll > 850){
        $(".firs").css("color" , "black");

      } 
      // if  (scroll < 840) {
      //   $(".scroll").css("background" , "black");
      //   $(".text").css("color" , "white");
      //   $(".scroll").css("transition" , "background 1s ease-in");
      // }


      else{
          $(".scroll").css("background" , "black" ) 	
          $(".text").css("color" , "white");
          $(".second").css("color" , "white");
          $(".firs").css("color" , "white");
      }
  })




  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", e=>{
             console.log(e)
    cursor.setAttribute("style","top: "+(e.pageY -100)+"px; left: " + (e.pageX -100) + "px;")
  })

  document.addEventListener("click", ()=>{
    cursor.classList.add("expand");

    setTimeout(()  =>{
      cursor.classList.remove("expand")
    },100)
  })
 

  // const scroll = document.querySelector(".scroll")

  // window.onscroll = function(){
  //   const top = window.scrollY;
  //   if(top >= 90){
  //     scroll.classList.add("active");
  //   }
  //   else{
  //     scroll.classList.remove("active");
  //   }
  // }
  // pageX: 776
  // pageY: 202