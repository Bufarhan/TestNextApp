import axios from "axios";
import Image from 'next/image';

export async function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const post = await getPost(slug)

	return {
		props: {
			post: post
		}
	}
}

export async function getStaticPaths() {

	const posts = await getPosts()

	const slugs = posts.map((post) => {
		return post.id.toString()
	})

	const pathWithTitles = slugs.map((slug) => ({ params: { slug } }))

	return {
		paths: pathWithTitles,
		fallback: false
	}
}

const getPosts = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data;
}

const getPost = async (id) => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

	return data;
}

function getBlogIdDetails({ post }) {
	return (
		<div>
			<Image
				src="/test.webp"
				alt="Picture of the author"
				width={100}
				height={50}
			/>
			<h1><strong>{post.title} </strong> </h1>
			<br />
			<p>{post.body}</p>
		</div>
	)
}

export default getBlogIdDetails;