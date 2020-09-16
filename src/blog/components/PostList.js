import React, { useEffect } from 'react';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';

const PostList = ({ posts, fetchPostsAndUsers }) => {
    useEffect(() => {
        fetchPostsAndUsers();
    }, [fetchPostsAndUsers]);

    const renderList = posts.map(post => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader id={post.userId} />
                </div>
            </div>
        )
    });

    return (
        <div className="ui relaxed devided list">{renderList}</div>
    );
};

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);