const pdfToExcelGenerator = require('pdf-to-excel')
try {
    pdfToExcelGenerator.genXlsx('./pdf/sample.pdf', './output/converted2.xlsx');
} catch (error) {
    console.log(error)
}