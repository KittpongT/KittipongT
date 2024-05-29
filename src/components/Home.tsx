import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Link,
  Divider,
} from "@nextui-org/react";

type Props = {};

export default function Home({}: Props) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div className="flex items-center justify-center h-screen mx-10">
      <Card className="max-w-[600px] min-h-[400px] ">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://scontent.cdninstagram.com/v/t51.2885-19/364270808_621953933381351_8940957190139446222_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=k3OpgHAcEWcQ7kNvgFTdbfa&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYC_iBFv1FKANhoVHNbdp6-xC-9VvZbcuP51m1RHW6dEIg&oe=665CABBA&_nc_sid=10d13b"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Kittipong T
              </h4>

              <Link
                href="https://www.instagram.com/pu_apy/"
                size="sm"
                isExternal
              >
                <h5 className="text-small tracking-tight text-default-400">
                  @pu_apy
                </h5>
              </Link>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <Divider className="" />
        <CardBody className="px-5 py-3 text-l text-default-700">
          <span>
            <p className="text-default-700 text-3xl font-bold">Hi👋</p>
            I'm Puen Kittipong Tapyou
          </span>
          <span className="pt-2">
            I'm a student at KMUTT in Computer Engineering (CPE) 💻
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
