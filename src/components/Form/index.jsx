import React from 'react';
import cx from 'classnames';
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
      errors: {
        title: false,
        description: false,
        cover: false,
        apple: false,
        spotify: false,
      }
    }
  }

  handleChangeField = (event, field) => {
    this.setState({[field]: event.target.value, errors: {...this.state.errors, [field]: false}})
  }

  validateFields = async () => {
    return new Promise(resolve => {
      this.setState({
        errors: {
          title: !this.state.title,
          description: !this.state.description,
          cover: !this.state.cover,
          apple: !this.state.apple,
          spotify: !this.state.spotify
        }
      }, () => resolve(!Object.values(this.state.errors).some(error => Boolean(error))))
    })
  }

  handleSubmit = async () => {
    if (!(await this.validateFields())) {
      return;
    }
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      cover: this.state.cover,
      links: {
        apple: this.state.apple,
        spotify: this.state.spotify,
      },
      highlighted: this.state.highlighted,
    })
    this.clearFields()
  }

  clearFields = () => {
    this.setState({
      title: '',
      description: '',
      cover: '',
      apple: '',
      spotify: '',
      highlighted: false,
      errors: {
        title: false,
        description: false,
        cover: false,
        apple: false,
        spotify: false,
      }
    })
  }

  render() {
    return (
      <div className='form-wrapper'>
      <input name="title" id="title" className={cx("field", this.state.errors.title && 'field_error')} type="text" placeholder="Заголовок поста" value={this.state.title} onChange={e => this.handleChangeField(e, 'title')}/>
      <textarea name="description" id="description" className={cx("description-field", this.state.errors.description && 'field_error')} placeholder="Текст поста" value={this.state.description} onChange={e => this.handleChangeField(e, 'description')}></textarea>
      <input name="cover" id="cover" className={cx("field", this.state.errors.cover && 'field_error')} type="text" placeholder="Ссылка на картинку" value={this.state.cover} onChange={e => this.handleChangeField(e, 'cover')}/>
      <input name="apple" id="apple" className={cx("field", this.state.errors.apple && 'field_error')} type="text" placeholder="Ссылка на Apple Music" value={this.state.apple} onChange={e => this.handleChangeField(e, 'apple')}/>
      <input name="spotify" id="spotify" className={cx("field", this.state.errors.spotify && 'field_error')} type="text" placeholder="Ссылка на Spotify" value={this.state.spotify} onChange={e => this.handleChangeField(e, 'spotify')}/>
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
