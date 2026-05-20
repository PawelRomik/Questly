"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
	src: string;
	className?: string;
	alt: string;
};

export default function FixedImage({ src, className, alt }: Props) {
	const [hidden, setHidden] = useState(false);

	if (!src || hidden) return null;

	return <Image width={1000} height={1000} src={`http://localhost:1337${src}`} className={className} alt={alt} onError={() => setHidden(true)} />;
}
