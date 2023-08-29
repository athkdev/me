import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
} from "@chakra-ui/react";

interface EmailForResumeProps {
  open: boolean;
  setOpen: any;
}
export default function Contact({ open, setOpen }: EmailForResumeProps) {
  return (
    <Modal isOpen={open} onClose={() => setOpen(() => false)}>
      <ModalContent className="border-2 border-gray-400">
        <ModalHeader>Contact me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p className="text-xs">
            Networking{"'"}s the best, I love it! So excited that you want to
            connect with me! Drop your mail and we can take it from there! Btw,
            no spams or anything, just personal network. {"<3"}
          </p>
          <Stack spacing={4} className="mt-4">
            <Input className="text-xs" placeholder="Name" />
            <Input className=" text-xs" placeholder="Your email address" />
            <Textarea className=" text-xs" placeholder="Message for me" />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={() => false}>
            Get in touch
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
