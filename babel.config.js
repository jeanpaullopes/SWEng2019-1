module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true
                },
                useBuiltIns: 'usage'
            }
        ],
        '@babel/preset-react'
    ];

    return {
        presets
    };
};
