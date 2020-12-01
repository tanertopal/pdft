# pdft

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pdft.svg)](https://npmjs.org/package/pdft)
[![Downloads/week](https://img.shields.io/npm/dw/pdft.svg)](https://npmjs.org/package/pdft)
[![License](https://img.shields.io/npm/l/pdft.svg)](https://github.com/tanertopal/pdft/blob/master/package.json)

<!-- toc -->
* [pdft](#pdft)
* [Commands](#commands)
<!-- tocstop -->

## Usage

<!-- usage -->
```sh-session
$ npm install -g @tanertopal/pdft
$ pdft COMMAND
running command...
$ pdft (-v|--version|version)
@tanertopal/pdft/0.1.0 linux-x64 node-v14.9.0
$ pdft --help [COMMAND]
USAGE
  $ pdft COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`pdft help [COMMAND]`](#pdft-help-command)
* [`pdft split`](#pdft-split)

## `pdft help [COMMAND]`

```
USAGE
  $ pdft help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `pdft split`

```
USAGE
  $ pdft split

OPTIONS
  -f, --file=file  (required) path to pdf

DESCRIPTION
  By default each page will end up as a separate PDF
```

_See code: [src/commands/split.js](https://github.com/tanertopal/pdft/blob/v0.1.0/src/commands/split.js)_
<!-- commandsstop -->
