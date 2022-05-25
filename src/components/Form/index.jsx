import React from 'react';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      cover: '',
      apple: '',
      spotify: '',
      highlighted: false,
    }
  }

  setFieldValue = (event, field) => {
    this.setState({[field]: event.target.value})
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className='form-wrapper'>
      <input name="title" id="title" className="field" type="text" placeholder="Заголовок поста" value={this.state.title} onChange={e => this.setFieldValue(e, 'title')}/>
      <textarea name="description" id="description" className="description-field" placeholder="Текст поста" value={this.state.description} onChange={e => this.setFieldValue(e, 'description')}></textarea>
      <input name="cover" id="cover" className="field" type="text" placeholder="Ссылка на картинку" value={this.state.cover} onChange={e => this.setFieldValue(e, 'cover')}/>
      <input name="apple" id="apple" className="field" type="text" placeholder="Ссылка на Apple Music" value={this.state.apple} onChange={e => this.setFieldValue(e, 'apple')}/>
      <input name="spotify" id="spotify" className="field" type="text" placeholder="Ссылка на Spotify" value={this.state.spotify} onChange={e => this.setFieldValue(e, 'spotify')}/>
      <label>
          <input type="checkbox" name="highlighted" id="highlighted" value={this.state.highlighted} onChange={e => this.setState({highlighted: e.target.checked})}/>
          <span className="highlight-checkbox-caption">Подсветить</span>
      </label>
      <button className="create-post-button" onClick={this.handleSubmit}>Создать пост</button>
    </div>
    )
  }
}

export default Form;
