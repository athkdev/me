import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface EmailForResumeProps {
  open: boolean;
  setOpen: any;
}
export default function EmailForResume({ open, setOpen }: EmailForResumeProps) {
  return (
    <Modal isOpen={open} onClose={() => setOpen(() => false)}>
      <ModalContent className="border-2 border-gray-200">
        <ModalHeader>Request resume</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p className="text-xs">
            Networking's the best, I love it! So excited that you want to
            connect with me! Drop your mail and we can take it from there! Btw,
            no spams or anything, just personal network. {"<3"}
          </p>
          <Input className="mt-4 text-xs" placeholder="Enter your email" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={() => false}>
            Request
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
