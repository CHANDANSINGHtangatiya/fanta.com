var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub:true,
    // markers:true
}})

tl.to(".img2",{
    top:"120%",
    left:"0%",
    rotate:"360"

},"img")

tl.to(".img1",{
    top:"160%",
    left:"20%",

},'img')

tl.to(".img3",{
    top:"160%",
    left:"60%",

},'img')

// tl.to(".img5",{
//     top:"160%",
//     left:"40%",

// },'img')

tl.to(".img4",{
    top:"160%",
    right:"70%",

},'img')




var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub:true,
    // markers:true
}})

tl2.to(".img2",{
    top:"210%",
  left:"30%",
  rotate:"360deg"


},"img1")

tl2.to(".img1",{
    top:"200%",
  left:"40%",
  rotate:"360deg"


},"img1")


tl2.from(".card_img1",{
    
  top:"110%",
  left:"-100%",
//   rotate:"360deg"


},"img1")