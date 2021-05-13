/* Copyright Contributors to the Open Cluster Management project */

import React from 'react'
import { Card, CardBody } from '@patternfly/react-core'
import { AcmDataListForm } from './AcmDataListForm'


export default {
    title: 'DataListForm',
    component: AcmDataListForm,
}

export const InlineCopy = () => {
    return (
        <Card>
            <CardBody>
                <AcmDataListForm />
            </CardBody>
        </Card>
    )
}
