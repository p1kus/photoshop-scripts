// target photoshop

if (app.documents.length > 0) {
  var doc = app.activeDocument;

  function saveToPNG(filePath) {
    var pngOptions = new PNGSaveOptions();
    doc.saveAs(new File(filePath), pngOptions, true);
  };
  function saveToPDF(filePath) {
    var pdfOptions = new PDFSaveOptions();
    doc.saveAs(new File(filePath), pdfOptions, true);
    alert("PDF")
  };
  var path = doc.path;
  var fileName = doc.name.replace(/\.[^\.]+$/, "");

  saveToPNG(path + "/" + fileName + "_original");
  saveToPDF(path + "/" + fileName + "_original");

  doc.flipCanvas(Direction.HORIZONTAL);

  saveToPNG(path + "/" + fileName + "_flipped");
  saveToPDF(path + "/" + fileName + "_flipped");
} else {
  alert("No open document");
}
