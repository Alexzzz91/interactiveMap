import { createWriteStream, unlink } from 'fs';
import shortId from 'shortid';
import { joinPath } from '../../../../common/utils/path';

/**
 * Stores a GraphQL file upload in the filesystem.
 * @param {Promise<object>} upload GraphQL file upload.
 * @returns {Promise<string>} Resolves the stored file name.
 */
export default async function storeUpload(upload: any) {
  const { createReadStream, filename } = await upload;
  const stream = createReadStream();
  const storedFileName = `${shortId.generate()}-${filename}`;

  const storedFileUrl = joinPath(`assets/img/uploadImgs/${storedFileName}`);

  // Store the file in the filesystem.
  await new Promise((resolve, reject) => {
    // Create a stream to which the upload will be written.
    // @ts-ignore
    const writeStream = createWriteStream(storedFileUrl);

    // When the upload is fully written, resolve the promise.
    writeStream.on('finish', resolve);

    // If there's an error writing the file, remove the partially written file
    // and reject the promise.
    writeStream.on('error', (error) => {
          // @ts-ignore
      unlink((storedFileUrl), () => {
        reject(error);
      });
    });

    // In Node.js <= v13, errors are not automatically propagated between piped
    // streams. If there is an error receiving the upload, destroy the write
    // stream with the corresponding error.
        // @ts-ignore
    stream.on('error', (error) => writeStream.destroy(error));

    // Pipe the upload into the write stream.
    stream.pipe(writeStream);
  });

  return storedFileName;
}
