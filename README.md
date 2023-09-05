# ggsheet-getdata

![Logo](https://i.ibb.co/3BHdkPT/Capture.png)


ไฟล์ Index.html
แก้ไข line 84

        var url = "https://script.google.com/macros/s/AKfycbxO_ELDR28avmbnmW7ZOsH-b4Kw1HN9SHofyP5YeMvgexliwXpPKy6YemQDmGdyh36M/exec";
        
       * แทนที่ด้วย web app url ของท่านเอง


ไฟล์ code.gs
แก้ไข line 1-2

        var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1CXD1DD3vcvUKOGJR5rXpKPEPbaghiKxIRGmorE3dkAc/edit#gid=586389379");
        var sheet = ss.getSheetByName("data");
        
       * แทนที่ด้วย sheet url, sheet name ของท่านเอง

![Logo](https://i.ibb.co/LC4FGDt/Capture.png)


        
