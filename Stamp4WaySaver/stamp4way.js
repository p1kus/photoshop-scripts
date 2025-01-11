// target photoshop

if (app.documents.length > 0) {
  let doc = app.activeDocument;
  app.documents.saveAs();

  const saveToPNG = () => {
    let pngOptions = new PNGSaveOptions();
    doc.saveAs(new File(filePath), pngOptions, true);
  };
  const saveToPDF = () => {
    let pdfOptions = new PDFSaveOptions();
    doc.saveAs(new File(filePath), pdfOptions, true);
  };
  let path = doc.path();
  let fileName = doc.name.replace(/\.[^\.]+$/, "");

  doc.saveToPNG(path + "/" + fileName + "_original");
  doc.saveToPDF(path + "/" + fileName + "_original");

  doc.flipHorizontal();

  doc.saveToPNG(path + "/" + fileName + "_flipped");
  doc.saveToPDF(path + "/" + fileName + "_flipped");
} else {
  alert("No open document");
}
