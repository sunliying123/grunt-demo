/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        cssmin:{
            'rectangle.min.css':'rectangle.css'
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //定义构建的任务清单
    grunt.registerTask('default',['cssmin']);
    
}