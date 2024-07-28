import { test as setup, expect } from "@playwright/test"

setup('create new article', async({request}) => {
    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {
        "article":{"title":"this is a test title from newArticle file","description":"description","body":"abc","tagList":[]}
        }
    })

    expect(articleResponse.status()).toEqual(201)

    const response = await articleResponse.json()
    process.env['SLUGID'] = response.article.slug
    
})