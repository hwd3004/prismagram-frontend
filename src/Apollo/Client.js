import ApolloClient from "apollo-client";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    url : "http://localhost:4000",
    clientState : {
        defaults,
        resolvers
    }
})
