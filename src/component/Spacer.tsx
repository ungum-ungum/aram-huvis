import React from 'react'

import { Property } from 'csstype'

type Props = {
    backgroundColor?: string
    paddingLeft?: number
    paddingRight?: number
    flex?: number
    testBorderActive?: boolean
} & ({
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    marginBottom?: number
    height?: never
    width?: never
} | {
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    marginBottom?: number
    height: Property.Height<string | number>
    width?: never
} | {
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    marginBottom?: number
    height?: never
    width: Property.Width<string | number>
})
export const Spacer = (props: Props) => {
    return (
        <div
            style={{
                marginLeft: props.marginLeft,
                marginRight: props.marginRight,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                paddingLeft: props.paddingLeft,
                paddingRight: props.paddingRight,
                flex: props.flex,
                height: props.height ?? undefined,
                width: props.width ?? undefined,
                backgroundColor: props.backgroundColor,
                borderColor: props.testBorderActive === true ? 'red' : undefined,
                borderWidth: props.testBorderActive === true ? 1 : undefined,
                borderStyle: props.testBorderActive === true ? 'solid' : undefined,
            }}
        />
    )
}
