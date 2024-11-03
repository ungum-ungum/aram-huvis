import { Property } from 'csstype'

// interface Props {
//     flexDirection?: Property.FlexDirection
//     flex?: number
//     backgroundColor?: string
//     paddingVertical?: number
//     paddingHorizontal?: number
//     testBorderActive?: boolean
//     gap?: number
//     alignItems?: Property.AlignItems
//     justifyContent?: Property.JustifyContent
//     height?: Property.Height | number
//     width?: Property.Width | number
//     position?: Property.Position
//     bottom?: Property.Bottom | number
//     children?: React.ReactNode
// }

const Stack = (props: React.CSSProperties & { children?: React.ReactNode }) => {
    return <div style={{
        flexDirection: props.flexDirection,
        backgroundColor: props.backgroundColor,
        flex: props.flex,
        display: 'flex',
        ...props,
    }}>{props.children}</div>
}

export const VStack = (props: React.CSSProperties & { children?: React.ReactNode }) => {
    return <Stack {...props} flexDirection={'column'}/>
}

export const HStack = (props: React.CSSProperties & { children?: React.ReactNode }) => {
    return <Stack {...props} flexDirection={'row'}/>
}
