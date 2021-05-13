/* Copyright Contributors to the Open Cluster Management project */

import React, { useState, useEffect, Fragment } from 'react'
import {
    DataList,
    DataListCell,
    DataListCheck,
    DataListControl,
    DataListDragButton,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
} from '@patternfly/react-core'
import { AcmDropdown } from '../AcmDropdown'

const dropdownItems = [
    { id: 'delete data-item', text: 'Delete' },
]

export function AcmDataListForm() {
    const [copied, setCopied] = useState<boolean>(false)
    useEffect(() => {
        /* istanbul ignore if */
        if (copied) {
            setTimeout(() => setCopied(false), 2000)
        }
    }, [copied])
    return (
        <Fragment>
            <DataList aria-label="list-1">
                <DataListItem>
                    <DataListItemRow>
                        <DataListControl>
                            <DataListDragButton
                                aria-label="Reorder"
                                aria-labelledby="simple-item1"
                                aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                                aria-pressed="false"
                                isDisabled
                            />
                            <DataListCheck aria-labelledby="simple-item1" name="check1" otherControls />
                        </DataListControl>
                        <DataListItemCells
                            dataListCells={[
                                <DataListCell key="item1">
                                    <span id="simple-item1">Item 1</span>
                                </DataListCell>,
                            ]}
                        />
                        <div style={{ alignSelf: 'center' }}>
                            <AcmDropdown
                                isDisabled={false}
                                tooltip=""
                                id="dropdown"
                                onSelect={() => {}}
                                text=""
                                dropdownItems={dropdownItems}
                                isKebab={true}
                                isPlain={true}
                                isPrimary={true}
                            ></AcmDropdown>
                        </div>
                    </DataListItemRow>
                </DataListItem>
            </DataList>
        </Fragment>
    )
}
