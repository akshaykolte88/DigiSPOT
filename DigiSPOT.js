
console.log("DIGISPOT")
newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(newScript);

newLink = document.createElement('link');
newLink.rel = 'stylesheet';
newLink.href = 'https://drive.google.com/file/d/0B818st1wl1YpRTVZMEFkWXJUZUE/view?usp=sharing';
document.getElementsByTagName('head')[0].appendChild(newLink);

 function showblock() {
 var span = document.getElementsByClassName("close")[0];
var iDiv = document.createElement('div');
iDiv.id = 'myModal';
iDiv.className = 'modal';
document.getElementsByTagName('body')[0].appendChild(iDiv);
 
 var innerDiv1 = document.createElement('div');
innerDiv1.className = 'modal-content';
 iDiv.appendChild(innerDiv1);
 //var modal = document.getElementById('myModal');
 
  var innerDiv2 = document.createElement('div');
innerDiv2.className = 'modal-header';

 innerDiv1.appendChild(innerDiv2);
 
//https://drive.google.com/open?id=0B818st1wl1YpdDVmN0hKVHBJdGs
   var innerSpan1 = document.createElement('span');
   innerSpan1.className = 'close';
   innerSpan1.textContent="×";
   onclick="close_modal()";
   innerDiv2.appendChild(innerSpan1);
 
   var innerH1 = document.createElement('h2');
   innerH1.textContent="MODAL HEADER";
   innerDiv2.appendChild(innerH1);
   
   var innerDiv3 = document.createElement('div');
   innerDiv3.className = 'modal-body';
   innerDiv1.appendChild(innerDiv3);
 
   var innerP1 = document.createElement('P');
   innerP1.textContent="CREOCIS";
   innerDiv3.appendChild(innerP1);
   

 
   var innerDiv4 = document.createElement('div');
   innerDiv4.className = 'modal-footer';
   innerDiv1.appendChild(innerDiv4);

   var innerH3 = document.createElement('h3');
   innerH3.textContent="Modal Footer";
   innerDiv4.appendChild(innerH3);

	var input_name = document.createElement("input");
	input_name.setAttribute('type', 'text');
	input_name.setAttribute('placeholder', 'Name');
	input_name.setAttribute('id', 'id_name');
    innerDiv3.appendChild(input_name);
	
	var input_email = document.createElement("input");
	input_email.setAttribute('type', 'text');
	input_email.setAttribute('placeholder', 'Email');   
	input_email.setAttribute('id', 'id_email');   
	innerDiv3.appendChild(input_email);
	
	var input_contact = document.createElement("input");
	input_contact.setAttribute('type', 'text');
	input_contact.setAttribute('placeholder', 'Contact');
	input_contact.setAttribute('id', 'id_contact'); 	
    innerDiv3.appendChild(input_contact);
	
	var button_save = document.createElement("input");
	button_save.setAttribute('type', 'button');
    button_save.setAttribute('value', 'Submit');
	button_save.setAttribute('onclick', 'submit_data()');
    innerDiv3.appendChild(button_save);
   
   iDiv.style.display = "block";
   
}

function submit_data()
{
	var name = document.getElementById("id_name").value;
	var email = document.getElementById("id_email").value;
	var contact = document.getElementById("id_contact").value;
	     		   $.ajax({
				url: "http://52.33.173.120/digileads/1.7/DigiSPOT/api/leads/",
				type: "POST",
				data: {"full_name": name,"contact_number": contact,"address":email,"code": "man-789789"},
				
				success: function(data,textStatus, request)
				{
				console.log(request.status);
		
					
				 		  },
				 		error: function(data){
						//console.log(data);
				 		}
			});
 alert(name+email+contact);
}
function close_modal()
{
 modal.style.display = "none";
}
