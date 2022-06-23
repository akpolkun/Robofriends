import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({Robot}) => {
    return (
        <Fragment>
            {
                Robot.map((user, i) => {
                return ( 
                    <Card 
                        key={i} 
                        id={Robot[i].id} 
                        name={Robot[i].name} 
                        username={Robot[i].username} 
                        email={Robot[i].email}
                    />
                )
                })
            }
        </Fragment>
    )
}

export default CardList;