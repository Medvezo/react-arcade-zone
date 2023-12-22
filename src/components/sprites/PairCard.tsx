import { Card, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";
export default function PairCard({
	pair,
}: {
	pair: {
		title: string;
		src: string;
	};
}) {
	return (
		<Card shadow="sm" isPressable >
			<CardBody>
				<Image
					as={NextImage}
					src={pair.src}
					width="70"
					height="70"
					alt={`${pair.title} logo`}
				/>
			</CardBody>
		</Card>
	);
}
