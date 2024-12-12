import { useEffect, useState } from "react"
import { Property } from "../interface/propert"
import { mockProperty } from "../../../data/mockProperty";

export const useProperties = () => {
    const [properties, setProperties] = useState<Property[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            await new Promise ((resolve) => setTimeout(resolve, 1000));
            setProperties (mockProperty);
            setLoading(false)
        };
        fetchProperty()
    }, []);
    return { properties, loading}
}