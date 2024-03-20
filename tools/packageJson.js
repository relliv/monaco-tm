import fs from 'fs';
import path from 'path';

const fileName = '../package.json';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  const file = JSON.parse(data);
  const args = process.argv.slice(2);

  for (let i = 0, l = args.length; i < l; i++) {
    if (i % 2 === 0) {
      file[args[i]] = args[i + 1];
    }
  }

  fs.writeFile(
    path.join(__dirname, fileName),
    JSON.stringify(file, null, 2),
    (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`Writing to ${fileName}`);
    }
  );
});
