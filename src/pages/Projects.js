import React from 'react'
// import { createClient } from 'contentful'

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
// const client = createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN,
//   host: process.env.REACT_APP_HOST
// })

function Projects () {
  window.fetch('https://graphql.contentful.com/content/v1/spaces/5fvz3nthzet3/explore?access_token=I-ldZAkeP3ngJahpJTnQnw3YuApgjB15O2FXnaErUdM', {
    method: 'POST',
    headers: {
      content_type: 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(response => response.json())
    .then(response => console.log(response.data))
  // define the initial state
  // const [content, setContent] = useState(null)

  // useEffect(() => {
  //   async function fetchContent () {
  //     const response = await client.getEntries({
  //       content_type: 'project',
  //       select: 'fields'
  //     })
  //     setContent(response.items)
  //   }

  //   fetchContent()
  // }, [])

  return (
    <div>
      {/* {content && content.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
        </div>
      ))} */}
    </div>
  )
}

export default Projects
