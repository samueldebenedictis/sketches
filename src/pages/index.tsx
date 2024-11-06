import HomePage, { HomePageProps } from 'components/_pages/Home';
import type { GetStaticProps, NextPage } from 'next';
import getSketches from 'util/getSketches';

const Home: NextPage<HomePageProps> = ({ data }) => <HomePage data={data} />;

export const getStaticProps: GetStaticProps = async () => {
  const sketches = await getSketches();

  return { props: { data: { sketches } } };
};

export default Home;
