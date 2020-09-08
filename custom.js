$("#sun").click(function()
{
    $("body").css("background","white");
    $("header").css("background","#fff");
    $("header").css("transition","ease out 4s");
    $("header ul li a").css("color","#002447");
    $("header form input").css("border","1px solid #ccc");
    $(".navbar-light .navbar-brand img").css("filter","invert(0)");
    $("#home #mainbanner .container").css("background","rgba(0,0,0,0.5)");
    $(".heading h1").css("color","#333");
    $("#home #featuredbooks ul li a").css("background","#000");
    $(".navbar-light .navbar-toggler-icon").css("filter","invert(0)");
    $("footer #innerfooter").css("background","#ccc");
    $("footer #copyright").css("background","#000");
    $("footer #innerfooter *").css("color","#000");
    $("footer #copyright *").css("color","#fff");
});

$("#moon").click(function()
{
    $("body").css("background","black");
    $("header").css("background","#000");
    $("header").css("transition","ease out 4s");
    $("header ul li a").css("color","#fff");
    $("header form input").css("border","1px solid #333");
    $(".navbar-light .navbar-brand img").css("filter","invert(1)");
    $("#home #mainbanner .container").css("background","rgba(0,0,0,0.7)");
    $(".heading h1").css("color","#fff");
    $("#home #featuredbooks ul li a").css("background","#333");
    $(".navbar-light .navbar-toggler-icon").css("filter","invert(1)");
    $("footer #innerfooter").css("background","#000");
    $("footer #copyright").css("background","#000");
    $("footer *").css("color","#fff");

});

$("#product").owlCarousel({

loop:true,
margin:15,
rewind:true,
responsiveClass:true,
dots:true,
autoplay:false,
animateOut: 'fadeOut',
smartSpeed:500,
navText: [
'<i class="fas fa-angle-left" aria-hidden="true"></i>',
'<i class="fas fa-angle-right" aria-hidden="true"></i>'
],
responsive:{
0:{
items:2,
nav:true,
loop:false
},
480:{
items:2,
nav:true,
loop:false
},
768:{
items:4,
nav:true,
loop:false
},
992:{
items:6,
nav:true,
loop:false,

}					  
}			 
});		

const persons = [
{
name: "Ali Asghar",
photo: "https://github.com/miketheswanson/Ali-sWebsite/blob/master/WhatsApp%20Image%202020-09-09%20at%2012.07.53%20AM.jpeg?raw=true",
title: "CEO",
bio:
"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
social: {
facebook: "#",
twitter: "#",
linkedin: "#"
}
},
{
name: "Kubra Ali",
photo: "https://github.com/miketheswanson/Ali-sWebsite/blob/master/kubra.PNG?raw=true",
title: "COO",
bio:
"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
social: {
facebook: "#",
twitter: "#",
linkedin: "#"
}
},
{
name: "Muhammad Abbas",
photo: "https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/83725342_3254353077911335_1206752314002505728_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFKby3gaFKRCuQLcbOD4mRBJetS507g9TMl61LnTuD1M2jtBj7DBfVIHFZhcQKB057ZV2wD35gXERcdZ6EcjZAK&_nc_ohc=A7qQN0_yH7oAX9hoWLh&_nc_ht=scontent.fisb5-1.fna&oh=24db8092314f15b355ebbedf403327e0&oe=5F7EBBFC",
title: "UI Designer",
bio:
"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
social: {
facebook: "#",
twitter: "https://twitter.com/knyttneve",
linkedin: "#"
}
},
{
name: "Ahsan Abbas",
photo: "https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/95666237_981532792263580_1262024858020085760_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeETjgeY7G8DU1VOh7o4GekxQICG7z7kfEpAgIbvPuR8Svxlyt694lN2AtE-dIzpP9Y-jny0w9DoOUSK62kGjzpq&_nc_ohc=UQ4zdM7L1BMAX9UvOVT&_nc_ht=scontent.fisb5-1.fna&oh=1a37709f72664e8bad89e025f27d398b&oe=5F7D8AFA",
title: "Developer",
bio:
"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
social: {
facebook: "#",
twitter: "#",
linkedin: "#"
}
}
];

const app = new Vue({
el: "#app",
data() {
return {
persons: persons,
selectedPersonIndex: null,
isSelected: false,
selectedPerson: null,
inlineStyles: null,
isReady: false,
isOk: false,
selectedPersonData: {
name: null,
title: null,
photo: null,
social: {
  facebook: null,
  twitter: null,
  linkedin: null
}
}
};
},
methods: {
selectPerson(index, el) {
if (!this.isOk) {
this.selectedPersonIndex = index;
this.isSelected = true;
el.target.parentElement.className == "person-details"
  ? (this.selectedPerson = el.target.parentElement.parentElement)
  : (this.selectedPerson = el.target.parentElement);

this.selectedPerson.classList.add("person-selected");
this.selectedPerson.setAttribute(
  "style",
  `width:${this.selectedPerson.offsetWidth}px;`
);
this.selectedPersonData = this.persons[index];
window.setTimeout(() => {
  this.inlineStyles = `width:${this.selectedPerson
    .offsetWidth}px;height:${this.selectedPerson
    .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
    .selectedPerson.offsetTop}px;position:fixed`;
  this.selectedPerson.setAttribute("style", this.inlineStyles);
}, 400);
window.setTimeout(() => {
  this.isReady = true;
  this.isOk = true;
}, 420);
} else {
this.reset();
}
},
reset() {
this.isReady = false;
window.setTimeout(() => {
this.selectedPerson.classList.add("person-back");
}, 280);
window.setTimeout(() => {
this.selectedPerson.setAttribute("style", "");
}, 340);
window.setTimeout(() => {
this.isSelected = false;
this.selectedPerson.classList.remove("person-back", "person-selected");
this.isOk = false;
}, 400);
}
}
});

