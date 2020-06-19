import MainRouter from "./MainRouter";
import TodoRouter from "./todo";

export const initRoutes = () => {
    const mainRouter = new MainRouter({base: "/"})
    const todoRouter = new TodoRouter({base: "/todo"});
    mainRouter.build();
    todoRouter.build();
}



