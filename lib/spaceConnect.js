import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

let cached = global.S3CLient;

if (!cached) {
    cached = global.S3Client = { config: null, Client: null };
}

async function S3Connect() {
    if (cached.Client) {
        return cached.Client
    }

    const S3ClientConfiguration = {
        endpoint: "https://fra1.digitaloceanspaces.com", // Find your endpoint in the control panel, under Settings. Prepend "https://".
        region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
        credentials: {
            accessKeyId: process.env.SPACES_ACCESSKEY, // Access key pair. You can create access key pairs using the control panel or API.
            secretAccessKey: process.env.SPACES_SECRET // Secret access key defined through an environment variable.
        }
    };

    const client = new S3Client(S3ClientConfiguration);

    cached.Client = client;
    cached.config = S3ClientConfiguration;
    return cached.Client;
}

export default S3Connect;

const initialParams = {
    Bucket: "postrai-storage/", // The path to the directory you want to upload the object to, starting with your Space name.
    Key: "", // Object key, referenced whenever you want to access this file later.
    Body: {}, // The object's contents. This variable is an object, not a string.
    ACL: "private", // Defines ACL permissions, such as private or public.
    Metadata: { // Defines metadata tags.
        "x-amz-meta-my-key": ""
    }
};
