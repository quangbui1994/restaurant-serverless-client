import React from 'react';
import styles from './Gallery.module.css';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import Image1 from '../../assets/img/image1.jpg';
import Image2 from '../../assets/img/image2.jpg';
import Image4 from '../../assets/img/image4.jpg';
import Image3 from '../../assets/img/image3.jpg';
import Image5 from '../../assets/img/image1.jpg';
import Image6 from '../../assets/img/image6.jpg';
import Image7 from '../../assets/img/image7.jpg';
import Image8 from '../../assets/img/image8.jpg';
import Image9 from '../../assets/img/image9.jpg';
import Image10 from '../../assets/img/image10.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginBottom: '20'
    },
    gridList: {
      width: '100%',
      height: 500,
    },
}));

const tileData = [
        {
            img: Image1,
            title: 'Image',
            author: 'author',
            cols: 2,
        },
        {
            img: Image2,
            title: 'Image',
            author: 'author',
            cols: 2,
        }, 
        {
            img: Image3,
            title: 'Image',
            author: 'author',
            cols: 2,
        },
        {
            img: Image4,
            title: 'Image',
            author: 'author',
            cols: 4,
        },
        {
            img: Image5,
            title: 'Image',
            author: 'author',
            cols: 2,
        }, 
        {
            img: Image6,
            title: 'Image',
            author: 'author',
            cols: 4,
        },
        {
            img: Image7,
            title: 'Image',
            author: 'author',
            cols: 4,
        },
        {
            img: Image8,
            title: 'Image',
            author: 'author',
            cols: 4,
        }, 
        {
            img: Image9,
            title: 'Image',
            author: 'author',
            cols: 6,
        },
        {
            img: Image10,
            title: 'Image',
            author: 'author',
            cols: 3,
        },
        {
            img: Image2,
            title: 'Image',
            author: 'author',
            cols: 3,
        }, 
    ];

const Gallery = () => {
    const classes = useStyles();
    
    return (
        <div className={styles.Gallery}>
            <div className="heading"><span>Our Gallery</span></div>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={12}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
};

export default Gallery;