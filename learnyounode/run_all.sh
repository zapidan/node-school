#!/usr/bin/env sh

learnyounode select 'HELLO WORLD' ; learnyounode verify 01-hello_world/01-hello-world.js
learnyounode select 'BABY STEPS' ; learnyounode verify 02-baby_steps/02-baby-steps.js
learnyounode select 'MY FIRST I/O!' ; learnyounode verify 03-my_first_io/03-my-first-io.js
learnyounode select 'MY FIRST ASYNC I/O!' ; learnyounode verify 04-my_first_async_io/04-my-first-async-io.js
learnyounode select 'FILTERED LS' ; learnyounode verify 05-filtered_ls/05-filtered-ls.js
learnyounode select 'MAKE IT MODULAR' ; learnyounode verify 06-make_it_modular/06-program-list-file.js
learnyounode select 'HTTP CLIENT' ; learnyounode verify 07-http_client/07-http-client.js
learnyounode select 'HTTP COLLECT' ; learnyounode verify 08-http_collect/08-http-collect-bl.js
learnyounode select 'HTTP COLLECT' ; learnyounode verify 08-http_collect/08-http-collect-concat-stream.js
learnyounode select 'JUGGLING ASYNC' ; learnyounode verify 09-juggling_async/09-juggling-async.js
learnyounode select 'TIME SERVER' ; learnyounode verify 10-time_server/10-time-server.js
learnyounode select 'HTTP FILE SERVER' ; learnyounode verify 11-http_file_server/11-http-file-server.js
learnyounode select 'HTTP UPPERCASERER' ; learnyounode verify 12-http_uppercaserer/12-http-uppercaserer.js
learnyounode select 'HTTP JSON API SERVER' ; learnyounode verify 13-json_api_server/13-json-api-server.js