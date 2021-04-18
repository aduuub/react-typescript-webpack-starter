import * as React from 'react';

import { IArticleTile } from 'models/article';

import BlogTile from './blog-tile';

interface IProps {
    flipped?: boolean;
    blue?: boolean;
    articles: IArticleTile[];
}

export default class HomeBlog extends React.Component<IProps> {

  render() {
    // Feature tile
    const isFlipped = this.props.flipped ?? false;
    const feature = <FeatureBlog isLeft={!isFlipped} article={this.props.articles[0]} />;

    // Standard tiles
    const remainingTiles = this.props.articles.slice(1, 4);
    const blogs = (
        <div className='Homeblog-tiles-list'>
            {remainingTiles.map((article, index) => <BlogTile article={article} key={index} />)}
        </div>
    );

    // Both columns (so we can flip it)
    const columns = [feature, blogs];
    if (this.props.flipped) {
        columns.reverse();
    }

    const homeBlogModifier = this.props.blue ? 'HomeBlog--blue' : '';

    return (
        <>
        {this.props.blue ? <div className='HomeBlog-slant'></div> : <></> }
          <div className={'HomeBlog ' + homeBlogModifier}>
            <Header />
            <div className=' HomeBlog-tiles'>
                <div className='Grid u-flex'>
                    <div className='u-width1of2'>
                        {columns[0]}
                    </div>
                    <div className='u-width1of2'>
                        {columns[1]}
                    </div>
                </div>
            </div>
          </div>
        </>
    );
  }
}

// Blog header ===

function Header() {
    return (
        <div className='HomeBlog-header'>
            <p className='HomeBlog-header-leading'>My thoughts on</p>
            <h2 className='HomeBlog-header-main'>Project management</h2>
            <p>I have a project management company that specialises in turning round renovations quickly. This is
                especially useful when you have tenants wanting to move in quickly, minimising rental loss, or when
                trading a property (buying to renovate and sell).<br /><br />Get in touch to get some assistance with
                your renovation. </p>
        </div>
    );
}

// Feature blog === 

interface IFeatureBlogProps {
    isLeft: boolean;
    article: IArticleTile;
}

function FeatureBlog(props: IFeatureBlogProps) {
    const featureBlogClass = props.isLeft ? 'FeatureBlog--left' : 'FeatureBlog--right';
    return (
        <div className={'FeatureBlog ' + featureBlogClass} >
            <img src={props.article.image} />
            <h4 className='FeatureBlog-title'>{props.article.title}</h4>
            <p>{props.article.body}</p>
        </div>
    );
}
