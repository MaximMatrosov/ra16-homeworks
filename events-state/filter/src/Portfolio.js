import React from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: "All" };
    }

    onSelectFilter = (filter) => {
        this.setState({ selected: filter });
    }

    render() {
        const filters = ["All"];
        this.props.data.forEach((image) => {
            if (!filters.includes(image.category)) {
                filters.push(image.category);
            }
        });

        const filterdData = this.state.selected === "All" ?
            this.props.data :
            this.props.data.filter((image) => {
                return image.category === this.state.selected;
            });

        return <>
            <Toolbar filters={filters} onSelectFilter={this.onSelectFilter} selected={this.state.selected} />
            <ProjectList data={filterdData}/>
        </>
    }
}

export default Portfolio;