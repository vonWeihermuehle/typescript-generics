export function getFieldsWithType(type: any){
    let dummy = instanciate(type)

    const fieldsWithType: Array<Object> = Object.keys(dummy).map(k => {
        return { key: k, value: getTypeOf(dummy, k) }
        });
        return fieldsWithType
}

function instanciate<T extends Object>(type: (new (...args: any[]) => T), ...args: any[]): T {
    return new type(...args);
}

function getTypeOf<T>(data: T, key: string) {
    return typeof data[key as keyof typeof data]
}
