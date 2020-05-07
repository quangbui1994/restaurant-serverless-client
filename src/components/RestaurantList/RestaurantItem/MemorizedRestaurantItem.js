import React from 'react';
import RestaurantItem from './RestaurantItem';

const MemorizedRestaurantItem = React.memo(({ name, city, image, tags, currency, like, addUserList, removeUserList }) => {
    console.log('rerender')
    return <RestaurantItem 
                addUserList={addUserList}
                removeUserList={removeUserList}
                like={like}
                name={name} 
                city={city} 
                image={image} 
                tags={tags} 
                currency={currency}/>
});

export default MemorizedRestaurantItem;