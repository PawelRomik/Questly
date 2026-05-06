import Image from "next/image";

type Props = {
	src: string;
	className: string;
	alt: string;
};

export default function FixedImage({ src, className, alt }: Props) {
	return <Image width={1000} height={1000} src={`http://localhost:1337${src}`} className={className} alt={alt} />;
}
