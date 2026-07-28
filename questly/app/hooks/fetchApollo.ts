import { DocumentNode, OperationVariables } from "@apollo/client";
import { client } from "@/app/lib/apollo";

export async function fetchApollo<TData, TVariables extends OperationVariables>(query: DocumentNode, variables: TVariables) {
	const { data } = await client.query<TData, TVariables>({
		query,
		variables,
		fetchPolicy: "network-only"
	});

	return {
		data,
		error: null
	};
}
