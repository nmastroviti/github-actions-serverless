import serverlessExpress from '@vendia/serverless-express'
import { app as listUsers } from './list'

export const listUsersHandler = serverlessExpress({ app: listUsers })
