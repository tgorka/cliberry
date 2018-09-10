#!/usr/bin/env node
'use strict';

/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry/LICENSE
 */
// Provide a title to the process in `ps`.
// Due to an obscure Mac bug, do not start this title with any symbol.
try {
  process.title = 'cliberry ' + Array.from(process.argv).slice(2).join(' ');
} catch(_) {
  // If an error happened above, use the most basic title.
  process.title = 'cliberry';
}

// Some older versions of Node do not support let or const.
var version = process.version.substr(1).split('.');
if (Number(version[0]) < 8 || (Number(version[0]) === 8 && Number(version[1]) < 9)) {
  process.stderr.write(
    'You are running version ' + process.version + ' of Node.js, which is not supported by CliBerry.\n' +
    'The official Node.js version that is supported is 8.9 and greater.\n\n' +
    'Please visit https://nodejs.org/en/ to find instructions on how to update Node.js.\n'
  );

  process.exit(3);
}

require('../lib/cli-parameter');
require('@angular/cli/lib/init');