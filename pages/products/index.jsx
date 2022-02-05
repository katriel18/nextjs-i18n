
export default function Products({ data }) {
  //console.log('data: ',data.length)// consola VS / consola navegador

  return (
    <div>
      <main>
        <h1>Products: {data.length}</h1>
        {data.map((x) => (
          <h2 key={x.id}>{x.id}. {x.name}</h2>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {//getServerSideProps//getStaticProps
  const res = await fetch(`http://localhost:1337/products`);
  const data = await res.json();
  //console.log('data: ',data.length)// consola VS / consola navegador

  return { props: { data } };
}
