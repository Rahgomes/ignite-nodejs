import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response){
    CreateCourseService.execute({
        educator:'Ramon',
        duration:10,
        name:'NodeJS',
    })

    CreateCourseService.execute({
        educator:'Rah',
        name:'ReactJS',
    })

    return response.send()
}