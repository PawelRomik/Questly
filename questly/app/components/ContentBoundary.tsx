"use client";

import { ReactNode, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorState from "@/app/components/common/ErrorState";

type Props = {
	children: ReactNode;
	fallback: ReactNode;
	hideBackground?: boolean;
};

export default function ContentBoundary({ children, fallback, hideBackground }: Props) {
	const [retry, setRetry] = useState(0);

	return (
		<ErrorBoundary
			FallbackComponent={(props) => (
				<ErrorState
					hideBackground={hideBackground}
					{...props}
					resetErrorBoundary={() => {
						props.resetErrorBoundary();
						setRetry((x) => x + 1);
					}}
				/>
			)}
		>
			<Suspense key={retry} fallback={fallback}>
				{children}
			</Suspense>
		</ErrorBoundary>
	);
}
