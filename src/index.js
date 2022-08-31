const fsp = require('fs').promises;
const fs = require('fs');
const request =  require('request');
const ptp = require("pdf-to-printer");

const { join } = require('path');

var chokidar = require('chokidar');
//path local onde será salvo as etiquetas
const directoryPath = join(__dirname, '\etiquetas');
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
    etiqueta = await fsp.readFile(path,'utf-8')

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
      await fsp.writeFile('label.pdf', body, (err) => {
        if (err) {
            console.log(err);
        }
    })
    try {
      await ptp.print("./label.pdf", settings)
    } catch (err) {
      console.log(err);
    }
    });
  }
});

