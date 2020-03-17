/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        concat:{
            files:{
                src:['rectangle.js','calc.js'],
                dest:'dist/bundle.js'
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-concat');

    //定义构建的任务清单
    grunt.registerTask('default',['concat']);
    
}