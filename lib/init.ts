/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import 'symbol-observable';
// symbol polyfill must go first
// tslint:disable-next-line:ordered-imports import-groups
import { resolve } from '@angular-devkit/core/node';
import * as fs from 'fs';
import * as path from 'path';
import { Duplex } from 'stream';


// Check if we need to profile this CLI run.
if (process.env['NG_CLI_PROFILING']) {
    const profiler = require('v8-profiler'); // tslint:disable-line:no-implicit-dependencies
    profiler.startProfiling();
    const exitHandler = (options: { cleanup?: boolean, exit?: boolean }) => {
        if (options.cleanup) {
            const cpuProfile = profiler.stopProfiling();
            fs.writeFileSync(
                path.resolve(process.cwd(), process.env.NG_CLI_PROFILING || '') + '.cpuprofile',
                JSON.stringify(cpuProfile),
            );
        }

        if (options.exit) {
            process.exit();
        }
    };

    process.on('exit', () => exitHandler({ cleanup: true }));
    process.on('SIGINT', () => exitHandler({ exit: true }));
    process.on('uncaughtException', () => exitHandler({ exit: true }));
}

const projectLocalCli = resolve(
    '@angular/cli',
    {
        checkGlobal: false,
        basedir: process.cwd(),
        preserveSymlinks: true,
    },
);

let cli = require(projectLocalCli);

if ('default' in cli) {
    cli = cli['default'];
}

// This is required to support 1.x local versions with a 6+ global
let standardInput;
try {
    standardInput = process.stdin;
} catch (e) {
    delete process.stdin;
    (<any>process).stdin = new Duplex();
    standardInput = process.stdin;
}

// adding a local schematics collection by default at the beginning so later parameters can redefine it
let cliArgs = process.argv.slice(2);
let customCmds = ["new"];
const hasCmd = (): boolean => {
    for (let customCmd of customCmds) {
        if (cliArgs.includes(customCmd)) {
            return true;
        }
    }
    return false;
};
if (hasCmd()) {
    cliArgs = ['--collection', 'schemaberry', ...cliArgs];
}

cli({
    cliArgs: cliArgs,
    inputStream: standardInput,
    outputStream: process.stdout,
})
    .then((exitCode: number) => {
        process.exit(exitCode);
    })
    .catch((err: Error) => {
        console.error('Unknown error: ' + err.toString());
        process.exit(127);
    });