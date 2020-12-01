const fs = require("fs");
const path = require("path");
const process = require('process');
const { PDFDocument } = require("pdf-lib");
const { Command, flags } = require("@oclif/command");

class SplitCommand extends Command {
  static flags = {
    file: flags.string({
      char: "f",
      required: true,
      description: "path to pdf",
    }),
  };

  static description = `Splits a pdf
  By default each page will end up as a separate PDF
  `;

  async run() {
    const { flags } = this.parse(SplitCommand);
    let file = flags.file;

    if(!path.isAbsolute(file)) {
      file = path.join(process.cwd(), file)
      file = path.resolve(file)
    }

    this.log(`Loading PDF file from: ${file}`);

    // Load the pdf
    const srcDoc = await PDFDocument.load(fs.readFileSync(file));
    const numberOfPages = srcDoc.getPages().length;

    this.log(`Number of pages: ${numberOfPages}`);

    for (let i = 0; i < numberOfPages; i++) {
      // Create a new document
      const doc = await PDFDocument.create();

      // Add current page to the new doc
      const [page] = await doc.copyPages(srcDoc, [i]);
      doc.addPage(page);

      // Write the PDF to a file
      const pageFileName = `${file.slice(0, -4)}.${i}.pdf`;
      fs.writeFileSync(pageFileName, await doc.save());
    }
  }
}

module.exports = SplitCommand;
