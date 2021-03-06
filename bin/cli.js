#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../package.json')
const Multipack = require('../index')
const multipack = new Multipack()

program
  .version(packageJson.version)

program
  .command('build')
  .description('build all source files into output folder')
  .action(() => multipack.build())

program
  .command('watch')
  .description('watch all source files build on any updates updates')
  .action(() => multipack.watch())

program.parse(process.argv)
