import { ResolveOptions } from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      options.paths.src, 'node_modules',
    ],
    mainFiles: ['index'],
    alias: {
      '@entities': path.resolve(options.paths.src, 'entities'),
      '@features': path.resolve(options.paths.src, 'features'),
      '@shared': path.resolve(options.paths.src, 'shared'),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
    },

  };
}
