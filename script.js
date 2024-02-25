function changeBackground() {
    inputs = document.getElementsByTagName("input");
    numSelected = 0;
    rVal = 0;
    gVal = 0;
    bVal = 0;
    for (var i = 0; i < inputs.length; i++) {
       if (inputs[i].type == "checkbox") {
          if (inputs[i].checked) {
             numSelected++;
             colorValue = inputs[i].value;
             rgb = colorValue.substring(4, colorValue.length - 1)
                .replace(/ /g, '')
                .split(',');
             rVal += Number(rgb[0]);
             gVal += Number(rgb[1]);
             bVal += Number(rgb[2]);
          }
       }
    }
    if (numSelected == 0) {
        numSelected = 1 // Avoid division by 0.
        // Make background white
        rVal = 255;
        gVal = 255;
        bVal = 255;
    }
    document.body.style.background = "rgb(" + rVal / numSelected + "," + gVal / numSelected + "," + bVal / numSelected + ")";
 }