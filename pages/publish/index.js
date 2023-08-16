import Head from 'next/head'
import { getSortedPostsData } from '../../lib/publish';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function publish({allPostsData}) {
  return (
    <>
      <Head>
        <h2>
          publish.
        </h2>
      </Head>
      <section>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <h2>{title}</h2>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </section>
      <section>
        <form action="/api/publish" method="post">
          <input type="text" name="title" placeholder="title" required />
          <input type="text" name="content" placeholder="content" required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}