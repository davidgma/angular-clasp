function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }
  
  function getPortfolioDetails() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName("Stocks");
    var data = sheet.getDataRange().getValues();
    var ret = "";
    for (var i = 1; i < data.length; i++) {
      ret += "(";
      for (var j = 0; j < 13; j++) {
        if (j != 0)
          ret += ",";
        ret += "'" + (data[i][j]).toString().replace("'", "") + "'";
      }
      
      ret += ") ";
      if (i < (data.length - 1))
        ret += ",";
      
    }
    console.log(ret);
    return ret;
  }
  