import React from 'react'
import '../blog/blog.css'
import Link from 'next/link'
import fs from 'fs/promises'
import path from 'path'

const Page = async () => {
  const blogDir = path.join(process.cwd(), 'blogdata')
  const files = await fs.readdir(blogDir)

  const blogs = []
  for (let file of files) {
    if (file.endsWith('.json')) {
      const fileContent = await fs.readFile(path.join(blogDir, file), 'utf-8')
      const parsedData = JSON.parse(fileContent)
      parsedData.slug = file.replace('.json', '')
      blogs.push(parsedData)
    }
  }

  return (
    <div className='container'>
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blogItem" key={blog.slug}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
