export interface LocationFilterProps {
    activeInput: string | null;
    setActiveInput: (input: string | null) => void;
    showResetButton?: boolean;
    showCurrentLocationButton?: boolean;
}  