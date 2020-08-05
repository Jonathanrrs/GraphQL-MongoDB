import {tasks} from "./sample";
export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with GraphQL'
        },
        greet(root, {name}) {
            console.log(name);
            return `Hello ${name}`
        },
        tasks() {
            return tasks;
        }
    }, 
   
    Mutation: {
        createTask(_, {input}) {  /* guion bajo para indicar que no estás utilizando la primer propiedad  */
            input._id = tasks.length;
            tasks.push(input)
            return input
        }
    }
}