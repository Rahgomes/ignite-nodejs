interface Course {
    name: string,
    duration?: number,
    educator: string
}

class CreateCourseService {
    execute({educator, duration = 12, name}: Course){
        console.log(educator, duration, name)
    }
}

export default new CreateCourseService()