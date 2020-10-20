import PropTypes from 'prop-types'
import React from 'react'
import Team from './articles/Team'
import articles from './articles'

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

    let tmpArticles = []
    if (typeof window !== 'undefined') {
      tmpArticles = articles[window.location.pathname.replaceAll('/', '')]
    }

    this.state = {
      articles: tmpArticles,
    }
  }

  renderArticleBody(article) {
    switch (article.type) {
      case 'team':
        return <Team {...article.description} />
      default:
        return article.body()
    }
  }

  renderArticle(article) {
    if (this.props.dialogMode) {
      return (
        <div
          key={`art_${article.id}`}
          ref={this.props.setWrapperRef}
          id="main"
          style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
        >
          <article
            id={article.id}
            key={article.id}
            className={`${this.props.article === article.id ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">{article.title}</h2>
            {this.renderArticleBody(article)}
            {this.close}
          </article>
        </div>
      )
    } else if (this.props.article === article.id) {
      return (
        <div key={`div_${article.id}`} style={{ margin: '30px 0px' }}>
          <h2 className="major">{article.title}</h2>
          {this.renderArticleBody(article)}
        </div>
      )
    }
  }

  render() {
    console.log()
    return (
      <> {this.state.articles.map(article => this.renderArticle(article))} </>
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
  dialogMode: PropTypes.bool,
}

Main.defaultProps = {
  dialogMode: false,
}

export default Main
