var num = document.querySelectorAll(".drum").length;
for( i = 0 ; i < num;i++){
     
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function had(){

        var butinner = this.innerHTML;

        switch (butinner) {
            case "w":
             var tom1 = new Audio('Sounds/tom-1.mp3');
             tom1.play();
        
    
                break;
                case "a":
                    var tom2 = new Audio('Sounds/tom-2.mp3');
                    tom2.play();
               break;
               case "s":
                var tom3= new Audio('Sounds/tom-3.mp3');
                tom3.play();
           break;
           case "d":
            var tom4 = new Audio('Sounds/tom-4.mp3');
            tom4.play();
       break;
       case "j":
        var jj = new Audio('Sounds/snare.mp3');
        jj.play();
    break;
    case "k":
        var kk = new Audio('Sounds/kick-bass.mp3');
        kk.play();
    break;

    case "l":
        var ll = new Audio('Sounds/crash.mp3');
        ll.play();
    break;
            default:
                break;
        }
    



    });
    


}





