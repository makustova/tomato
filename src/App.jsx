import initialData from './initialData';
import Post from './components/Post';
import Form from './components/Form';
import Layout from './components/Layout';
import Title from './components/Title';

function App() {
    return (
        <Layout>
            <Title>Posts</Title>
            {initialData.map(post => <Post post={post} key={post.id} />)}
            <Form />
        </Layout>
    )
}

export default App;
