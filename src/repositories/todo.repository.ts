import {Repository, DataSource, InjectDataSource, InjectModel, InjectService} from "grand-connectors"
import MongoDataSource from "../dataSources/mongo.data.source";

import {ETodo, Todo, Model, ITodo, TodoInterface} from "../models/todo"


class TodoRepository extends Repository{
    @InjectDataSource(MongoDataSource)
    MongoDataSource:MongoDataSource
    @InjectModel({
        Entity: ETodo,
        Model: Todo,
        DataSourceName: "MongoDataSource"
    })
    Todo: {
        Entity: ETodo,
        Model: Model<ITodo>
    }
    // create todo
    async createTodo(data: TodoInterface) {
        try {
            let todo = new this.Todo.Model({
                name: data.name
            })
            // save todo
            await todo.save();
            return Promise.resolve({
                status: 200,
                message: "todo is saved successfully"
            })
        } catch(err) {
            return Promise.reject({
                status: 400,
                message: "failed to create todo"
            })
        }
    }
    async list() {
        try {
            let todos = await this.Todo.Model.find().exec();
            return Promise.resolve({
                status: 200,
                message: "todos are found",
                data: todos
            })
        } catch(err) {
            return Promise.reject({
                status: 400,
                message: "failed to list todos"
            })
        }
    }
    // delete todo
    async deleteTodo(id:string) {
        try {
            // delete todo
            await this.Todo.Model.deleteOne({_id: id}).exec();
            return Promise.resolve({
                status: 200,
                message: "todo deleted successfully"
            })
        } catch(err) {
            return Promise.reject({
                status: 400,
                message: "failed to create todo"
            })
        }
    }
    // validate create
    validateCreate(data:TodoInterface) {
        let todo = new ETodo(data);
        todo.functions.validate();
        if(todo.validations.length > 0) {
            return Promise.reject({
                status: 422,
                message: "validations error",
                validations: todo.validations
            })
        } else {
            // continue
            return Promise.resolve({
                status: 200,
                message: "no validations errors"
            })
        }
    }
}

export default TodoRepository;