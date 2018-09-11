# cliberry

[![Version npm](https://img.shields.io/npm/v/cliberry.svg)](https://www.npmjs.com/package/cliberry)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) 
[![Github Downloads](https://img.shields.io/github/downloads/tgorka/cliberry/total.svg)](https://github.com/tgorka/cliberry)
[![NPM Downloads](https://img.shields.io/npm/dt/cliberry.svg)](https://www.npmjs.com/package/cliberry)
[![NPM Gziped size](https://img.shields.io/bundlephobia/minzip/cliberry.svg)](https://www.npmjs.com/package/cliberry)
[![Dependency Status](https://david-dm.org/tgorka/cliberry.svg)](https://david-dm.org/tgorka/cliberry)
[![Build Status](https://travis-ci.org/tgorka/cliberry.svg?branch=master)](https://travis-ci.org/tgorka/cliberry)
[![Coverage percentage](https://coveralls.io/repos/tgorka/cliberry/badge.svg)](https://coveralls.io/r/tgorka/cliberry)

Cli for generation angular project with support and configuration for useful framework and tools using schematics.


## Table of Contents

* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Available aliases](#available-aliases)


### Installation

For using the cli you need to install the npm package first:

```
npm install g cliberry
```

or 

```
yarn g cliberry
```


### Description

Using `cliberry` is like using an [@angular/cli](https://cli.angular.io/).

The default schematics will be set to local templates if needed. They can be override 
by adding additional `--collection` parameter.

There is no need to install `@angular/cli` it is included inside `cliberry` tool.


### Usage

```batch
cliberry ng6 new --name MY-PROJECT --description 'DESCRIPTION OF MY PROJECT'
```

This command will generate in the current folder structure 
of the project types `ng6`.

There is one additional parameter (alias) comparing to `Angular CLI`: `ng6`
It needs to be the first parameter that will describe what 
to generate (more specifically which schematics collection to use).
If no alias is used the name of the alias will be `default`.


To generate a project that will generate new alias (schematics collection):
```batch
cliberry schematics new --alias ALIAS-NAME --name MY-PROJECT --description 'DESCRIPTION OF MY PROJECT'
```


### Available aliases

##### [ng6, ng, angular, angular6, default](https://github.com/tgorka/cliberry-ng6)
##### [schematics, templates](https://github.com/tgorka/cliberry-schematics)
 
 
Have fun with using `cliberry` ;).
