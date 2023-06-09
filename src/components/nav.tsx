import { ReactElement, useState, useEffect } from "react";
import {
  Button,
  Center,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Link,
  Stack,
  Switch,
} from "@chakra-ui/react";
import {
  ArrowUpIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  LinkedInLogoIcon,
  TextAlignLeftIcon,
  GitHubLogoIcon,
  FileTextIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";

import EmailForResume from "./EmailForResume";
import { CustomStyles, TAILWIND } from "@/shared";
import _ from "lodash";
import DarkModeToggle from "./DarkModeToggle";

interface NavProps {
  resumeModalOpen: boolean;
  setResumeModalOpen: any;
  darkModeToggle: boolean;
  setDarkModeToggle: any;
  setStyles: any;
}

const Nav = ({
  resumeModalOpen,
  setResumeModalOpen,
  darkModeToggle,
  setDarkModeToggle,
  setStyles,
}: NavProps): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const mode = "dark";
  const _initTitleColorStyle =
    mode === "dark" ? TAILWIND.color.secondary : TAILWIND.color.primary;
  const [titleColorStyle, setTitleColorStyle] =
    useState<string>(_initTitleColorStyle);

  const handleOnDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    // set cookie as well
    setTitleColorStyle((color) => {
      return color === TAILWIND.color.secondary
        ? TAILWIND.color.primary
        : TAILWIND.color.secondary;
    });
  }, [darkModeToggle]);

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
                className={`name underline underline-offset-2 hover:bg-amber-400 cursor-pointer ${titleColorStyle}`}
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
              // href="/resume.pdf"
              onClick={() => setResumeModalOpen(() => true)}
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              resume
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
              href="https://www.linkedin.com/in/atharva-kamble-0b14b71b8/"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              linkedin
            </Link>

            <Center height="30px" className="my-auto">
              <Divider orientation="vertical" />
            </Center>
            <Link
              href="/blog"
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              blogs
            </Link>
            <Link
              href="https://medium.com/@atharvadkamble00"
              isExternal
              className="hover:-translate-y-0.5 transition ease-in-out my-auto"
            >
              medium
            </Link>

            <DarkModeToggle
              toggle={darkModeToggle}
              setToggle={setDarkModeToggle}
            />
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
                    onClick={() => setResumeModalOpen(() => true)}
                    isExternal
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
                    bgColor="black"
                    variant="solid"
                    className="w-full"
                  >
                    <Link href="/blog">blogs</Link>
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

        <DarkModeToggle
          className="md:hidden "
          toggle={darkModeToggle}
          setToggle={setDarkModeToggle}
        />
      </div>
    </>
  );
};

export default Nav;
