function loadit(){
			
// var hostserver= localStorage['globalurl'];
//var hostserver='http://buildwebdesign.com/kryptonite/legalapp/';  
/* call the php that has the php array which is json_encoded */
                $.getJSON(hostserver+'log.php?email='+vname+'&pass='+vpass, function(data) {
                        /* data will hold the php array as a javascript object */
						var incinfo=0; var arraydata='';
                        $.each(data, function(key, val) {
                                //$('#data'+incinfo).append(val.first_name);
								
								//arraydata=arraydata+','+val.theid
								if(val.first_name!=""){
								arraydata=val.first_name+','+val.theid;
	arraysettings = val.firm+','+val.email+','+val.gps+','+val.whocansee+','+val.location; 
								}
								
								incinfo++;
								
                        });
					globalX = incinfo;
					if(arraydata==""){arraydata='not valid access';}
					arraydataX = arraydata;
					arraydataZ = arraysettings;
					
					dataReady();
                });
        };
		
	loadit();	