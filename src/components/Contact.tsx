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
          <div className="mt-2 bg-orange-100 p-1  rounded">
            <p className=" text-xs text-red-300">
              Heads-up: this feature is currently{" "}
              <span className="text-red-400 underline underline-offset-4">
                under re-construction
              </span>{" "}
              because of going out of limit for emails on the free-tier haha.
            </p>
            <p className="mt-2 text-red-300 text-xs">
              Feel free to contact me at{" "}
              <code className="bg-gray-300 p-1 text-white rounded">
                kamble.ath [at] northeastern [dot] edu
              </code>
            </p>
          </div>
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
