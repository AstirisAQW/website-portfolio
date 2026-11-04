import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const projectsFile = path.join(rootDir, 'src', 'content', 'projects.ts')

function readPngSize(filePath) {
  const buf = fs.readFileSync(filePath)
  // PNG signature is 8 bytes, followed by IHDR chunk (4 bytes length, 4 bytes 'IHDR', 4 bytes width, 4 bytes height)
  const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
  for (let i = 0; i < signature.length; i++) {
    if (buf[i] !== signature[i]) {
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

let content = fs.readFileSync(projectsFile, 'utf8')

// Match image objects referencing asset('...png')
content = content.replace(
  /image:\s*\{\s*src:\s*asset\(['"]([^'"]+\.png)['"]\),\s*alt:\s*(['"][^'"]+['"])(?:\s*,\s*width:\s*\d+\s*,\s*height:\s*\d+)?\s*\}/g,
  (match, fileName, altLiteral) => {
    const pngPath = path.join(publicDir, fileName)
    const { width, height } = readPngSize(pngPath)
    return `image: { src: asset('${fileName}'), alt: ${altLiteral}, width: ${width}, height: ${height} }`
  }
)

fs.writeFileSync(projectsFile, content, 'utf8')
console.log('Updated project image dimensions in src/content/projects.ts')

