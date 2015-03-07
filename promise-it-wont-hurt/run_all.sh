#!/usr/bin/env sh

promise-it-wont-hurt select 'fulfill_a_promise' ; promise-it-wont-hurt  verify 01-fulfill_a_promise/01-fulfill-a-promise.js
promise-it-wont-hurt select 'reject_a_promise' ; promise-it-wont-hurt  verify 02-reject_a_promise/02-reject-a-promise.js
promise-it-wont-hurt select 'to_reject_or_not_to_reject' ; promise-it-wont-hurt  verify 03-to_reject_or_not_to_reject/03-to_reject_or_not_to_reject.js
promise-it-wont-hurt select 'always_async' ; promise-it-wont-hurt  verify 04-always_async/04-always-async.js
promise-it-wont-hurt select 'values_and_promises' ; promise-it-wont-hurt  verify 05-values_and_promises/05-values-and-promises.js
promise-it-wont-hurt select 'throw_an_error' ; promise-it-wont-hurt  verify 06-throw_an_error/06-throw-an-error.js
promise-it-wont-hurt select 'using_qfcall' ; promise-it-wont-hurt  verify 07-using_qfcall/07-using-qfcall.js
promise-it-wont-hurt select 'an_important_rule' ; promise-it-wont-hurt  verify 08-an_important_rule/08-an-important-rule.js
promise-it-wont-hurt select 'multiple_promises' ; promise-it-wont-hurt  verify 09-multiple_promises/09-multiple-promises.js
promise-it-wont-hurt select 'fetch_json' ; promise-it-wont-hurt  verify 10-fetch_json/10-fetch-json.js
promise-it-wont-hurt select 'do_some_work' ; promise-it-wont-hurt  verify 11-do_some_work/11-do-some-work.js
promise-it-wont-hurt select 'more_functional' ; promise-it-wont-hurt  verify 12-more_functional/12-more-functional.js