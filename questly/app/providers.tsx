"use client";

import { CompletedProvider } from "@/app/context/CompletedContext";
import { FiltersProvider } from "@/app/context/FiltersContext";
import { client } from "@/app/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<CompletedProvider>
				<FiltersProvider>{children}</FiltersProvider>
			</CompletedProvider>
		</ApolloProvider>
	);
}
