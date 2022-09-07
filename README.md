# zplimpress
Aplicação em node.js para ler codigo em zpl passar para pdf e imprimir apenas arrastando arquivo de texto para uma pasta.

### Script utiliza node.js, [chokidar]("https://www.npmjs.com/package/chokidar") , [pdf-to-printer]("https://www.npmjs.com/package/pdf-to-printer") , [fs](https://www.npmjs.com/package/fs)

### Problema solucionado pela Aplicação 
Poupar tempo na impressão de múltiplas etiquetas, e se vinculado ao one drive poder colocar essas etiquetas para impressão de qualquer lugar com internet.


#### Step by Step
1- Clone a aplicação no seu computador

1.1- Instale as dependências com npm install

2- Descomente a função getPrinters()

2.2- execute essa função
Tipo de log esperado: 
![saida função getPrintes](https://user-images.githubusercontent.com/92334954/188767186-0a59f500-ffbd-4c65-bd4d-894b12af8304.png)

2.3- copie o deviceId de sua impressora termica

2.4- Substitua onde está printer pelo deviceId de sua impressora

![pinter settings](https://user-images.githubusercontent.com/92334954/188766543-8402220d-e926-4c37-9580-6a0b2e631e10.png)

2.5-Comente a função getPrinters()

3-Execute npm start

4-Adicione um arquivo de texto escrito em linguagem zpl à pasta etiquetas

5-Assista à mágica da impressão
