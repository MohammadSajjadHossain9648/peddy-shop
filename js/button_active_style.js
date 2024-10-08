// Set the inactive button styles
function inactiveStyle() {
    document.getElementById("btn_1").classList.add("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
    document.getElementById("btn_2").classList.add("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
    document.getElementById("btn_3").classList.add("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
    document.getElementById("btn_4").classList.add("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
    document.getElementById("btn_1").classList.remove("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    document.getElementById("btn_2").classList.remove("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    document.getElementById("btn_3").classList.remove("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    document.getElementById("btn_4").classList.remove("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
}
function activeButtonStyle(buttonId){
    // Set the inactive button styles
    inactiveStyle();

    // Set the active button styles
    if(buttonId === 1){
        document.getElementById("btn_1").classList.remove("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
        document.getElementById("btn_1").classList.add("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    }
    if(buttonId === 2){
        document.getElementById("btn_2").classList.remove("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
        document.getElementById("btn_2").classList.add("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    }
    else if(buttonId === 3){
        document.getElementById("btn_3").classList.remove("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
        document.getElementById("btn_3").classList.add("rounded-full", "border-1.5", "border-green_color", "bg-green_bg_color");
    }
    else if(buttonId === 4){
        document.getElementById("btn_4").classList.remove("border-green_border_color", "bg-white_color", "rounded-xl", "hover:border-green_color", "hover:bg-green_bg_color");
        document.getElementById("btn_4").classList.add("rounded-full", "border-1.5", "focus:border-green_color", "bg-green_bg_color");
    }
}