import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const outputFile = path.join(rootDir, 'src', 'content', 'imageSizes.generated.json')

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]

function readPngSize(filePath) {
  const buf = fs.readFileSync(filePath)
  for (let i = 0; i < PNG_SIGNATURE.length; i++) {
    if (buf[i] !== PNG_SIGNATURE[i]) {
      throw new Error(`Not a valid PNG file: ${filePath}`)
    }
  }
  const chunkType = buf.toString('ascii', 12, 16)
  if (chunkType !== 'IHDR') {
    throw new Error(`Expected IHDR chunk in ${filePath}, got ${chunkType}`)
  }
  const width = buf.readUInt32BE(16)
  const height = buf.readUInt32BE(20)
  return { width, height }
}

const files = fs
  .readdirSync(publicDir)
  .filter((name) => name.toLowerCase().endsWith('.png'))
  .sort((a, b) => a.localeCompare(b))

const sizes = {}
for (const fileName of files) {
  sizes[fileName] = readPngSize(path.join(publicDir, fileName))
}

fs.writeFileSync(outputFile, `${JSON.stringify(sizes, null, 2)}\n`, 'utf8')
