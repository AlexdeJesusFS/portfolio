import styled from "styled-components";
import WhatsappIcon from "../../assets/contacts/whatsapp";
import CursorPointer from "../../assets/cursor/cursorPointer";
import CursorDefault from "../../assets/cursor/cursorDefault";
import CursorText from "../../assets/cursor/cursorText";


export const StyledWhatsappIcon = styled(WhatsappIcon)<{color?: string, size?: string}>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    color: ${(props) => props.color};
`

export const StyledCursorPointer = styled(CursorPointer)<{color?: string, width?: string, height?: string}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
`

export const StyledCursorDeafult = styled(CursorDefault)<{color?: string, width?: string, height?: string}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
`

export const StyledCursorText = styled(CursorText)<{color?: string, width?: string, height?: string}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.color};
`
