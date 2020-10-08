import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function NumberInput({ name, value, onDecreasevalue, onIncrementvalue, onChangevalue }) {

    return (
        <>
            <InputGroup>
                <InputGroup.Prepend onClick={() => onDecreasevalue(name)}>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="text" name={name} value={value} onChange={(e) => onChangevalue(e)} />
                <InputGroup.Append onClick={() => onIncrementvalue(name)}>
                    <InputGroup.Text>+</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </>
    )
}
