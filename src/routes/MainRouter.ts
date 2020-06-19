import {Router, View, GET, POST, PATCH, DELETE, PUT, MiddleWare} from "grandjs";
import {InjectService} from "grand-connectors";
const BasePage = View.importJsx("./pages/BasePage.tsx");
import TodoRepository from "../repositories/todo.repository";


@InjectService("TodoRepository", "services", TodoRepository)
class MainRouter extends Router{
    services: {
        TodoRepository: TodoRepository
    }
    @GET({url: "/"})
    async getHomePage() {
        let result  = await this.services.TodoRepository.list();
        let todos = result.data;
        return this.res.render(BasePage, {errorMessage: this.req.flash("errorMessage")[0], infoMessage: this.req.flash("info")[0], validations: this.req.flash("validations"), data:todos});
    }
}



export default MainRouter;