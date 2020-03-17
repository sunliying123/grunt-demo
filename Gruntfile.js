/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        imagemin:{
            files:{
                expand:true,
                src:['images/*.(png,jpg,gif)'],
                dest:'dist/'
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //定义构建的任务清单
    grunt.registerTask('default',['imagemin']);
    
}