
import {Request, Response} from "grandjs";
import {InjectService} from "grand-connectors"
import TodoRepository from "../repositories/todo.repository"

@InjectService("TodoRepository", "repositories", TodoRepository)
class TodoMiddleWares {
    repositories: {
        TodoRepository: TodoRepository
    }
    async validateCreateTodo(req:Request, res:Response, next:Function) {
        try {
            await this.repositories.TodoRepository.validateCreate(<any>req.body)
            // continue
            return next();
        } catch(err) {
            console.log(err);
            req.flash("errorMessage", err.message);
            req.flash("validations", err.validations);
            return res.redirect("/");
        }
    }
}


export default new TodoMiddleWares();