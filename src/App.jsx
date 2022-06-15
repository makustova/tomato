import React from 'react';
import Post from './components/Post';
import Layout from './components/Layout';
import Title from './components/Title';
import FormModal from './components/FormModal';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: true,
            items: [],
            isFormModalOpen: false,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    toggleFormModal = () => {
        this.setState({isFormModalOpen: !this.state.isFormModalOpen})
    }

    fetchData = () => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => this.setState({
                items: data,
                isFetching: false,
            }))
    }

    handleSubmitForm = (post) => {
        fetch('http://localhost:3000/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(post)
        })
        .then(this.fetchData)
    }

    render() {
        if (this.state.isFetching) {
            return <pre>loading</pre>
        }

        return (
            <Layout>
                <Title>Posts</Title>
                {this.state.items.map(post => <Post post={post} key={post.id} onDelete={this.fetchData} />)}
                <FormModal isOpen={this.state.isFormModalOpen} onClose={this.toggleFormModal} onSubmit={this.handleSubmitForm} />
                <button onClick={this.toggleFormModal}>create post</button>
            </Layout>
        )
    }
}

export default App;
