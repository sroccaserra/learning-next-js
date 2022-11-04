import dynamic from 'next/dynamic';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData, Params, PostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

const Plot = dynamic(import('react-plotly.js'), {ssr: false});

type Props = {postData: PostData}

export default function Post({postData}: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <Plot data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths: {params: Params}[] = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    throw Error('Missing params');
  }
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
