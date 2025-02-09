(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown({
//      inDuration: 300,
//      outDuration: 225,
     constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'center', // Displays dropdown with edge aligned to the left of button
//      stopPropagation: false // Stops event propagation
    });
    $('.collapsible').collapsible();
        document.getElementById('wrapper').onclick = function() {

        var className = ' ' + wrapper.className + ' ';

        this.className = ~className.indexOf(' active ') ?
                             className.replace(' active ', ' ') :
                             this.className + ' active';
    };

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    //   format: 'yyyy-dd-mm'
    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
