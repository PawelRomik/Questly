import { DocumentNode, OperationVariables } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

export function useApollo<TData, TVariables extends OperationVariables>(query: DocumentNode, variables: TVariables) {
	const { data, previousData, loading, error } = useQuery<TData, TVariables>(query, {
		variables,
		notifyOnNetworkStatusChange: true
	});

	return {
		data: data ?? previousData,
		loading,
		error
	};
}
