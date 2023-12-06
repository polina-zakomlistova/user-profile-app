const idInput = (name: string, id?: string): string => (id ? `field-${name}${-id}` : `field-${name}`);

const idButton = (name: string, id?: string): string => (id ? `button-${name}${-id}` : `button--${name}`);

const idOption = (
    nameGroup: string,
    nameOption: string | number | readonly string[],
    id?: string,
): string => (id ? `field-${nameGroup}-option-${nameOption}${-id}` : `field-${nameGroup}-option-${nameOption}`);

export { idInput, idButton, idOption };
