import React from 'react';
import Upperheader from '../UpperHeader/Upperheader';
import MainHeader from '../MainHeader/MainHeader';
import Menu from '../Menu/Menu';


const Header = () => {
    return (
        <div>
            <Upperheader></Upperheader>
            <MainHeader></MainHeader>
            <Menu></Menu>
        </div>
    );
};

export default Header;