/**
 * @license
 * Tomasz Gorka <https://tomasz.gorka.org.pl>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/tgorka/cliberry/LICENSE
 */
export type Config = { [s: string]: { template: string, customCmds: string[] } };
const config: Config = {
    default: {template: 'cliberry', customCmds: ['new']},
    ng: {template: 'cliberry', customCmds: ['new']},
    angular: {template: 'cliberry', customCmds: ['new']},
    angular6: {template: 'cliberry', customCmds: ['new']},
    ng6: {template: 'cliberry', customCmds: ['new']},
};
export default config;