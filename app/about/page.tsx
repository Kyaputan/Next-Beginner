import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos";

const fetchtodos = async ()=>{
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

interface Data {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
}

const AboutPage = async () => {
  const todos:Data[] = await fetchtodos();

  return (
    <>
      <div>
        <h1>AboutPage</h1>
      </div>
      <div>
        {
        todos.map((item,index ) => {
          return (
            <div key={item.id}>{item.id + 0}. {item.title}</div>
          )})
        }
      </div>
    </>
  );
};

export default AboutPage;
