//ADDING ANIMATIONS TO "O NAMA" PART
$(document).ready(function (){
    $(".oNama").waypoint(function(direction){
        $(".ONBox1").addClass('animate__animated animate__backInLeft');
    },{
        offset:'50%'
    });
})

$(document).ready(function (){
    $(".oNama").waypoint(function(direction){
        $(".ONBox2").addClass('animate__animated animate__backInRight');
    },{
        offset:'50%'
    });
})

//ADDING ANIMATIONS TO "LOKACIJA" PART
$(document).ready(function (){
    $(".lokacija").waypoint(function(direction){
        $(".lokacijaBox1").addClass('animate__animated animate__backInLeft');
    },{
        offset:'50%'
    });
})

$(document).ready(function (){
    $(".lokacija").waypoint(function(direction){
        $(".lokacijaBox2").addClass('animate__animated animate__backInRight');
    },{
        offset:'50%'
    });
})

//ADDING ANIMATIONS TO "UPRAVA I ČLANOVI" PART
$(document).ready(function (){
    $(".clanovi").waypoint(function(direction){
        $(".clanoviBox").addClass('animate__animated animate__fadeInUp');
    },{
        offset:'50%'
    });
})














































































