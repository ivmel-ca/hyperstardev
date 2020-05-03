import React from "react";

import TabItem from "../tab-item/tab-item.component";
import SubList from "../sub-list/sub-list.component";

import './list.styles.scss';

import { formattedApi } from "./utils";


const WithSubListTabItem = SubList(TabItem);

export const HideAll = React.createContext(null);
export const ShowAll = React.createContext(null);

class List extends React.Component  {
    state = {
        api: JSON.parse(formattedApi),
        isHideAll: false,
    }
    
    closeOpenedList = event => {
        event.stopPropagation();
        
        this.setState({
            isHideAll: true
        });
    }
    
    enableClick = () => {
        this.setState({
            isHideAll: false,
        });
    }
    
    render() {
        const { api, isHideAll } = this.state;
        return (
            <ul className="list">
                <ShowAll.Provider value={ this.enableClick }>
                    <HideAll.Provider value={ this.closeOpenedList }>
                        {
                            api.data.map((continent, index) =>
                                <WithSubListTabItem
                                    key={  index }
                                    name={ continent.name }
                                    children={ !isHideAll ? continent.children : null }
                                />)
                        }
                    </HideAll.Provider>
                </ShowAll.Provider>
            </ul>
        );
    }
}

export default List;