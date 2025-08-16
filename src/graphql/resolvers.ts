import { postResolvers } from "../modules/posts/graphql/resolvers";
import { userResolvers } from "../modules/users/graphql/resolvers";

export const resolvers = [userResolvers, postResolvers];
