import React, {Component} from 'react';
import "./WidgetProducts.scss"


class WidgetProducts extends Component {
    render() {
        return (
            <div name="WidgetProducts" className={"widgetProducts__box"}>
                <div className={"widgetProducts__widgets"}><span>METRYCZKI</span></div>
                <div className={"widgetProducts__widgets"}><span>KARTKI</span></div>
                               <div className={"widgetProducts__widgets"}><span>BOXY</span></div>
            </div>
        )
    }
}


export default WidgetProducts;