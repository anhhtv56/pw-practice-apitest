import { request, expect } from "@playwright/test"
import user from '../.auth/user.json'
import fs from 'fs'
 
const authFile = '.auth/user.json'

async function globalSetup(){

    const context = await request.newContext()
    const responseToken = await context.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
        "user":{"email":"anhautotest@test.com","password":"123456"}
    }
    })  
    const responseBody = await responseToken.json()
    const accessToken = responseBody.user.token

    user.origins[0].localStorage[0].value = accessToken
    fs.writeFileSync(authFile, JSON.stringify(user))
    process.env['ACCESS_TOKEN'] = accessToken

    const articleResponse = await context.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {
        "article":{"title":"this is global test title","description":"description","body":"abc","tagList":[]}
        },
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })

    expect(articleResponse.status()).toEqual(201)

    const response = await articleResponse.json()
    process.env['SLUGID'] = response.article.slug
}

export default globalSetup;