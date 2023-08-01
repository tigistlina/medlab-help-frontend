import React from "react";
import PropTypes from 'prop-types';
import Panel from './Panel';

interface PanelListProps {
    id: number,
    name: string,
    organID: number,
    panelData: {},
}

const PanelList = (props: PanelListProps) => {
    const getPanelList = (panels) => {
        return panels.map((panel) => {
            return (
                <Panel
                    id={panel.id}
                    name={panel.name}
                    organID={panel.organID}
                    key={panel.id}
                />
            );
        });
    };

    return (
        <section>
            <ul>
                <li>{getPanelList(props.panelData)}</li>
            </ul>    
        </section>
    );
};

export default PanelList;