  function form_sub_rating() {
    
    if( document.Form.design.value == "-1" ) {
         alert( "Please provide your design rating!" );
         return false;
      }
    if( document.Form.content.value == "-1" ) {
         alert( "Please provide your content rating!" );
         return false;
      }
      if( document.Form.simulations.value == "-1" ) {
         alert( "Please provide your simulations rating!" );
         return false;
      }
      if( document.Form.subject.value == "" ) {
         alert( "Please provide your feedback!" );
         return false;
       }
      alert("thank you for filling the form")
      return( true );
        }
