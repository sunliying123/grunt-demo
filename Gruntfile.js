module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        htmlhint:{
            options:{
                htmlhintrc:'./.htmlhintrc'
            },
            src:['*.html']
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-htmlhint');

    //定义构建的任务清单
    grunt.registerTask('default',['htmlhint']);
    
}