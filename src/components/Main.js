import PropTypes from 'prop-types'
import React from 'react'
import Team from "./articles/Team"
import articles from "./articles"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    this.state = {
      articles
    }
  }

  renderArticleBody(article) {
    console.log(article)
    switch(article.type) {
      case 'team':
        return <Team { ...article.description } />
      default:
        return article.body()
    }
  }

  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {this.state.articles.map((article) => 
          <article
            id={article.id}
            className={`${this.props.article === article.id ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
            >
              <h2 className="major">{article.title}</h2>
              
              {this.renderArticleBody(article)}

              {this.close}
            </article>
        )}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
