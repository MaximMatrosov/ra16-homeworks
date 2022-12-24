import React from 'react';

class Toolbar extends React.Component {
    render() {
        const {filters, selected, onSelectFilter} = this.props;

        return <div className='filters'>
            {filters.map((filter) => {
                return <button key={filter} className={`filter-btn ${filter === selected ? "selected" : ""}`} onClick={() => {onSelectFilter(filter)}}>{filter}</button>
            })}
        </div>
    }
}

export default Toolbar;