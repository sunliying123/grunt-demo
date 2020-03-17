/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./index.html',  //原文件
                dest:"dist/index.html" //压缩后文件目录
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    //定义构建的任务清单
    grunt.registerTask('default',['htmlmin']);
    
}