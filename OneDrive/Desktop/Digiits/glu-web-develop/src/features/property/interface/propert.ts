export interface Property {
    id: string;
    bedroom: string;
    image: string;
    price: string;
    Location: string;
    description: string;
    likes: string;
    saved: string;
    replies: []

}
export interface PropertyProp {
    propertyList: Property
}
export interface PropertyContentProps{
    properties: Property[]
    loading: boolean
}