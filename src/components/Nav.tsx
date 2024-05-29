import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { Code } from "@nextui-org/react";
type Props = {};

export default function Nav({}: Props) {
  return (
    <Navbar>
      <NavbarBrand>
        <Code size="lg">
          <Kbd keys={["command"]}></Kbd> Inteoty
        </Code>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            <h1 className="font-mono">Who am I?</h1>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <h1 className="font-mono">My Blog</h1>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <h1 className="font-mono">Contact me</h1>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
