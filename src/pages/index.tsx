// SPA - fecth dentro de um useEffect, por exemplo. Contra: problemas com indexação
// SSR - função getServerSideProps do Next para fazer a requisição antes de enviar o html para o browser. 
// Podendo receber o resultado da requisição pelas props do componente
// SSG - função getStaticProps com a option revalidate. Isso permite que seja sempre entregue uma página estática,
// que será reconstruída apenas de acordo com tempo (em segundos) passado na option revalidate.

export default function Home({ episodes }) {
  return (
    <div>
      <h1>index</h1>
      <p>{JSON.stringify(episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
