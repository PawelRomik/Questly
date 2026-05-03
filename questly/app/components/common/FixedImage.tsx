import Image from "next/image";

type Props = {
	src: string;
	styles: string;
	alt: string;
};

export default function FixedImage({ src, styles, alt }: Props) {
	return <Image unoptimized width={1000} height={1000} src={`http://localhost:1337${src}`} className={styles} alt={alt} />;
}
