import ReactMarkdown from "react-markdown";
import FixedImage from "@/app/components/common/FixedImage";

type Segment = { type: "text"; content: string } | { type: "image"; src: string; alt: string };

const IMG_TAG_REGEX = /\[IMG([^\]]*)\]/g;
const ATTR_REGEX = /(\w+)="([^"]*)"/g;

function parseAttrs(raw: string): Record<string, string> {
	const attrs: Record<string, string> = {};
	let match: RegExpExecArray | null;

	ATTR_REGEX.lastIndex = 0;

	while ((match = ATTR_REGEX.exec(raw)) !== null) {
		attrs[match[1]] = match[2];
	}

	return attrs;
}

function splitDescription(desc: string): Segment[] {
	const segments: Segment[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	IMG_TAG_REGEX.lastIndex = 0;

	while ((match = IMG_TAG_REGEX.exec(desc)) !== null) {
		if (match.index > lastIndex) {
			segments.push({ type: "text", content: desc.slice(lastIndex, match.index) });
		}

		const attrs = parseAttrs(match[1]);
		segments.push({ type: "image", src: attrs.src ?? "", alt: attrs.alt ?? "" });

		lastIndex = match.index + match[0].length;
	}

	if (lastIndex < desc.length) {
		segments.push({ type: "text", content: desc.slice(lastIndex) });
	}

	return segments;
}

type Props = {
	desc: string;
};

export function RichDescription({ desc }: Props) {
	const segments = splitDescription(desc);

	return (
		<>
			{segments.map((segment, index) => {
				if (segment.type === "image") {
					return <FixedImage key={index} className='w-full max-h-50 object-contain object-center' src={segment.src} alt={segment.alt} />;
				}

				if (!segment.content.trim()) {
					return null;
				}

				return <ReactMarkdown key={index}>{segment.content}</ReactMarkdown>;
			})}
		</>
	);
}
