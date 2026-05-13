import { gzipSync } from 'node:zlib'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const KiB = 1024
const clientAssets = join(process.cwd(), 'dist/client/assets')
const fontDir = join(process.cwd(), 'public/fonts')

const budgets = {
  cssGzip: 8 * KiB,
  fontRawTotal: 120 * KiB,
  mainJsGzip: 98 * KiB,
  totalJsGzip: 130 * KiB,
}

const assets = readdirSync(clientAssets)
const jsAssets = assets.filter((file) => file.endsWith('.js'))
const cssAssets = assets.filter((file) => file.endsWith('.css'))

const gzipSize = (path) => gzipSync(readFileSync(path)).length
const assetPath = (file) => join(clientAssets, file)

const mainJs = jsAssets.find((file) => file.startsWith('index-'))
if (!mainJs) {
  throw new Error('Could not find the main client JS asset.')
}

const mainJsGzip = gzipSize(assetPath(mainJs))
const totalJsGzip = jsAssets.reduce(
  (total, file) => total + gzipSize(assetPath(file)),
  0,
)
const cssGzip = cssAssets.reduce(
  (total, file) => total + gzipSize(assetPath(file)),
  0,
)
const fontRawTotal = readdirSync(fontDir).reduce(
  (total, file) => total + statSync(join(fontDir, file)).size,
  0,
)

const checks = [
  ['main JS gzip', mainJsGzip, budgets.mainJsGzip],
  ['total JS gzip', totalJsGzip, budgets.totalJsGzip],
  ['CSS gzip', cssGzip, budgets.cssGzip],
  ['font raw total', fontRawTotal, budgets.fontRawTotal],
]

const failures = checks.filter(([, actual, budget]) => actual > budget)

for (const [label, actual, budget] of checks) {
  console.log(
    `${label}: ${(actual / KiB).toFixed(2)} KiB / ${(budget / KiB).toFixed(2)} KiB`,
  )
}

if (failures.length) {
  throw new Error(
    failures
      .map(
        ([label, actual, budget]) =>
          `${label} exceeded budget by ${((actual - budget) / KiB).toFixed(2)} KiB`,
      )
      .join('\n'),
  )
}
