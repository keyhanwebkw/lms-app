export interface BaseButton {
    type: "button" | "submit" | "reset" | undefined;
    typeDesign: 'submit' | 'action' | 'simple' | 'outline-action' | 'icon' | 'cancle'
    loading?: boolean
    text?: string | undefined;
    icon?: string | undefined;
    alt?: string | undefined;
    disabled?: boolean
    customDesign?: string | undefined
}

export interface DefultStyleBtn {
    "submit": string
    "action": string
    "simple": string
    "outline-action": string
    "icon" : string
    "cancle" : string
}
