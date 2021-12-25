import React from 'react';
import './App.css';
//
// This is the menu that shows up when we hover on 'menu'
//
const HoverMenu = React.memo(() => {
  return (
    <ul className="nav fontCustom2">
      <li className="border menuitems menuitem1">
        <span>SPECTACLES</span>
        <ul className="nav2">
          <li className="border menuitemssub1 menuitemsub1">
            <span>WOMEN</span>
          </li>
          <li className="border menuitemssub1 menuitemsub1">MEN</li>
        </ul>
      </li>

      <li className="border menuitems menuitem2">
        <span>SUNGLASSES</span>
        <ul className="nav3">
          <li className="border menuitemssub2 menuitemsub2">
            <span>WOMEN</span>
          </li>
          <li className="border menuitemssub2 menuitemsub2">MEN</li>
        </ul>
      </li>
      <li className="border menuitems menuitem3">HOMETRY ON</li>
      <li className="border menuitems menuitem4">PAIR FOR PAIR</li>
    </ul>
  );
});

export default HoverMenu;
