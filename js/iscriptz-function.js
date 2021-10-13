function courtlink(){  window.top.location.href = localStorage['courtlink']; }



function editbck() { window.history.back(); }



function associates(){ window.top.location.href = "associates.html"; }

function jumpindex(){
                        localStorage['mySettings']=""; 
                        window.top.location.href = "index.html"; 
                    }

//function jumplogin(){ window.top.location.href = "camera.html"; }
function jumplogin(){ 
                     window.top.location.href = "form.html";  
                    }

function jumpregister(){ window.top.location.href = "signup.html"; }

function favourites(){  window.top.location.href = "favorites.html";}


function requestssend() {   window.parent.location.href = "forum.html";  }
function requestsrecieved() {   window.parent.location.href = "requests-recieved.html"; }
function requestsalll() {   window.parent.location.href = "requests-all.html";  }
function closeby() {   window.top.location.href = 'courts-list.html?'+localStorage['courtassociate'];  }


function calloutlink() {   window.parent.location.href = "load-callout.html";  }
function forumlink() {   window.parent.location.href = "forum.html"; }


function calloutlatest() {   window.parent.location.href = "callout.html"; }
function calloutmostviewed() {   window.parent.location.href = "callout-mostviewed.html"; }
function callouthighestrank() {   window.parent.location.href = "callout-highestrank.html"; }

//?dir='+localStorage['thecat']+'&sort='+localStorage['sort'];
function calloutcatlatest() {   window.parent.location.href = 'callout-cat.html?dir='+localStorage['thecat']+'&sort=latest'; }
function calloutcatmostviewed() {   window.parent.location.href = 'callout-cat-mostviewed.html?dir='+localStorage['thecat']+'&sort=mostviewed'; }
function calloutcathighestrank() {   window.parent.location.href = 'callout-cat-highestrank.html?dir='+localStorage['thecat']+'&sort=highestrank'; }

function forumlatest() {   window.parent.location.href = "forum.html"; }

function forumconver(forumid) {   
window.parent.location.href = "forum-conversation.html?id="+forumid;
}


function goBack() {
    window.history.back();
}


function jumptocreate(){
    
	$( "#myPopupDivLOAD" ).popup( "open" );
	setInterval(function(){window.parent.location.href = "create.html"; }, 8500);
	
}




function jumptosignin(){
    
	$( "#myPopupDivLOAD" ).popup( "open" );
	setInterval(function(){window.parent.location.href = "signup.html"; }, 7000);
	
}



function jumptosettings(){
    
	$( "#myPopupDivLOAD" ).popup( "open" );
	setInterval(function(){window.parent.location.href = "settings.html"; }, 7000);
	
	
}


