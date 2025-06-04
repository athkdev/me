import { ReactElement, useState } from "react";
import {
  Button,
  Center,
  Divider,
  Drawer,
  DrawerContent,
  Link,
  Stack,
} from "@chakra-ui/react";
import { ArrowUpIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  LinkedInLogoIcon,
  TextAlignLeftIcon,
  GitHubLogoIcon,
  FileTextIcon,
  Pencil1Icon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import _ from "lodash";
interface NavProps {
  resumeModalOpen: boolean;
  setResumeModalOpen: any;
}

const Nav = ({
  resumeModalOpen,
  setResumeModalOpen,
}: NavProps): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleOnDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex md:hidden justify-end p-1">
        <HamburgerIcon
          className="mr-0"
          boxSize={7}
          onClick={handleOnDrawerOpen}
        />
      </div>
      <Divider className="flex md:hidden" orientation="horizontal" />
      <div className="flex md:grid grid-cols-2 gap-2 p-4 text-stone-400 bg-white">
        <Center className="mx-auto">
          <div>
            <h1 className="text-2xl md:text-lg hover:-translate-y-1 transition ease-in-out">
              I am{" "}
              <span
                className={`name underline underline-offset-2 text-stone-200 hover:bg-amber-400 cursor-pointer text-neutral-800 hover:text-white`}
              >
                Atharva.
              </span>{" "}
              I build.
            </h1>
          </div>
        </Center>
        <div className="hidden md:flex font-text">
          <div className="flex mx-auto gap-2 my-auto text-sm">
            <Link
              href="/cv"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              resume
            </Link>
            <Link
              href="/contact"
              // onClick={() => setResumeModalOpen(() => true)}
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              contact
            </Link>
            <Center height="30px" className="my-auto">
              <Divider orientation="vertical" />
            </Center>
            <Link
              href="https://github.com/athkdev"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/athk"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              linkedin
            </Link>

            <Center height="30px" className="my-auto">
              <Divider orientation="vertical" />
            </Center>
            <Link
              isExternal
              href="https://blog.athk.dev"
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              blog
            </Link>
            <Link
              href="https://medium.com/@atharvadkamble00"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              medium
            </Link>
          </div>
        </div>
        <Drawer
          placement="top"
          onClose={handleOnDrawerOpen}
          isOpen={drawerOpen}
        >
          <DrawerContent>
            <div className={`flex flex-col mx-auto mt-3`}>
              <Center className="bg-white">
                <Stack direction={"column"} className="bg-white">
                  <Link
                    href="/cv"
                    isExternal
                    className="hover:-translate-y-0.5 transition ease-in-out my-auto"
                  >
                    <Button
                      leftIcon={<FileTextIcon />}
                      colorScheme="facebook"
                      variant="solid"
                      color="white"
                      bgColor="black"
                      className="w-full"
                    >
                      resume
                    </Button>
                  </Link>

                  <Link
                    href="/contact"
                    // onClick={() => setResumeModalOpen(() => true)}
                  >
                    <Button
                      leftIcon={<EnvelopeClosedIcon />}
                      colorScheme="facebook"
                      variant="solid"
                      color="white"
                      bgColor="black"
                      className="w-full"
                    >
                      contact
                    </Button>
                  </Link>

                  <Button
                    leftIcon={<GitHubLogoIcon />}
                    color="white"
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link href="https://github.com/athkdev" isExternal>
                      github
                    </Link>
                  </Button>

                  <Button
                    leftIcon={<LinkedInLogoIcon />}
                    color="white"
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link href="https://www.linkedin.com/in/athk" isExternal>
                      linkedin
                    </Link>
                  </Button>
                  <Button
                    leftIcon={<TextAlignLeftIcon />}
                    color="white"
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link isExternal href="https://blog.athk.dev">
                      blog
                    </Link>
                  </Button>
                  <Button
                    leftIcon={<Pencil1Icon />}
                    color="white"
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link
                      href="https://medium.com/@atharvadkamble00"
                      isExternal
                    >
                      medium
                    </Link>
                  </Button>

                  <Button
                    leftIcon={<Pencil1Icon />}
                    color="white"
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link
                      href="https://medium.com/@atharvadkamble00"
                      isExternal
                    >
                      dark mode
                    </Link>
                  </Button>
                </Stack>
              </Center>
            </div>
            <p className="relative mx-auto top-6 text-xs text-gray-300">
              <ArrowUpIcon className="animate-bounce" />
            </p>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Nav;
