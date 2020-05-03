import React from "react";

import HideButton from "../hide-button/hide-button.component";
import { ShowAll } from "../list/list.component";

import './tab-item.styles.scss';

const TabItem = ({ name }) => (
    <ShowAll.Consumer>
        {
            enableClick => (
                <div className="tab" onClick={ enableClick }>
                    <h2>{ name }</h2>
                    <HideButton />
                </div>
            )
        }
    </ShowAll.Consumer>
);

export default TabItem;