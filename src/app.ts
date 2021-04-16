import express from 'express'
import cors from 'cors'
import 'dotenv'

import { router } from './routes'

import { connect } from './config/mongooose.config'
import { connect as connectInMemory } from './config/mongooseInMemory.config'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const { NODE_ENV } = process.env

    if (NODE_ENV === 'production') connect()
    if (NODE_ENV === 'test') connectInMemory()
  }

  private routes (): void {
    this.express.use(router)
  }
}

export default new App().express
