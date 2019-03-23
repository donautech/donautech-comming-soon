(function($) {
  "use strict"; // Start of use strict

  // No JS
    var i = 0;
    var txt = 'Software engineering without corruption, underpayment and misunderstandings';
    var speed = 50;

    function printCredo() {
        if (i < txt.length) {
            document.getElementById("mb-5").innerHTML += txt.charAt(i);
            i++;
            setTimeout(printCredo, speed);
        }
    }

    printCredo()

})(jQuery); // End of use strict
