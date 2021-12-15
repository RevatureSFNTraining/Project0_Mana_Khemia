// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources/',
                    to: 'dist/resources/' },
                { from: 'node_modules/@salesforce-ux/design-system/assets',
                    to: 'src/SLDS'},
                { from: 'node_modules/@salesforce-ux/design-system/assets',
                    to: 'dist/SLDS'},
                { from: 'node_modules/mysql',
                    to: 'src/mysql'},
                { from: 'node_modules/mysql',
                    to: 'dist/mysql'}
        
        
            ],
        
            sourceDir: './src/client',
        
        
            devServer: {
                proxy: { '/': 'http://localhost:3002' }
            }
        
};
