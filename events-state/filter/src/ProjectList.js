import React from 'react';

class ProjectList extends React.Component {
    render() {
        return <div className='images'>
            {this.props.data.map((image, i) => {
                return <figure key={`${image.img}-${i}`}>
                    <img src={image.img} />
                </figure>
            })}
        </div>
    }
}

export default ProjectList;