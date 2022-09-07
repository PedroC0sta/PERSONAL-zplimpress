const fs = require('fs').promises;
const request =  require('request');
const ptp = require("pdf-to-printer");

// ptp.getPrinters().then((response) => console.log(response))

var chokidar = require('chokidar');
// Opções da impressora
const settings = {
  printer: "CC410Label Printer",
  unix: ["-o fit-to-page"],
  win32: ['-print-settings "fit"']
};



//watch verifica se a pasta com as etiquetas teve algum arquivo adicionado
chokidar.watch('./etiquetas').on('all', async (event, path) => {
  let etiqueta;
  if(event === 'add') {
    etiqueta = await fs.readFile(path,'utf-8')

    //Opções da request API zpl labelary
    const options = {
      encoding: null,
      formData: {file: etiqueta},
      headers: { 'Accept': 'application/pdf' },
      //url para varias etiquetas com index omitido
      url: 'http://api.labelary.com/v1/printers/8dpmm/labels/4x6/'
    }
    request.post(options, async (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      await fs.writeFile('label.pdf', body, (err) => {
        if (err) {
            console.log(err);
        }
    })
    try {
      await ptp.print("./label.pdf", settings)
      await fs.unlink(path);
    } catch (err) {
      console.log(err);
    }
    });
  }
});

