export const debugLog = (key: string, value: any): void => {
  if (process.env.NEXT_PUBLIC_MODE) {
    console.log(key, value);
  }
};
