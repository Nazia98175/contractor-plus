import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string; // 🔐 Replace with env var in production

export const setEncryptedItem = (key: string, value: any) => {
  try {
    const jsonData = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(jsonData, SECRET_KEY).toString();
    console.log('Encrypted Data:', encrypted); // Debugging line
    localStorage.setItem(key, encrypted);
  } catch (error) {
    console.error('Error encrypting localStorage data:', error);
  }
};

export const getDecryptedItem = (key: string) => {
  try {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;

    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Error decrypting localStorage data:', error);
    return null;
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
