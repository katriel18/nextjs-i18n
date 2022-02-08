import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductsID( { data } ) {

  const router = useRouter();

  return (
    <div>
      <br />

      <Link href="/">
        <a>Volver</a>
      </Link>

        <h1>PreProduct: {data.id}</h1>
          <h2 >
            {data?.name}
          </h2>
          <h2 >
            {data?.description}
          </h2>

      <Link href={router.asPath}  locale={router.locale === "en" ? "es" : "en"}>
        <a>Change Languague</a>
      </Link>
    </div>
  );
}

export async function getStaticPaths( { locales } ) {

  const paths = []
  const products=["p","r"]

  locales.forEach((locale, i) => {
    products.forEach((p, i) => {
      paths.push( { params: { id: p }, locale } )
    });
  });

  return { paths, fallback: false }
}

export async function getStaticProps( context ) {

  const res = await fetch(
    `http://localhost:1337/products?_where[connect]=${context.params.id}&_locale=${context.locale}`
  );
  const data = await res.json();

  return { props: { data:data[0] } };
}
