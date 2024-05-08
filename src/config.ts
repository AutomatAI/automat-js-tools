import os from 'os';

import dotenv from "dotenv";
import { nanoid } from 'nanoid';


dotenv.config()


let workerId: string | undefined;
if (!workerId) {
  workerId = nanoid();
}

const generateWorkerName = () => {
  const user = process.env.K_REVISION ?? os.userInfo().username;
  return `${user}@${os.hostname()}-${workerId}`
}

export const Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  TEMPORAL_GCS_BUCKET: process.env.TEMPORAL_GCS_BUCKET ?? 'temporal-cloud',
  TEMPORAL_HOST: process.env.TEMPORAL_HOST ?? 'development.t1cjs.tmprl.cloud:7233',
  TEMPORAL_NAMESPACE: process.env.TEMPORAL_NAMESPACE ?? 'development.t1cjs',
  TEMPORAL_TASK_QUEUE: process.env.TEMPORAL_QUEUE ?? 'ziina-trade-license',
  TEMPORAL_WORKER_IDENTITY: generateWorkerName(),
}
