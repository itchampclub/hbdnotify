function doGet(e) {
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Lg87Gew_Q9PkTQSvUICCKxINCKH0B833byBvcQtcFaY/edit"); //แก้ sheet url เป็นของตัวเอง
  var sheet = ss.getSheetByName("แผ่น1"); //แก้ sheet name เป็นของตัวเอง
  var todaydate = Utilities.formatDate(new Date(), "GMT+7", "dd/MM")
  var todaydatez = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy")
  var notidate = sheet.getRange(2,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();
  var Name = ["-","-","-","-","-","-","-","-","-","-"]
  var Count = 0;  
    for(var i = 0;i<notidate.length; i++){
         if(notidate[i][0] == todaydate){
   Name[Count] = sheet.getRange(i+2,2).getValue();
           var found = true;
      Count = Count+1; 
      if (Name[0] == "-"){var zz = ""}else{var zz = "\nคุณ "+Name[0];}
      if (Name[1] == "-"){var aa = ""}else{var aa = "\nคุณ "+Name[1];}
      if (Name[2] == "-"){var bb = ""}else{var bb = "\nคุณ "+Name[2];}
      if (Name[3] == "-"){var cc = ""}else{var cc = "\nคุณ "+Name[3];}
      if (Name[4] == "-"){var dd = ""}else{var dd = "\nคุณ "+Name[4];}
      if (Name[5] == "-"){var ee = ""}else{var ee = "\nคุณ "+Name[5];}
      if (Name[6] == "-"){var ff = ""}else{var ff = "\nคุณ "+Name[6];}
      if (Name[7] == "-"){var gg = ""}else{var gg = "\nคุณ "+Name[7];}
      if (Name[8] == "-"){var hh = ""}else{var hh = "\nคุณ "+Name[8];}
      if (Name[9] == "-"){var ii = ""}else{var ii = "\nคุณ "+Name[9];}   

           
  var options = {
  'method' : 'post',
  'contentType': 'application/x-www-form-urlencoded',
  'headers':{'Authorization': 'Bearer 5hQw5cxTYO7XfdEWvE8LoiPVkI2n8N2u0QQKxrjGAyn'}, //แก้ 5hQw5cxTYO7XfdEWvE8LoiPVkI2n8N2u0QQKxrjGAyn เป็น notify token ของตัวเอง
  'payload' : {'message': todaydatez+"\nHappy Birth Day"+zz+aa+bb+cc+dd+ee+ff+gg+hh+ii}
};
  }
  }
        if(found){
      UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
      }  
  }
