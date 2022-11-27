import { AES, enc } from 'crypto-js';
import { secretKey } from './config/app.config';

const plainText = 'Irsyad Abdul Hamid Darussalam';

const encrypted = AES.encrypt(plainText, secretKey).toString();
const decrypted = AES.decrypt(encrypted, secretKey).toString(enc.Utf8);

console.log({ secretKey, encrypted, decrypted });