import { copy } from 'fs-extra';

copy('./grammars', './dist/grammars', err => {
    if (err) return console.error(err);
});

copy('./configurations', './dist/configurations', err => {
    if (err) return console.error(err);
});
  