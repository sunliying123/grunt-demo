module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        csslint:{
            options:{
                csslintrc:'./.csslintrc'
            },
            src:['*.css']
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-csslint');

    //定义构建的任务清单
    grunt.registerTask('default',['csslint']);
    
}