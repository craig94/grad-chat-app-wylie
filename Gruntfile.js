module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-mocha-istanbul");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express-server");

    var files = ["Gruntfile.js", "server.js", "server/**/*.js", "test/**/*.js", "public/**/*.js"];
    var artifactsLocation = "build_artifacts";

    grunt.initConfig({
        jshint: {
            all: files,
            options: {
                jshintrc: true
            }
        },
        jscs: {
            files: {
                src: ["server.js", "server/**/*.js"]
            }
        },
        mochaTest: {
            test: {
                src: ["test/**/*.js"]
            }
        },
        "mocha_istanbul": {
            test: {
                src: ["test/**/*.js"]
            },
            options: {
                coverageFolder: artifactsLocation,
                reportFormats: ["none"],
                print: "none"
            }
        },
        "istanbul_report": {
            test: {

            },
            options: {
                coverageFolder: artifactsLocation
            }
        },
        "istanbul_check_coverage": {
            test: {

            },
            options: {
                coverageFolder: artifactsLocation,
                check: true
            }
        },
        tslint: {
            options: {
                // can be a configuration object or a filepath to tslint.json
                configuration: "tslint.json",
                // If set to true, tslint errors will be reported, but not fail the task
                // If set to false, tslint errors will be reported, and the task will fail
                force: true
            },
            files: {
                src: [
                    "public/**/*.ts"
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            express: {
                files: ["**/*.ts", "**/*.js", "**/*.html", "**/*.css"],
                tasks: ["express:dev"],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            options: {
                port: 8080
            },
            dev: {
                options: {
                    script: "server.js"
                }
            }
        }
    });

    grunt.registerMultiTask("istanbul_report", "Solo task for generating a report over multiple files.", function () {
        var done = this.async();
        var cmd = process.execPath;
        var istanbulPath = require.resolve("istanbul/lib/cli");
        var options = this.options({
            coverageFolder: "coverage"
        });
        grunt.util.spawn({
            cmd: cmd,
            args: [istanbulPath, "report", "--dir=" + options.coverageFolder]
        }, function(err) {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    grunt.registerTask("check", ["jscs"]);
    grunt.registerTask("test", ["check", "mochaTest", "mocha_istanbul", "istanbul_report",
        "istanbul_check_coverage"]);
    grunt.registerTask("serve", ["express:dev", "watch"]);
    grunt.registerTask("default", "test");
};
