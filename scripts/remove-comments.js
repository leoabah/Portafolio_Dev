#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const IGNORED_DIRS = new Set(['.git', 'node_modules', 'dist', 'build']);
const TEXT_EXT = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.html', '.md', '.markdown']);

function walkDir(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (IGNORED_DIRS.has(e.name)) continue;
      walkDir(full, cb);
    } else if (e.isFile()) {
      cb(full);
    }
  }
}

function removeCommentsFromJS(src) {
  let out = '';
  let i = 0;
  const len = src.length;
  let inSingle = false, inDouble = false, inTemplate = false;
  let inLineComment = false, inBlockComment = false;
  let escape = false;
  let braceDepth = 0; // for ${} in template

  while (i < len) {
    const ch = src[i];
    const next = src[i+1];

    if (inLineComment) {
      if (ch === '\n') {
        inLineComment = false;
        out += ch;
      }
      i++;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (escape) {
      out += ch;
      escape = false;
      i++;
      continue;
    }

    if (ch === '\\') {
      escape = true;
      out += ch;
      i++;
      continue;
    }

    if (!inSingle && !inDouble && !inTemplate) {
      if (ch === '/' && next === '/') {
        inLineComment = true;
        i += 2;
        continue;
      }
      if (ch === '/' && next === '*') {
        inBlockComment = true;
        i += 2;
        continue;
      }
    }

    if (ch === "'") {
      if (!inDouble && !inTemplate) inSingle = !inSingle;
      out += ch;
      i++;
      continue;
    }
    if (ch === '"') {
      if (!inSingle && !inTemplate) inDouble = !inDouble;
      out += ch;
      i++;
      continue;
    }
    if (ch === '`') {
      if (!inSingle && !inDouble) {
        if (!inTemplate) { inTemplate = true; out += ch; i++; continue; }
        else { inTemplate = false; out += ch; i++; continue; }
      }
    }

    if (inTemplate && ch === '$' && next === '{') {
      out += '${';
      braceDepth = 1;
      i += 2;
      // enter expression inside template
      while (i < len && braceDepth > 0) {
        const c = src[i];
        if (c === '{') braceDepth++;
        else if (c === '}') braceDepth--;
        out += c;
        i++;
      }
      continue;
    }

    out += ch;
    i++;
  }

  return out;
}

function removeCommentsFromCSS(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '');
}

function removeHtmlComments(src) {
  return src.replace(/<!--([\s\S]*?)-->/g, '');
}

function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!TEXT_EXT.has(ext)) return;
  let src = fs.readFileSync(file, 'utf8');
  let out = src;

  if (ext === '.css' || ext === '.scss' || ext === '.sass') {
    out = removeCommentsFromCSS(src);
  } else if (ext === '.html' || ext === '.md' || ext === '.markdown') {
    out = removeHtmlComments(src);
  } else if (ext === '.js' || ext === '.jsx' || ext === '.ts' || ext === '.tsx') {
    out = removeCommentsFromJS(src);
  }

  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    console.log('Stripped comments:', path.relative(ROOT, file));
  }
}

function main() {
  console.log('Starting comment removal from', ROOT);
  walkDir(ROOT, (file) => {
    processFile(file);
  });
  console.log('Done. Review changes, then commit.');
}

main();
