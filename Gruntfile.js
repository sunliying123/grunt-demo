/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        run:{
            api:{
                options:{wait:false},
                args:['./app.js']
            }
        },
        mochacli:{
            all:['test/*.js'],
            options:{
                reportor:"spec",
                bail:true
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-run');

    //定义构建的任务清单
    grunt.registerTask('default',['run','mochacli','stop:api']);
    
}