import TodoRepository from "../repositories/todo.repository"
import {Router, GET, POST, PATCH, DELETE, PUT} from "grandjs"
import {InjectService} from "grand-connectors"
import TodoMiddleWares from "../middleWares/todo.middleWare";


@InjectService("TodoRepository", "services", TodoRepository)
class TodoRouter extends Router{
    services: {
        TodoRepository:TodoRepository
    }
    // create
    @POST({url: "/", middleWares: [TodoMiddleWares.validateCreateTodo.bind(TodoMiddleWares)]})
    create() {
        let data:any = this.req.body;
        // console.log(data);
        this.services.TodoRepository.createTodo(data).then((res) => {
            this.req.message = res.message;
            this.req.flash("info", res.message);
            return this.res.redirect("/");
        }).catch(err => {
            this.res.locals = {};
            this.req.flash("errorMessage", err.message);
            return this.res.redirect("/");
        })
    }
    @DELETE({url: "/:id"})
    delete() {
        let id = this.req.params.id;
        this.services.TodoRepository.deleteTodo(id).then((res) => {
            this.req.message = res.message;
            this.req.flash("info", res.message);
            this.req.method = "GET";
            return this.res.status(200).json(res);
            // return this.res.redirect("/");
        }).catch(err => {
            this.req.flash("errorMessage", err.message);
            return this.res.status(err.status).json(err);
            // return this.res.redirect("/");
        })
    }
}


export default TodoRouter;