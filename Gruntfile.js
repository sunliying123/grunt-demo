/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        uglify:{
            'rectangle.min.js':'rectangle.js'
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //定义构建的任务清单
    grunt.registerTask('default',['uglify']);
    
}