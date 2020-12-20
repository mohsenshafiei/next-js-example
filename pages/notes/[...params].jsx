/** @jsx jsx */
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { params } = router.query;
  return <div>params is {params}</div>;
};

export default Page;
