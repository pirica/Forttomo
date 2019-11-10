import React from 'react';
import './WishlistView.scss';
import WishlistItem from './WishlistItem';

function WishlistView() {
    return (
        <div className='section'>
            <h3>Wishlist</h3>
            <div className='timeline_view card'>
                <WishlistItem
                    name='Whatever'
                    category='uncommon outfit'
                    price='1500'
                />
            </div>
        </div>
    );
}

export default WishlistView;
