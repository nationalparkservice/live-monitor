'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    electron: {
      linux: {
        options: {
          arch: 'x64',
          dir: 'app',
          name: 'yellowstone-live-heads-up-linux-x64-v<%= pkg.version %>',
          out: 'dist/linux',
          platform: 'linux',
          version: '0.27.3'
        }
      },
      osx: {
        options: {
          arch: 'x64',
          dir: 'app',
          name: 'yellowstone-live-heads-up-darwin-x64-v<%= pkg.version %>',
          out: 'dist/osx',
          platform: 'darwin',
          version: '0.27.3'
        }
      },
      win32x64: {
        options: {
          arch: 'x64',
          dir: 'app',
          name: 'yellowstone-live-heads-up-win32-x64-<%= pkg.version %>',
          out: 'dist/win32x64',
          platform: 'win32',
          version: '0.27.3'
        }
      },
      win32x86: {
        options: {
          arch: 'ia32',
          dir: 'app',
          name: 'yellowstone-live-heads-up-win32-x86-v<%= pkg.version %>',
          out: 'dist/win32x86',
          platform: 'win32',
          version: '0.27.3'
        }
      }
    },
    clean: {
      all: [
        'dist/**'
      ],
      linux: [
        'dist/linux/**'
      ],
      osx: [
        'dist/osx/**'
      ],
      win32x64: [
        '/dist/win32x64/**'
      ],
      win32x86: [
        'dist/win32x86/**'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadTasks('tasks');
  grunt.registerTask('build-all', [
    'clean:all',
    'electron:linux',
    'electron:osx',
    'electron:win32x64',
    'electron:win32x86'
  ]);
  grunt.registerTask('build-linux', [
    'clean:linux',
    'electron:linux'
  ]);
  grunt.registerTask('build-osx', [
    'clean:osx',
    'electron:osx'
  ]);
  grunt.registerTask('build-win32x64', [
    'clean:win32x64',
    'electron:win32x64'
  ]);
  grunt.registerTask('build-win32x86', [
    'clean:win32x86',
    'electron:win32x86'
  ]);
};
