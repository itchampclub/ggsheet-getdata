var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1CXD1DD3vcvUKOGJR5rXpKPEPbaghiKxIRGmorE3dkAc/edit#gid=586389379");
var sheet = ss.getSheetByName("data");



function doGet(e) {
  var userId = e.parameter.uuid;

  if(e.parameter.hasOwnProperty('uuid')){

  var udatacol = []

            var uid = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
                for(var i = 0;i<uid.length; i++){
                   if(userId == uid[i][0]){
                    var uuidfound = true
                     var col1 = sheet.getRange(i+2,1).getValue(); 
                     var col2 = sheet.getRange(i+2,2).getValue(); 
                     var col3 = sheet.getRange(i+2,3).getValue();
                     var col4 = sheet.getRange(i+2,4).getValue();
                     var col5 = sheet.getRange(i+2,5).getValue();
                     var col6 = sheet.getRange(i+2,6).getValue();
                     var col7 = sheet.getRange(i+2,7).getValue();
                     udatacol.push(
                       {
                         "col1": col1,
                         "col2": col2,
                         "col3": col3,
                         "col4": col4,
                         "col5": col5,
                         "col6": col6,
                         "col7": col7
                           }
                           )


                   }

                }

if(uuidfound){
  return ContentService.createTextOutput(JSON.stringify(udatacol) ).setMimeType(ContentService.MimeType.JSON); 
}else{
  return ContentService.createTextOutput(JSON.stringify([
    {"col1": "ไม่พบข้อมูล",
    "col2": "ไม่พบข้อมูล",
    "col3": "ไม่พบข้อมูล",
    "col4": "ไม่พบข้อมูล",
    "col5": "ไม่พบข้อมูล",
    "col6": "ไม่พบข้อมูล",
    "col7": "ไม่พบข้อมูล",
  }]) ).setMimeType(ContentService.MimeType.JSON); 
}




  }else{
  return HtmlService.createHtmlOutputFromFile('Index');
  }
}




