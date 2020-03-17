/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        mocha:{
            test:{
                src:'test/index.html'
            },
            options:{
                run:true,
                reportor:"Dot"
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-mocha');

    //定义构建的任务清单
    grunt.registerTask('default',['mocha']);
    
}