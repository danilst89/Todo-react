import React, {Component} from 'react';
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import SearchPanel from "../search-panel/search-panel";
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 60px auto;
    max-width: 800px;
`;

// const styledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `; В случае если нам нужно наследование


export default class App extends Component {
    state = {
        data: [
            {label: 'Drink Coffee', important: false, like: false, id: 1},
            {label: 'Going to learn React', important: false, like: false, id: 2},
            {label: 'Go to school', important: false, like: false, id: 3},
        ],
		term: '',
		filter: 'all',
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    };

    maxId = () => {
		return Math.floor(Math.random() * 1000000);
	};

	// label: text.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '),

    addItem = (text) => {
        const newItem = {
			label: text[0].toUpperCase() + text.slice(1),
            important: false,
            id: this.maxId()
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    };

	onToggleLiked = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const oldItem = data[index];
			const newItem = {...oldItem, like: !oldItem.like};

			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArr = [...before, newItem, ...after];

			return {
				data: newArr
			}
		});
	};

	onToggleImportant = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const oldItem = data[index];
			const newItem = {...oldItem, important: !oldItem.important};

			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArr = [...before, newItem, ...after];

			return {
				data: newArr
			}
		});
	};

	filterPost = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	};

	searchPost = (data, term) => {
		if (term.length === 0) {
			return data;
		}
		return data.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
	};

	onUpdateSearch = (term) => {
		this.setState({
			term
		});
	};

	onFilterSelect = (filter) => {
		this.setState({
			filter
		});
	};

    render() {
    	const {data, term, filter} = this.state;
    	const liked = this.state.data.filter(item => {
    		return item.like;
		}).length;
    	const all = this.state.data.length;

		const visiblePost = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader liked={liked} all={all}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList onDelete={this.deleteItem} mas={visiblePost}
						  onToggleImportant={this.onToggleImportant}
						  onToggleLiked={this.onToggleLiked}
				/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    };
};