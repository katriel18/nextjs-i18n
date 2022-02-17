import Link from "next/link";
import { useRouter } from "next/router";

export default function Products({ data }) {
  //console.log("data: ", data); // consola visual & consola navegador

  const router = useRouter();
  console.log("router: ", router);

  const section = data.section[0];
  console.log("section: ", section);

  return (
    <div>
      <br />

      <Link href="/">
        <a>Volver</a>
      </Link>

      <main>
        <h1>{section.name} </h1>
      </main>

      <Link href={router.asPath} locale={router.locale === "en" ? "es" : "en"}>
        <a>Change Languague</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("locale: ", context.locale);
  let slug;
  if (context.locale === "es") {
    slug = "home-es";
  } else {
    slug = "home-en";
  }
  const res = await fetch(
    `http://localhost:1337/tests?_where[slug]=${slug}&_locale=${context.locale}`
  );
  const data = await res.json();

  return { props: { data: data[0] } };
}
