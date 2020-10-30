// Regular CSS config
// module.exports = {
//   type: 'react-app',
//   babel: {
//     plugins: [
//       ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}]
//     ]
//   }
// }

// Less config (with nwb-less installed)
module.exports = {
  type: 'react-app',
  babel: {
    plugins: [
      ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
    ]
  },
  webpack: {
    rules: {
      less: {
        lessOptions: { // If you are using less-loader@5 please spread the lessOptions to less directly
         javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#1DA57A'
          }
        }
      }
    }
  }
}
