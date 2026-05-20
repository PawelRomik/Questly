"use client";

import { CompletedProvider } from "@/app/context/CompletedContext";
import { FiltersProvider } from "@/app/context/FiltersContext";
import { GameAssetsProvider } from "@/app/context/GameAssetsProvider";
import { client } from "@/app/lib/apollo";
import { ApolloProvider } from "@apollo/client/react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ApolloProvider client={client}>
			<CompletedProvider>
				<FiltersProvider>
					<GameAssetsProvider>{children}</GameAssetsProvider>
				</FiltersProvider>
			</CompletedProvider>
		</ApolloProvider>
	);
}
