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
import { PlusIcon, MinusIcon } from '@patternfly/react-icons'
import { makeStyles } from '@material-ui/styles'

const dropdownItems = [{ id: 'delete-data-item', text: 'Delete' }]
const useStyles = makeStyles({
    minusIcon: {
        fill: 'var(--pf-c-button--m-control--Color)',
    },
    buttonCell: {
        marginTop: '0px',
    },
    cell: {
        padding: '0px 0px 0px 0px',
    },
})

/* TODO:
    - validation
    - expose list order
    - *make pretty*
*/
export function AcmDataListForm() {
    const [jobInput, setJobInput] = useState('')
    const [jobList, setJobList] = useState<Array<string>>(['test1', 'test2'])
    const [id, setId] = useState('')
    const [itemOrder, setItemOrder] = useState<Array<string>>(['data0', 'data1'])
    const onDragStart = (id) => {
        setId(id)
    }
    const classes = useStyles()
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
                        const newItemOrder = [...itemOrder, `data${itemOrder.length + 1}`]
                        setJobList(newJobArray)
                        setJobInput('')
                    }}
                >
                    <PlusIcon />
                </Button>
            </InputGroup>
            <div style={{ marginBottom: '20px' }}></div>
            <DataList
                isCompact
                aria-label="list-1"
                itemOrder={jobList}
                onDragFinish={(itemOrder) => {
                    setItemOrder(jobList)
                    console.log('itemOrder: ', itemOrder)
                }}
                onDragStart={onDragStart}
            >
                {jobList.map((job, index) => (
                    <DataListItem aria-labelledby={`simple-item-${index}`} id={job} key={`${index}`}>
                        <DataListItemRow>
                            <DataListControl>
                                <DataListDragButton
                                    aria-label="Reorder"
                                    aria-labelledby="simple-item1"
                                    aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                                    aria-pressed="false"
                                />
                            </DataListControl>
                            <DataListItemCells
                                dataListCells={[
                                    <DataListCell key={index}>
                                        <span id={`simple-item-${index}`}>{job}</span>
                                    </DataListCell>,
                                    <DataListCell key={index}></DataListCell>,
                                ]}
                            />
                            <Button
                                isSmall
                                variant="link"
                                onClick={(id) => {
                                    console.log('check id: ', job)
                                    const newData = jobList.filter((item) => job != item)
                                    setJobList(newData)
                                    console.log('check jobs: ', newData)
                                }}
                            >
                                <MinusIcon className={classes.minusIcon} />
                            </Button>
                        </DataListItemRow>
                    </DataListItem>
                ))}
            </DataList>
        </Fragment>
    )
}
