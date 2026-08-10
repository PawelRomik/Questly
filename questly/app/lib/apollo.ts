import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	link: new HttpLink({ uri: process.env.NEXT_PUBLIC_CMS_URL }),
	cache: new InMemoryCache()
});
