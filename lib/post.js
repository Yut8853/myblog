import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import { html } from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  console.log(fileNames)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResults = matter(fileContents)

    return {
      id,
      ...matterResults.data,
    }
  })
  return allPostsData
}

// getStaticPath
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')

  const matterResults = matter(fileContent)

  const blogContent = await remark().use(html).process(matterResults.content)

  const blogContentHTML = blogContent.toString()

  return {
    id,
    blogContentHTML,
    ...matterResults.data,
  }
}