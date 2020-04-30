import React from "react";
import Pagination from "./Pagination";

class ListWithPagination extends React.Component {

    state = {
        currentPage: 1,
        postsPerPage: 3
    };

    // get pageNumber from Pagination component
    paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    // set first page in list of items in pagination when change list
    componentDidUpdate(prevProps) {
        if(this.props.list !== prevProps.list) {
            this.setState({ currentPage: 1 })
        }
    }

    render() {
        // slice list for setting how much show in list
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.list.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div>
                <ul className={"whowehelp-list"}>
                    { currentPosts.map((el, index) => (
                        <li key={index}><h4>{el.who}</h4><p>{el.purpose}</p>
                            <div className={"whowehelp-what"}>{el.what}</div>
                        </li>
                    ))}
                </ul>
                <Pagination postPerPage={this.state.postsPerPage} totalPost={this.props.list.length}
                            paginate={this.paginate} />
            </div>
        )
    }


}

export default ListWithPagination;