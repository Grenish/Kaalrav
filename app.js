function chaneOpacity(){
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").className = "nav";
    } else {
        document.getElementById("navbar").className = "";
    }
}