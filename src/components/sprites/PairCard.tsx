import { Card, CardBody, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { TPair } from "@/lib/types";

export default function PairCard({ pair }: { pair: TPair }) {
	return (
		<Card shadow="sm" isPressable>
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
