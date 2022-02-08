import Link from "next/link";
import { useRouter } from "next/router";

export default function Products({ data }) {

  const router = useRouter();
  
  //Hay un bug cuando no hay data del otro idioma
  return (
    <div>
      <Link href="/">
        <a>Volver</a>
      </Link>

      <main>
        <h1>PreProducts: {data.length}</h1>
        {data.map((x) => (
          <div key={x.id}>
            <h2>
              {x.id}. {x.name}
            </h2>
            <span>{x?.connect}</span>
            <br></br>
            <Link
              href={x.connect ? `/preproducts/${x.connect}` : `/preproducts`}
            >
              <a>ir</a>
            </Link>
          </div>
        ))}
      </main>
      <br></br>
      <Link href={router.asPath} locale={router.locale === "en" ? "es" : "en"}>
        <a>Change Languague</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/products?_locale=${context.locale}`
  );
  const data = await res.json();

  return { props: { data } };
}
