/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry/LICENSE
 */
import {cliberry as schematics} from 'cliberry-schematics';

// define ng6 manually
const ng6 = {template: 'cliberry', customCmds: ['new'], alias: 'ng6'};

export type Config = { [s: string]: { template: string, customCmds: string[] } };
const config: Config = {};

// default
config['default'] = ng6;
// angular
config['ng'] = ng6;
config['angular'] = ng6;
config['angular6'] = ng6;
config[ng6.alias] = ng6;
// templating
config['template'] = schematics;
config[schematics.alias] = schematics;


export default config;