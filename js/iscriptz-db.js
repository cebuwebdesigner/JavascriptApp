function onDeviceReady() { 



 persistData(data1, data2, data3);
		

}



/* IMPORTANT! for increased security, add form validation (not used on this page). 
Perhaps get it from: http://rickharrison.github.io/validate.js/ */

// set form field input

function persistData(data1, data2, data3) {

// get form entries
// var form = document.getElementById("userInput"); 
 var formdata1 = localStorage['myID'];
 var formdata2 = localStorage['myID2'];
 var formdata3 = localStorage['mySettings'];
// set value if input was blank
 if (formdata1 === "undefined") { formdata1 = "" }; 
 if (formdata2 === "undefined") { formdata2 = "" };
 if (formdata3 === "undefined") { formdata3 = "" };
// check form entries on console
 console.log("data1 = " + formdata1); 
 console.log("data2 = " + formdata2);
 console.log("data3 = " + formdata3);
// key, value pair into localStorage
 localStorage.setItem('formdata1Set', formdata1); 
 localStorage.setItem('formdata2Set', formdata2); 
 localStorage.setItem('formdata3Set', formdata3);
// set the current time as the id to make it unique id
 var d = new Date();
 var new_id = d.getTime();
 localStorage.setItem('new_idSet', new_id);
// proceed to next function
 startDB(); 
}

function startDB() {

 var db = window.openDatabase("Database", "1.0", "STUMBLEAPP", 2000000);
 db.transaction(populateDB, errorCB, successCB);
}

// Form the query

function populateDB(tx) {
 var formdata1Get  = localStorage['myID']; // get data from localStorage
 var formdata2Get = localStorage['myID2'];
 var formdata3Get = localStorage['mySettings'];
 var new_idGet = localStorage.getItem('new_idSet');
// if no data has been entered, show note and stop the process
 if (formdata1Get.length < 1 && formdata2Get.length < 1 && formdata3Get.length < 1) { 
 document.getElementById("output").innerHTML = "\nPLEASE ENTER DATA"; return false; 
 }
 tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id TEXT NOT NULL, data1 TEXT NULL, data2 TEXT NULL, data3 TEXT NULL)'); 


if(localStorage['mySettings']!=""){ //alert('formdata1');
tx.executeSql('INSERT INTO DEMO (id, data1, data2, data3) VALUES (\"' + new_idGet + '\"' + ', \"' + formdata1Get + '\", \"' + formdata2Get + '\", \"' + formdata3Get + '\")'); }


 queryDB(tx);
}

// Execute the query, grabbing all the data

function queryDB(tx) {
 tx.executeSql("SELECT * FROM DEMO", [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
 var len = results.rows.length;
 console.log("Returned rows = " + results.rows.length);
// set output, output2 to blank so values are not appended to previous values

// loop through rows as many times as there are row results
var documentHTML='';
 for (var i = 0; i < len; i++) { 
 var rowid = results.rows.item(i).id;
// Display the query results within <textarea id="output"></textarea>
if(rowid!=""){
documentHTML += "\nID = " + results.rows.item(i).id +
 "\ndata1 = " + results.rows.item(i).data1 +
 "\ndata2 = " + results.rows.item(i).data2 +
 "\ndata3 = " + results.rows.item(i).data3 + "\n";
}
// Display the query results as a table within <div id="output2"></div>

 console.log("rowid = " + rowid); 
 }
 localStorage['dbstored'] = documentHTML;
// alert(localStorage['dbstored']);

localStorage['myID'] = results.rows.item(i).data1;
localStorage['myID2'] = results.rows.item(i).data2;
localStorage['mySettings'] = results.rows.item(i).data3;

// reset form input fields to blank
}

// Show DB onload (next two functions)

function showDB(tx) {
 var db = window.openDatabase("Database", "1.0", "STUMBLEAPP", 2000000);
 db.transaction(createDB, errorCB, successCB);
}
function createDB(tx) {
 tx.executeSql("SELECT * FROM DEMO", [], querySuccess, errorCB);
}

// Delete a row in the DB from button

function delRecord(rowid) {
 var db = window.openDatabase("Database", "1.0", "STUMBLEAPP", 2000000);
 db.transaction(
 function (tx) {
 tx.executeSql("DELETE FROM demo WHERE id = ?", [rowid]);
 }
 ); 

 location.reload(false); // refresh page to show changes
}

// Transaction success callback

function successCB() {
 console.log("_______ Success! _______");
}

// Transaction error callback

function errorCB(err) {
 if (err.code == "0") {
 console.log("0 - UNKNOWN_ERR: The transaction failed for reasons unrelated to the database itself and not covered by any other error code.");
 }
 if (err.code == "1") {
 console.log("1 - DATABASE_ERR: The statement failed for database reasons not covered by any other error code.");
 }
 if (err.code == "2") {
 console.log("2 - VERSION_ERR: The operation failed because the actual database version was not what it should be. For example, a statement found that the actual database version no longer matched the expected version of the Database or DatabaseSync object, or the Database.changeVersion() or DatabaseSync.changeVersion() methods were passed a version that doesn't match the actual database version.");
 }
 if (err.code == "3") {
 console.log("3 - TOO_LARGE_ERR: The statement failed because the data returned from the database was too large. The SQL 'LIMIT' modifier might be useful to reduce the size of the result set.");
 }
 if (err.code == "4") {
 console.log("4 - QUOTA_ERR: The statement failed because there was not enough remaining storage space, or the storage quota was reached and the user declined to give more space to the database.");
 }
 if (err.code == "5") {
 console.log("5 - SYNTAX_ERR: The statement failed because of a syntax error, or the number of arguments did not match the number of ? placeholders in the statement, or the statement tried to use a statement that is not allowed, such as BEGIN, COMMIT, or ROLLBACK, or the statement tried to use a verb that could modify the database but the transaction was read-only.");
 }
 if (err.code == "6") {
 console.log("6 - CONSTRAINT_ERR: An INSERT, UPDATE, or REPLACE statement failed due to a constraint failure. For example, because a row was being inserted and the value given for the primary key column duplicated the value of an existing row.");
 }
 if (err.code == "7") {
 console.log("7 - TIMEOUT_ERR: A lock for the transaction could not be obtained in a reasonable time.");
 }
}


// "drop (delete) database" sequence, next two functions

function dropDb() {
// erase localStorage
 window.localStorage.clear();
// erase form fields
 var form = document.getElementById("userInput"); 
 form.data1.value = "";
 form.data2.value = "";
 form.data3.value = "";
// document.getElementById("output").innerHTML = "";
 //document.getElementById("output2").innerHTML = "";
// start the "drop database" sequence
 var db = window.openDatabase("Database", "1.0", "STUMBLEAPP", 2000000);
 db.transaction(dropDatabase, errorCB, successCB);
}
function dropDatabase(tx) {
 tx.executeSql('DROP TABLE IF EXISTS DEMO');
 console.log("_______ Table Dropped! _______");
}

// Show the DB contents on page load
showDB();
//dropDb();
if(localStorage['mySettings']!=""){ 
persistData();}

