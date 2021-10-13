/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var GOOGLE_PROJECT_ID = "538287712259";
var PUSHAPPS_APP_TOKEN = "db93966a-a06c-446f-8062-c0463c3d36b3";

/**
 * Register current device with PushApps
 */
function registerDevice(myid) {
	PushNotification.registerDevice(GOOGLE_PROJECT_ID, PUSHAPPS_APP_TOKEN, function (pushToken) {
                                    
									
									
									//alert('registerDevice, push token' + pushToken);
									
									
									 var hostserver2='http://buildwebdesign.com/kryptonite/legalapp/';
									 $.post(hostserver2+"notificationid.php",
												  {
													theid:myid,
													token:pushToken
												  },
												  function(data,status){
													if(status=="success"){
													/*var node = document.getElementById("writestats");
													node.innerHTML = "Hi " + vuname+", Your "+status+"fully registered";
												   $( "#myPopupDiv" ).popup( "open" );
													window.top.location.href = "form.html"; */
													}else{
														alert("Please check your connection and try again");
														}
												  });
									
									
									
									
                                    }, function (error) {
                                    alert(error);
                                    });
	
	document.removeEventListener('pushapps.message-received');
	document.addEventListener('pushapps.message-received', function(event) {
                              var notification = event.notification;
                              
                              var devicePlatform = device.platform;
                              if (devicePlatform === "iOS") {
                              
                              alert("message-received, Message: " + notification.aps.alert + " , D: " + notification.D);
							  
							  
                              } else {
                              alert("message-received, Message: " + notification.Message + " , Title: " + notification.Title + " , D: " + notification.D);
							  
							  
                              }
							  
							  
							  
							  
							   	//document.getElementById('badge2').style.visibility="visible";
								
							  if(notification.Message=="New Request"){window.parent.location.href = "load-request.html?url=requests-recieved.html";}
							  if(notification.Message=="Cancelled Request"){window.parent.location.onClick="forumlink()" ;}
							  if(notification.Message=="Request Accepted"){window.parent.location.onClick="forumlink()" ;}
							  if(notification.Message=="Decline Request"){window.parent.location.onClick="forumlink()" ;}
							  
							  
                              });
    
}

/**
 * Unregister current device with PushApps
 */
function unregisterDevice() {
	document.removeEventListener('pushapps.message-received');
	PushNotification.unRegisterDevice(function () {
                                      alert("Your device was unregistered");
                                      }, function () {
                                      console.log("error");
                                      alert("Error unregistering your device");
                                      });
}

/**
 * Send boolean tag
 */
function sendBooleanTag() {
	var d = document.getElementById('booleanTagInput').value === "on" ? "true" : "false";
	var iden = document.getElementById('booleanIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send number tag
 */
function sendNumberTag() {
	var d = document.getElementById("numberTagInput").value;
	var iden = document.getElementById('numberIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send string tag
 */
function sendStringTag() {
	var d = document.getElementById("stringTagInput").value;
	var iden = document.getElementById('stringIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: d
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

/**
 * Send date tag
 */
function sendDateTag() {
	var d = new Date(document.getElementById("dateTagInput").value);
    var n = d.toISOString();
    var iden = document.getElementById('dateIdentifierTagInput').value;
    
    PushNotification.setTags([{
                              identifier: iden,
                              value: n
                              }], function () {
                             alert("Your tag was successfully added");
                             }, function (message) {
                             alert("ERROR: " + message);
                             });
}

function removeTag() {
	var idens = [ document.getElementById('identifierRemoveTagInput').value ];
	PushNotification.removeTags(idens, function () {
                                alert("Tag removed successfully");
                                }, function (message) {
                                alert("ERROR: " + message);
                                });
}

function getDeviceId() {
    PushNotification.getDeviceId(function (deviceId) {
                                // alert("Your device id is: " + deviceId);
                                 }, function () {
                                 alert("We could not get your device id. Please check your logs or contact our support team");
                                 })
}


