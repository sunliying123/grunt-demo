/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        eslint:{
            options:{
                csslintrc:'./.eslintrc.json'
            },
            target:['*.js']
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-eslint');

    //定义构建的任务清单
    grunt.registerTask('default',['eslint']);
    
}