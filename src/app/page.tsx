import Header from "@/components/header.component";
import { GetServerSideProps } from "next";
import { Comment } from "@/utils/types";
import TableComments from "@/components/comments.table";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data:Comment[]  = await res.json();
  return (
    <>
      <Header />
      <section className="h-full pt-20">
        <div className="max-w-4xl mx-auto flex justify-center items-center">
          <TableComments comments={data} />
        </div>
      </section>
    </>
  );
}
