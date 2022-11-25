import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Hoa Thịnh Hành',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Hoa Thịnh Hành',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg'
        }
    ]

    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;