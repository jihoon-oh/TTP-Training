/*
	http://jqueryasp.net/validate-mmddyyyy-mm-dd-yyyy-format-using-jquery/
*/
$(function() {
    $('#btnSubmit').bind('click', function(){
        var txtVal =  $('#txtDate').val();
        if(isDate(txtVal))
            alert('Valid Date');
        else
            alert('Invalid Date');
    });
    
function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

$('#submit').bind('click', function(){
		var txtUsnm = $('#txtUsername').val();
		var txtPswd = $('#txtPassword').val();
        if(txtUsnm == ''){
            alert('Invalid Username');
        } else {
        	alert('Valid Username');
        }
        if(txtPswd === '12345'){
        	alert('Valid Password');
        } else{
        	alert('Invalid Password');
        }


});

});