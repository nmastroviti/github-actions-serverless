import supertest from 'supertest'
import { app as listUsers } from './list'

const request = supertest(listUsers)

describe('/users endpoint', () => {
  it('should return a response', async () => {
    const res = await request.get('/users')
    expect(res.status).toBe(200)
    expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ email: 'johndoe@domain.com' })]))
  })
})
