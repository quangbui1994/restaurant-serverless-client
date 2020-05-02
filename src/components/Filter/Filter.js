import React, { useState } from 'react';
import styles from './Filter.module.css';
import { Button } from '@material-ui/core';
import TextField from '../TextField/TextField';

const Filter = ({ sortAlphabetically, searchRestaurant }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeHandler = searchQuery => {
        setSearchQuery(searchQuery);
        searchRestaurant(searchQuery);
    }

    return (
        <div className={styles.Filter}>
            <TextField 
                label="Search" 
                onChange={e => onChangeHandler(e.target.value)} />
            <button style={{ fontSize: 10 }} onClick={sortAlphabetically}>Sort</button>
        </div>
    )
}

export default Filter;