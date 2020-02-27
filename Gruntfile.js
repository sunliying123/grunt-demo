module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        less:{
            compile:{
                files:{'dist/compiled.css':'css/*.less'}
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-less');

    //定义构建的任务清单
    grunt.registerTask('default',['less:compile']);
    
}