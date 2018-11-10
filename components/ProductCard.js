import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginbutton: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          action={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="example" src={photoUrl} height={"200px"} />}
        >
          <Meta title={name} description={subtitle} />
        </Card>
      </a>
    </Link>
  </div>
);
