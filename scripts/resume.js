function PDFDisabled() {
    if (navigator.pdfViewerEnabled) return;
    document.getElementById("PDFOff").style.display = "";
    document.getElementById("PDFOn").style.display = "none";
}