import axios from "axios";
import Link from "next/dist/client/link";
import Head from "next/head";
import Image from 'next/image';
import { Card, Col, Container, Row } from "react-bootstrap";


const getPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

export async function getServerSideProps(context) {
  const data = await getPosts();

  return {
    props: {
      data: data
    }
  }
}

const Home = ({ data }) => {

  return (
    <div className="container">
      <Head>
        <title>Pokemon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>


        {data && (
          <Row>
            {data?.map(({ id, userId, title, body }) => (
              <Col xs={4} key={id} style={{ padding: 5, border: '1px solid black' }}>
                <Link href={`/post/${id}`}>
                  <Card>

                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Subtitle>{body}</Card.Subtitle>
                      <Image
                        src="/test.webp"
                        alt="Picture of the author"
                        width={100}
                        height={50}
                      />
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;