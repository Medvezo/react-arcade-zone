"use client";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function LearnMore({ children }: { children: React.ReactNode }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen} variant="ghost" color="warning" isIconOnly>
				<FaRegQuestionCircle className="w-6 h-6  z-10" />
			</Button>
			<Modal backdrop="blur" className="h-screen lg:h-fit overflow-y-scroll  " isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-amber-600">
								How to Play?
							</ModalHeader>
							<ModalBody >{children}</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
