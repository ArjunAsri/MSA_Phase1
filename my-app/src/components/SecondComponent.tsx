import * as React from "react";

export default class SecondComponent extends React.Component <{}> {
        
        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>Paris weather</h1>
                        </div>
                );
        }

        
}