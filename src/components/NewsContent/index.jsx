import React, { Component } from 'react';
import GeneralPreloader from '../GeneralPreloader';
import PostCard from '../PostCard';

class NewsContent extends Component {
  render() {
    let cards;
    if (this.props.isFetching) {
      cards = <GeneralPreloader />
    } else if (this.props.type) {
      cards = this.props.news.map((news) => {
        return (
          <PostCard
            key={news.id}
            info={news}
          />
        );
      });	
    }

    return (
      <div className="grid">
        {cards}
      </div>
    );
  }
}

export default NewsContent;
