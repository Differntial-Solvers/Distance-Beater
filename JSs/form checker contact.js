    function form_sub_contact() {

       if( document.myForm.firstname.value == "" ) {
          alert( "Please provide your first name!" );
          document.myForm.firstname.focus() ;
          return false;
       }
       if( document.myForm.lastname.value == "" ) {
          alert( "Please provide your last name!" );
          document.myForm.lastname.focus() ;
          return false;
       }
       if( document.myForm.email.value == "" ) {
          alert( "Please provide your Email!" );
          document.myForm.email.focus() ;
          return false;
       }
       if( document.myForm.subject.value == "" ) {
          alert( "Please provide your subject!" );
          document.myForm.subject.focus() ;
          return false;
       }
       var sub_length = document.myForm.subject.value
       if( sub_length.length == "1" ) {
          alert( "Please provide a correct subject!" );
          document.myForm.subject.focus() ;
          return false;
       }
       var emailID = document.myForm.email.value;
       atpos = emailID.indexOf("@");
       dotpos = emailID.lastIndexOf(".");

       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct email ID")
          document.myForm.email.focus() ;
          return false;
       }
       alert("thank you " + document.myForm.firstname.value + " for filling the form")

       return( true );
    }
