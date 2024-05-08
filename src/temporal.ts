import { Connection, Client } from '@temporalio/client';

import { Config } from './config';
import { getFileFromGCS } from './gcp';


export const getTemporalCerts = async () => {
  const [crt, key] = await Promise.all([
    getFileFromGCS("ca.pem", Config.TEMPORAL_GCS_BUCKET),
    getFileFromGCS("ca.key", Config.TEMPORAL_GCS_BUCKET),
  ]);
  return { crt, key }
}

export const getTemporalClient = async () => {
  const clientCertPair = await getTemporalCerts();
  const connection = await Connection.connect({
    address: Config.TEMPORAL_HOST,
    tls: { clientCertPair },
  });

  return new Client({
    connection,
    namespace: Config.TEMPORAL_NAMESPACE
  })
}
