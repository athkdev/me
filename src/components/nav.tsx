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
      <div className="flex md:grid grid-cols-2 gap-2 p-4">
        <Center className="mx-auto">
          <div>
            <h1 className="font-thin text-2xl md:text-4xl hover:-translate-y-1 transition ease-in-out">
              My name is{" "}
              <span
                className={`name underline underline-offset-2 hover:bg-amber-400 cursor-pointer font-extrabold text-gray-200 hover:text-white`}
              >
                <Link href="/">Atharva Kamble.</Link>
              </span>
            </h1>
            {/* <p className="font-text">
                            I am a
                            <span id="roles" className="button-secondary">
                            software engineer
                            </span>
                            <span id="hover-box" className="hover-box slide-right">
                          *click click*
                          </span>
                          </p> */}
          </div>
        </Center>
        <div className="hidden md:flex bg-secondary font-text ">
          <div className="flex mx-auto gap-2 my-auto">
            <Link
              href="/resume"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              resume
            </Link>
            <Link
              // href="/resume.pdf"
              onClick={() => setResumeModalOpen(() => true)}
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              contact
            </Link>
            <Center height="30px" className="my-auto">
              <Divider orientation="vertical" />
            </Center>
            <Link
              href="https://github.com/AtharvaKamble"
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
                    href="/resume"
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
                    onClick={() => setResumeModalOpen(() => true)}
                    isExternal
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
                    <Link href="https://github.com/AtharvaKamble" isExternal>
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
