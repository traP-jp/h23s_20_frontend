export interface Tree{
    "point" : number
    "branch_count": number
    "leaves": {
        "x": number
        "y": number
        "color": string
        "size": "small" | "middle" | "large"
    }
}