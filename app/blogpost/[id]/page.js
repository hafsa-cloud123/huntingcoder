import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import '../blogpost.css'

const Page = async ({ params }) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  let blog = null;
  let errorInfo = null;

  try {
    const filePath = path.join(process.cwd(), 'blogdata', `${id}.json`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    blog = JSON.parse(fileContent)
  } catch (err) {
    errorInfo = "No blog post found. It may not exist yet."
  }

  return (
    <div className='main'>
      <div className="head">
        <h1>{blog ? blog.title : "Not Found"}</h1>
      </div>
      <hr />
      <div style={{ marginTop: '20px' }}>
        {blog ? (
          <>
            <p>{blog.content}</p>
            <br />
            <span style={{ fontStyle: 'italic', color: 'gray' }}>Author: {blog.author}</span>
          </>
        ) : (
          <p>{errorInfo}</p>
        )}
      </div>
    </div>
  )
}

export default Page
