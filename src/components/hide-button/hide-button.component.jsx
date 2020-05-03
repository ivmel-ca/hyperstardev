import React from "react";

import { HideAll } from '../list/list.component';

import './hide-button.styles.scss';

const HideButton = () => (
    <HideAll.Consumer>
        {closeOpenedList =>
            <button className="hide-button" type="button" onClick={ closeOpenedList }>Hide All</button>
        }
    </HideAll.Consumer>
);

export default HideButton;