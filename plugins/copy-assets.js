import { promises as fs } from 'fs';
import { resolve } from 'path';

export default function CopyAssetsPlugin() {
  return {
    name: 'copy-assets',
    async writeBundle() {
      const srcDir = resolve(process.cwd(), 'assets');
      const destDir = resolve(process.cwd(), 'dist/assets');

      try {
        await fs.mkdir(destDir, { recursive: true });
        const files = await fs.readdir(srcDir);

        for (const file of files) {
          const srcPath = resolve(srcDir, file);
          const destPath = resolve(destDir, file);
          await fs.copyFile(srcPath, destPath);
        }

        console.log('Assets copied successfully!');
      } catch (error) {
        console.error('Error copying assets:', error);
      }
    }
  };
}
