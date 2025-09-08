import Counter from "@/components/Counter";
const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
import Image from "next/image";

const InfoPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Server InfoPage");
  return (
    <>
      <h1>Info Page</h1>
      <Counter />
      <Image src={url} alt="image" width={500} height={333} priority/>
    </>
  );
};

export default InfoPage;
