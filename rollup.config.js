import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
  // Main build
  {
    input: 'components/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        exclude: ['**/*.test.*', '**/*.spec.*', 'app/**/*'],
        declaration: false, // We'll generate types separately
      }),
    ],
    external: ['react', 'react-dom', 'next-themes', 'lucide-react', 'prismjs'],
  },
  // Type definitions
  {
    input: 'components/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        tsconfig: './tsconfig.build.json',
      }),
    ],
    external: ['react', 'react-dom', 'next-themes', 'lucide-react', 'prismjs'],
  },
];
