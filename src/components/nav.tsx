import { ReactElement, useState } from "react";
import {
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  LinkedInLogoIcon,
  TextAlignLeftIcon,
  GitHubLogoIcon,
  FileTextIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";

const Nav = (): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleOnDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);

    console.log(drawerOpen);
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
      <div className="flex md:grid grid-cols-2 gap-2 m-4">
        <Center className="mx-auto">
          <div>
            <h1 className="font-thin text-2xl md:text-4xl">
              My name is <span className="name">Atharva Kamble.</span>
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
            <Link href="https://atharvakamble.github.io/resume.pdf" isExternal>
              resume
            </Link>
            <Center height="30px">
              <Divider orientation="vertical" />
            </Center>
            <Link href="https://github.com/AtharvaKamble" isExternal>
              github
            </Link>

            <Link
              href="https://www.linkedin.com/in/atharva-kamble-0b14b71b8/"
              isExternal
            >
              linkedin
            </Link>

            <Center height="30px">
              <Divider orientation="vertical" />
            </Center>
            <Link href="/blog/" isExternal>
              blog
            </Link>
            <Link href="https://medium.com/@atharvadkamble00" isExternal>
              medium
            </Link>
          </div>
        </div>
        <Drawer
          placement="right"
          onClose={handleOnDrawerOpen}
          isOpen={drawerOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader />
            <DrawerBody>
              <div className={`flex flex-col mx-auto`}>
                <Stack direction={"column"}>
                  <Button
                    leftIcon={<FileTextIcon />}
                    colorScheme="facebook"
                    variant="solid"
                    color="white"
                    bgColor="#2b2b2b"
                  >
                    <Link href="/public/resume.pdf" isExternal>
                      resume
                    </Link>
                  </Button>

                  <Button
                    leftIcon={<GitHubLogoIcon />}
                    color="white"
                    bgColor="#2b2b2b"
                    variant="solid"
                  >
                    <Link href="https://github.com/AtharvaKamble" isExternal>
                      github
                    </Link>
                  </Button>

                  <Button
                    leftIcon={<LinkedInLogoIcon />}
                    color="white"
                    bgColor="#2b2b2b"
                    variant="solid"
                  >
                    <Link
                      href="https://www.linkedin.com/in/atharva-kamble-0b14b71b8/"
                      isExternal
                    >
                      linkedin
                    </Link>
                  </Button>
                  <Button
                    leftIcon={<TextAlignLeftIcon />}
                    color="white"
                    bgColor="#2b2b2b"
                    variant="solid"
                  >
                    <Link href="/blog/" isExternal>
                      blog
                    </Link>
                  </Button>
                  <Button
                    leftIcon={<Pencil1Icon />}
                    color="white"
                    bgColor="#2b2b2b"
                    variant="solid"
                  >
                    <Link
                      href="https://medium.com/@atharvadkamble00"
                      isExternal
                    >
                      medium
                    </Link>
                  </Button>
                </Stack>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Nav;
