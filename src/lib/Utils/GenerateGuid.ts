export const GenerateGuid = (): string => {
    let result = '';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-=+:;?/><.,}{][';
    const count = 24;
    for (let i = 0; i < count; i++) {
        const random = Math.floor(Math.random() * letters.length);
        result += letters[random];
    }
    return result;
}