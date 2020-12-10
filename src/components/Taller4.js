import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import articles from './articles'

const Taller4 = props => (
  <></>
  // <header id="header">
  //   <nav>
  //     <ul>
  //       {articles['segmentation'].map(article => (
  //         <li key={`li_${article.id}`}>
  //           <button
  //             onClick={() => {
  //               props.onOpenArticle(article.id)
  //             }}
  //           >
  //             {article.title}
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // </header>
)

Taller4.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller4
