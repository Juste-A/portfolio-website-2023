import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const query = `
{
  projectCollection {
    items {
      title
      tags
      description {
        json
      }
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}
`
const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  host: process.env.REACT_APP_HOST
})

function Projects () {
  // define the initial state
  const [content, setContent] = useState(null)

  useEffect(() => {
    async function fetchContent () {
      const response = await client.getEntries({
        content_type: 'project',
        select: 'fields'
      })
      setContent(response.items)
    }

    fetchContent()
  }, [])

  return (
    <div>
      {content && content.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects
