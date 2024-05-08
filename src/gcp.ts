import { Storage } from '@google-cloud/storage';

import { Config } from './config';


const storage = new Storage();
export const getFileFromGCS = async (filename: string, bucket: string) => {
  return storage.bucket(bucket)
    .file(filename)
    .download()
    .then(res => Buffer.concat(res))
}
