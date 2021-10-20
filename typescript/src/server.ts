import express from 'express'
import { createCourse } from './routes';

const app = express()

app.get('/', createCourse)

app.listen('3001', () => {
    console.log('Port listen 3001');
})