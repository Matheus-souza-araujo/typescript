
import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService'

export function CreateCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "Node.js",
        edurcator: "Dani",
        duration: 10
    });

    return response.send();
}