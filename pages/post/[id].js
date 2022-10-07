import React from "react";

const PostOne = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default PostOne;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();

  return {
    paths: data.map((d) => ({ params: { id: d.id.toString() } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + params.id);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
