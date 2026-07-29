import { DocumentNode, OperationVariables } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client/react";

export function useApollo<TData, TVariables extends OperationVariables>(query: DocumentNode, variables: TVariables) {
	const { data } = useSuspenseQuery<TData, TVariables>(query, {
		variables,
		fetchPolicy: "network-only"
	});

	return { data };
}
