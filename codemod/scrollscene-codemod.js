#!/usr/bin/env node
/**
 * ScrollScene 1.0 migrator — rewrites `new ScrollScene` / `new ScrollObserver`
 * to factories and Scene/Controller property access to handle.scene/controller.
 *
 * Usage:
 *   pnpm exec scrollscene-codemod <file-or-glob> [...]
 *   npx scrollscene-codemod path/to/file.jsx
 */

const fs = require('fs')
const path = require('path')

function transformSource(source) {
  let next = source

  next = next.replace(/\bnew\s+ScrollScene\s*\(/g, 'createScrollScene(')
  next = next.replace(/\bnew\s+ScrollObserver\s*\(/g, 'createScrollObserver(')

  /* package imports */
  next = next.replace(
    /import\s*\{([^}]*)\}\s*from\s*(['"])scrollscene(\/observer)?\2/g,
    function(_match, bindings, quote, subpath) {
      const rewritten = bindings
        .split(',')
        .map(function(part) {
          return part
            .replace(/\bScrollScene\b/g, 'createScrollScene')
            .replace(/\bScrollObserver\b/g, 'createScrollObserver')
        })
        .join(',')
      const fromPath = subpath ? 'scrollscene/observer' : 'scrollscene'
      return 'import {' + rewritten + '} from ' + quote + fromPath + quote
    },
  )

  /* relative imports used in this repo's stories */
  next = next.replace(
    /import\s*\{\s*ScrollScene\s*\}\s*from\s*(['"])([^'"]+)\1/g,
    'import { createScrollScene } from $1$2$1',
  )
  next = next.replace(
    /import\s*\{\s*ScrollObserver\s*\}\s*from\s*(['"])([^'"]+)\1/g,
    'import { createScrollObserver } from $1$2$1',
  )
  next = next.replace(
    /import\s*\{\s*ScrollScene\s*,\s*([^}]+)\}\s*from\s*(['"])([^'"]+)\2/g,
    'import { createScrollScene, $1} from $2$3$2',
  )
  next = next.replace(
    /import\s*\{\s*ScrollObserver\s*,\s*([^}]+)\}\s*from\s*(['"])([^'"]+)\2/g,
    'import { createScrollObserver, $1} from $2$3$2',
  )

  next = next.replace(/\b(?!ScrollMagic)(\w+)\.Scene\b/g, '$1.scene')
  next = next.replace(/\b(?!ScrollMagic)(\w+)\.Controller\b/g, '$1.controller')

  return next
}

function walk(target, files) {
  const stat = fs.statSync(target)
  if (stat.isDirectory()) {
    fs.readdirSync(target).forEach(function(name) {
      if (name === 'node_modules' || name === 'dist' || name === '.git' || name === 'codemod') {
        return
      }
      walk(path.join(target, name), files)
    })
    return
  }

  if (/\.(js|jsx|ts|tsx|md|mdx)$/.test(target)) {
    files.push(target)
  }
}

function main(argv) {
  const inputs = argv.slice(2)
  if (!inputs.length) {
    console.error('Usage: scrollscene-codemod <file-or-dir> [...]')
    process.exit(1)
  }

  const files = []
  inputs.forEach(function(input) {
    walk(path.resolve(input), files)
  })

  let changed = 0
  files.forEach(function(file) {
    const before = fs.readFileSync(file, 'utf8')
    const after = transformSource(before)
    if (after !== before) {
      fs.writeFileSync(file, after)
      changed += 1
      console.log('updated', file)
    }
  })

  console.log('scrollscene-codemod: updated', changed, 'of', files.length, 'files')
}

if (require.main === module) {
  main(process.argv)
}

module.exports = { transformSource }
