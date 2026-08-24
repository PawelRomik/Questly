import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { cache } from "react";

function createApolloClient(): ApolloClient {
	return new ApolloClient({
		link: new HttpLink({ uri: process.env.NEXT_PUBLIC_CMS_URL }),
		cache: new InMemoryCache()
	});
}

const getServerClient = cache(createApolloClient);

let browserClient: ApolloClient | undefined;

function getBrowserClient() {
	if (!browserClient) {
		browserClient = createApolloClient();
	}

	return browserClient;
}

export function getClient() {
	return typeof window === "undefined" ? getServerClient() : getBrowserClient();
}
