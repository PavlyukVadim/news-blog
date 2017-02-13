import React, { Component } from 'react';



class PostElement extends Component {
	render() {
		return (
			<div className="Admin">
		      	<div>
					<p className="title">{ this.props.post.title }</p>
					<div>
						<div className="bg-wrap"></div>
						<img src={ this.props.post.image } alt="news"></img>
						<p className="stats">
							<span className="views">
								<i className="fa fa-eye"></i>
								<span className="n-views">{ this.props.post.views }</span>
							</span>	
							<time dateTime={ this.props.post.date }>{ this.props.post.date }</time>
						</p>
					</div>
		      	</div>
          	</div>
		);
    }	
}


class Admin extends Component {

	
	constructor(props) {
    	super(props);
    	this.state = {};
  	}

	componentDidMount() {
		this.props.APIAccess.getPosts()
    		.then(json => this.setState( { posts: json.reverse() } ) );
	}
	

    render() {
		console.log(this.state);
		let postElements = "" 
		if ( this.state.posts ) {
			postElements = this.state.posts.map((post) =>
				<PostElement key={post.id} post={post} />
			);
		}
		
        return (
        	<div>
            	{postElements}
            </div> 
        );
    }
}

export default Admin;
