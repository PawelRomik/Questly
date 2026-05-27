"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
	src: string | StaticImageData;
	className?: string;
	alt: string;
};

export default function FixedImage({ src, className, alt }: Props) {
	const [hidden, setHidden] = useState(false);

	if (!src || hidden) return null;

	const imageSrc = typeof src === "string" ? `http://localhost:1337${src}` : src;

	return <Image width={1000} height={1000} src={imageSrc} className={className} alt={alt} onError={() => setHidden(true)} />;
}
