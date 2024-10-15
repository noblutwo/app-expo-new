export interface ValueItem {
    sdd: string;
    date: string;
    sex: string;
    relationship: string;
    name?: string;
}

// Define the structure of the dropdown props
export interface Dropdown {
    data: any; // This can be more specific if you know the structure
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    value: any; // This must match the ValueItem structure
}