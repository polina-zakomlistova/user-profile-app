const idInput = (name: string, id?: string): string => {
    return `field-${name}${-id}`;
};

const idButton = (name: string, id?: string): string => {
    return `button-${name}${-id}`;
};

const idOption = (
    nameGroup: string,
    nameOption: string,
    id?: string
): string => {
    return `field-${nameGroup}-option-${nameOption}${-id}`;
};

export { idInput, idButton, idOption };
