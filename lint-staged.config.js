const path = require('path')

const cwd = process.cwd()

const filterTypeScripFiles = (file) => ['.ts', '.tsx'].includes(path.extname(file))

module.exports = {
  '{apps,libs}/**/*.{ts,tsx,json,md,scss,html}': (files) => {
    if (files.length === 0) return []

    const relPaths = files.map((file) => path.relative(cwd, file))
    const typeFiles = files.filter(filterTypeScripFiles)
    const fileList = files.join(' ')

    return [
      `npm run affected:lint -- --fix --parallel --files=${relPaths.join(',')}`,
      'npm run format:write -- --uncommitted',
      `npm run import-sort -- --write ${typeFiles.join(' ')}`,
      `npm run cspell -- ${fileList}`,
      `git add ${fileList}`,
    ]
  },
}
