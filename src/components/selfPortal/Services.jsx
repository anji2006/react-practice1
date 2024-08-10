import { Button, Flex } from 'antd'
import React from 'react'

export default function Services(props) {
    const {gotoNextPage, gotoPreviousPage} = props
    const _buttonsContainer = () => {
        return(
            <Flex justify='flex-end' align='center' gap={6}>
                <Button onClick={gotoPreviousPage}  type="primary">
                    Cancel
                </Button>
                <Button onClick={gotoNextPage} type="primary">
                    Save & Next
                </Button>
            </Flex>
        )
    }
  return (
    <div>Services
        {_buttonsContainer()}
    </div>
  )
}
