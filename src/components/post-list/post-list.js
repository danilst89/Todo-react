import React from 'react';
import PostListItem from "../post-list-item";
import './post-list.css';
import {ListGroup} from 'reactstrap';

const PostList = ({mas, onDelete, onToggleLiked, onToggleImportant}) => {
	const elements = mas.map(item => {
		const {id, ...itemProps} = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem onDelete={() => onDelete(id)} {...itemProps}
							  onToggleImportant={() => onToggleImportant(id)}
							  onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		)
	});

	return (
		<ListGroup className='app-list'>
			{elements}
		</ListGroup>
	)
};

export default PostList;