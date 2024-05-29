import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <>
      <div className="flex items-center justify-center h-screen mx-10">
        <Card className="p-4 max-w-[600px] min-h-[200px] min-w-[400px] items-center">
          <h1 className="text-2xl  text-bold font-mono">My College Life🧑‍🎓</h1>
          {/* <Divider></Divider> */}
          {/* <div className="flex w-full flex-col"> */}
          <Tabs
            className="my-2"
            key="primary"
            color="primary"
            aria-label="Tabs colors"
            radius="full"
          >
            <Tab className="font-mono font-bold" key="first" title="1'st">
              <Card>
                <CardBody>ปี1 จ้า freshman สุดๆ</CardBody>
              </Card>
            </Tab>

            <Tab className="font-mono font-bold" key="second" title="2'nd">
              <Card>
                <CardBody>ปี2 จ้า</CardBody>
              </Card>
            </Tab>
            <Tab className="font-mono font-bold" key="third" title="3'rd">
              <Card>
                <CardBody>ปี3 จ้า</CardBody>
              </Card>
            </Tab>
            <Tab className="font-mono font-bold" key="fourth" title="4'th">
              <Card>
                <CardBody>ปี4 จ้า จบแล้วจ้า</CardBody>
              </Card>
            </Tab>
          </Tabs>
          {/* </div> */}
        </Card>
      </div>
    </>
  );
}
