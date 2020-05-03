import React from "react";

import './sub-list.styles.scss';


const SubList = WrappedComponent => {
    return class InnerComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isActive: false,
            };
        }
    
        toggleSubMenu = () => {
            const { isActive } = this.state;
        
            this.setState({
                isActive: !isActive,
            });
        }
        
        render() {
            const { isActive } = this.state;
            const { name, children, ...otherProps } = this.props;
            
            return (
                children && children.length ? (
                    <li className="sublist__item">
                        <div className="sublist__clickable-wrapper" onClick={ this.toggleSubMenu }>
                            <WrappedComponent name={ name } { ...otherProps } />
                        </div>
                        {
                            isActive ? (
                                <ul>
                                    {
                                        children.map((nestedItem, index) =>
                                            <InnerComponent
                                                name={ nestedItem.name }
                                                children={ nestedItem.children }
                                                key={ index }
                                            />)
                                    }
                                </ul>
                            ) : null
                        }
                    </li>
                ) : (
                    <li className="sublist__item">
                        <WrappedComponent name={ name } { ...otherProps } />
                    </li>
                )
            )
        }
    }
}

export default SubList;