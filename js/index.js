document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  VARIABLES

   
    //>  ████████████████████████████████████  LISTENERS

  

    //>  ████████████████████████████████████  FUNCTIONS

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        console.log(rgbColor);
        return rgbColor;
    }


    //>  ████████████████████████████████████  PROGRAM



    document.body.style.backgroundColor = getBrightRandomRGB();

    //< ████████████████████████████████████  MISC

})

