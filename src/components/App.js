import React from 'react';

import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends React.Component {

  state = {
    articles: []
  }

  render() {
    return (
      <div>
        <h3>Liste de courses</h3>
        < Form formTitle="Ajouter un article" addArticle={this.props.addArticle}  />
        < ItemList articles={this.props.articles}/>
      </div>
    )
  }
} // end class

const addArticleActionCreator = (article) => {
  return {
    type: 'ADD_ARTICLE',
    payload: article
  }
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article));
    }
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
