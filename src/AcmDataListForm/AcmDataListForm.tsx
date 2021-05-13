/* Copyright Contributors to the Open Cluster Management project */

import React, { useState, useEffect, Fragment } from 'react'
import {
    Button,
    DataList,
    DataListCell,
    DataListCheck,
    DataListControl,
    DataListDragButton,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
    InputGroup,
    TextInput,
} from '@patternfly/react-core'
import { AcmDropdown } from '../AcmDropdown'
import { AcmTextInput } from '../AcmTextInput/AcmTextInput'
import AddIcon from '@patternfly/react-icons/dist/js/icons/add-circle-o-icon'

const dropdownItems = [{ id: 'delete data-item', text: 'Delete' }]

/* TODO:
    - validation
    - delete
    - reordering
    - *make pretty*
*/
export function AcmDataListForm() {
    const [jobInput, setJobInput] = useState('')
    const [jobList, setJobList] = useState<Array<string>>([])

    return (
        <Fragment>
            <InputGroup>
                <TextInput
                    name="textInput11"
                    id="textInput11"
                    type="search"
                    aria-label="search input example"
                    value={jobInput}
                    onChange={setJobInput}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            const newJobArray = [...jobList, jobInput]
                            console.log('new array: ', newJobArray)
                            setJobList(newJobArray)
                            setJobInput('')
                            console.log('clicked')
                        }
                    }}
                />
                <Button
                    variant="control"
                    aria-label="search button for search input"
                    onClick={() => {
                        const newJobArray = [...jobList, jobInput]
                        setJobList(newJobArray)
                        setJobInput('')
                    }}
                >
                    <AddIcon />
                </Button>
            </InputGroup>
            {jobList.map((job) => (
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
                                        <span id="simple-item1">{job}</span>
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
            ))}
        </Fragment>
    )
}
