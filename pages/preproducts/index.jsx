import Link from 'next/link'

export default function Products({ data }) {
  //console.log('data: ',data.length)// consola visual / consola navegador

  return (
    <div>
      <Link href="/"><a>Volver</a></Link>
      <main>
        <h1>PreProducts: {data.length}</h1>
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
  //console.log('data: ',data.length)// consola visual

  return { props: { data } };
}
