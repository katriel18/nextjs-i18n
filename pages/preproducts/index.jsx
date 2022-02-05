import Link from "next/link";
import { useRouter } from "next/router";

export default function Products({ data }) {
  //console.log('data: ',data.length)// consola visual & consola navegador

  const router = useRouter();
  //console.log("router: ", router);

  return (
    <div>
      <br />

      <Link href="/">
        <a>Volver</a>
      </Link>

      <main>
        <h1>PreProducts: {data.length}</h1>
        {data.map((x) => (
          <h2 key={x.id}>
            {x.id}. {x.name}
          </h2>
        ))}
      </main>

      <Link href={router.asPath} locale={router.locale === "en" ? "es" : "en"}>
        <a>Change Languague</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  //console.log("contextStatic: ", context);

  const res = await fetch(
    `http://localhost:1337/products?_locale=${context.locale}`
  );
  const data = await res.json();

  //console.log('data: ',data.length)// consola visual

  return { props: { data } };
}
